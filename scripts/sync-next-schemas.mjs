#!/usr/bin/env node
// Copies the ErsatzTV Next JSON schemas into schemas/next/ and writes schemas/next/since.json.
// Also writes every released or unreleased schema version to static/schema/{kind}/{x.y.z}.json.
//
// Usage: node scripts/sync-next-schemas.mjs <next-checkout> [ref]   (ref defaults to origin/main)
//
// since.json records, for every property and enum value in the current schemas, the first schema
// version in the current breaking line that has it, and the first release that shipped it. It is
// derived from the git history of each schema file, so the checkout must have full history and tags.

import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { KINDS, compareVersions, schemaVersion, walk } from "./lib/next-schema.mjs";

const [checkout, ref = "origin/main"] = process.argv.slice(2);
if (!checkout) {
  console.error("usage: node scripts/sync-next-schemas.mjs <next-checkout> [ref]");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outFolder = join(root, "schemas", "next");
// served as /schema/{kind}/{x.y.z}.json, for editors that validate config files
const rawFolder = join(root, "static", "schema");

function git(...args) {
  return execFileSync("git", ["-C", checkout, ...args], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

const releaseTags = git("tag", "--list", "v*")
  .split("\n")
  .filter((tag) => /^v\d+\.\d+\.\d+$/.test(tag))
  .sort(compareVersions);

const releaseCache = new Map();
// the first release that contains the commit, or null when it is not released yet
function firstRelease(commit) {
  if (!releaseCache.has(commit)) {
    const containing = new Set(git("tag", "--contains", commit).split("\n"));
    releaseCache.set(commit, releaseTags.find((tag) => containing.has(tag)) ?? null);
  }
  return releaseCache.get(commit);
}

const breakingOf = (version) => version.split(".")[1];

const commit = git("rev-parse", ref).trim();
const since = { source: { repository: "https://github.com/ErsatzTV/next", commit }, schemas: {} };

mkdirSync(outFolder, { recursive: true });

for (const { kind, file, versionRequired } of KINDS) {
  const schemaPath = `schema/${file}`;
  const currentText = git("show", `${commit}:${schemaPath}`);
  const current = JSON.parse(currentText);
  const currentVersion = schemaVersion(current);
  writeFileSync(join(outFolder, file), currentText);

  // oldest first
  const history = git("log", "--format=%H", "--reverse", commit, "--", schemaPath)
    .split("\n")
    .filter(Boolean)
    .map((hash) => {
      const schema = JSON.parse(git("show", `${hash}:${schemaPath}`));
      return { hash, schema, $id: schemaVersion(schema) };
    })
    // next reads a missing version as 0.0.0, unless the file must have one
    .filter((entry) => entry.$id || !versionRequired)
    .map((entry) => ({ ...entry, version: entry.$id ?? "0.0.0" }));

  // every version URL that has existed, and the first release that reads it
  const versions = {};
  const lastSchemaText = new Map();
  for (const { hash, $id } of history) {
    if (!$id) continue;
    if (!versions[$id]) versions[$id] = { release: firstRelease(hash) };
    // the last commit at a version has its final descriptions
    lastSchemaText.set($id, git("show", `${hash}:${schemaPath}`));
  }

  rmSync(join(rawFolder, kind), { recursive: true, force: true });
  mkdirSync(join(rawFolder, kind), { recursive: true });
  for (const [version, text] of lastSchemaText) {
    writeFileSync(join(rawFolder, kind, `${version}.json`), text);
  }

  // the first commit in the current breaking line where each path appears
  const firstSeen = new Map();
  for (const entry of history) {
    if (breakingOf(entry.version) !== breakingOf(currentVersion)) continue;
    walk(entry.schema, (path) => {
      if (!firstSeen.has(path)) firstSeen.set(path, entry);
    });
  }

  // a key can be reached by several paths (a definition used in two places); the earliest wins
  const items = {};
  walk(current, (path, key) => {
    const entry = firstSeen.get(path);
    const previous = items[key];
    if (!previous || compareVersions(entry.version, previous.version) < 0) {
      items[key] = { version: entry.version, release: firstRelease(entry.hash) };
    }
  });

  since.schemas[kind] = {
    file,
    version: currentVersion,
    versions: Object.fromEntries(Object.entries(versions).sort(([a], [b]) => compareVersions(a, b))),
    items: Object.fromEntries(Object.entries(items).sort(([a], [b]) => a.localeCompare(b))),
  };
}

writeFileSync(join(outFolder, "since.json"), JSON.stringify(since, null, 2) + "\n");
console.log(`synced ${KINDS.map(({ file }) => file).join(", ")} and since.json from ${commit.slice(0, 7)}`);
