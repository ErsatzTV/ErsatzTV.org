// Shared helpers for the ErsatzTV Next JSON schemas (sync-next-schemas.mjs, generate-next-reference.mjs).

// kind: the name in the version URL (https://ersatztv.org/{kind}/version/x.y.z); file: the schema in next/schema/
// versionRequired: files without a version fail to load, so schemas from before versioning don't count as 0.0.0
export const KINDS = [
  { kind: "lineup", file: "lineup_config.json", versionRequired: false },
  { kind: "channel", file: "channel_config.json", versionRequired: false },
  { kind: "playout", file: "playout.json", versionRequired: true },
];

const VERSION_ID = /\/version\/(\d+)\.(\d+)\.(\d+)$/;

// "0.1.2", or null for a schema from before versioning
export function schemaVersion(schema) {
  const match = VERSION_ID.exec(schema.$id ?? "");
  return match ? `${match[1]}.${match[2]}.${match[3]}` : null;
}

export function compareVersions(a, b) {
  const pa = a.replace(/^v/, "").split(".").map(Number);
  const pb = b.replace(/^v/, "").split(".").map(Number);
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] - pb[i];
  }
  return 0;
}

export function definitions(schema) {
  return schema.$defs ?? schema.definitions ?? {};
}

function refName(ref) {
  return ref.split("/").pop();
}

function discriminator(node) {
  for (const [name, property] of Object.entries(node.properties ?? {})) {
    if (property && property.const !== undefined) return `${name}=${property.const}`;
  }
  return null;
}

// Walks a schema from its root and calls visit(path, key) for every property and enum value.
//
// path: where the item is in a document, e.g. `.items[].source{source_type=http}.uri`. Paths are
//   the same across schema versions even when definitions are renamed or inlined, so they are used
//   to compare history.
// key: where the generated reference lists the item, by the definition that owns it in this
//   schema: `HttpSource.uri`, `StreamMode=copy`, or `VideoHint.rotation=90` for an inline enum.
//   The root definition is named by the schema's `title`.
export function walk(schema, visit) {
  const defs = definitions(schema);
  const rootOwner = schema.title ?? "root";

  function enumValues(values, path, owner) {
    for (const value of values) {
      if (value === null) continue;
      visit(`${path}=${value}`, `${owner}=${value}`);
    }
  }

  function node(n, path, owner, stack) {
    if (!n || typeof n !== "object") return;

    if (n.$ref) {
      const name = refName(n.$ref);
      if (stack.includes(name)) return;
      node(defs[name], path, name, [...stack, name]);
    }

    for (const [name, property] of Object.entries(n.properties ?? {})) {
      const propertyPath = `${path}.${name}`;
      visit(propertyPath, `${owner}.${name}`);
      node(property, propertyPath, `${owner}.${name}`, stack);
    }

    if (Array.isArray(n.enum)) enumValues(n.enum, path, owner);

    for (const keyword of ["oneOf", "anyOf"]) {
      for (const branch of n[keyword] ?? []) {
        if (branch.const !== undefined) {
          enumValues([branch.const], path, owner);
          continue;
        }
        const resolved = branch.$ref ? defs[refName(branch.$ref)] : branch;
        const tag = resolved ? discriminator(resolved) : null;
        node(branch, tag ? `${path}{${tag}}` : path, owner, stack);
      }
    }

    for (const branch of n.allOf ?? []) node(branch, path, owner, stack);

    if (n.items) node(n.items, `${path}[]`, owner, stack);
  }

  node(schema, "", rootOwner, []);
}

// A schema version URL, e.g. /channel/version/0.1.2. Every config file carries one in `version`.
export const VERSION_PATH = /^\/(lineup|channel|playout)\/version\/(\d+\.\d+\.\d+)\/?$/;

// Where a version URL leads: the reference page for that kind of file. `v` is for a banner that compares the file's
// version with the docs.
export function versionTarget(kind, version) {
  return `/next-docs/reference/${kind}?v=${version}`;
}
