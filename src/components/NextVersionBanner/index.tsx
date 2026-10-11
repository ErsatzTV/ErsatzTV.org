import React, {type ReactNode} from 'react';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';

import versions from '@site/docs-next/reference/_generated/versions.json';
import {compareVersions} from '@site/scripts/lib/next-schema.mjs';

type Kind = keyof typeof versions;

// Migration guides from an older breaking line (`B` in 0.B.C) to the current one, by kind and the old `B`.
const MIGRATIONS: Partial<Record<Kind, Record<string, string>>> = {
  channel: {'0': '/next-docs/reference/versions#updating-channel-configs-to-010'},
};

const VERSION = /^\d+\.\d+\.\d+$/;
const breaking = (version: string) => version.split('.')[1];

// A config file's `version` URL leads to its reference page with `?v=x.y.z` (see versionTarget() in
// scripts/lib/next-schema.mjs). This compares that version with the version the page describes.
// The query string only exists in the browser, so nothing renders during the static build.
export default function NextVersionBanner({kind}: {kind: Kind}): ReactNode {
  const isBrowser = useIsBrowser();
  const {search} = useLocation();
  if (!isBrowser) return null;

  const version = new URLSearchParams(search).get('v');
  const {current, known} = versions[kind];
  if (!version || !VERSION.test(version) || version === current) return null;

  const file = <code>{version}</code>;
  const page = <code>{current}</code>;

  if (compareVersions(version, current) > 0) {
    return (
      <Admonition type="warning" title={`${kind} version ${version}`}>
        Your file uses version {file}. These docs describe version {page}, so they are older than your file. Your
        file can use properties that are not on this page.
      </Admonition>
    );
  }

  if (breaking(version) === breaking(current)) {
    return (
      <Admonition type="info" title={`${kind} version ${version}`}>
        Your file uses version {file}. This page describes version {page}. Properties and values with a later{' '}
        <strong>Since</strong> are not in version {file}. To use one, set your file's <code>version</code> to a
        version that has it, and use an ErsatzTV Next release that reads that version (see{' '}
        <Link to="/next-docs/reference/releases">Releases</Link>).
      </Admonition>
    );
  }

  const migration = MIGRATIONS[kind]?.[breaking(version)];
  return (
    <Admonition type="warning" title={`${kind} version ${version}`}>
      Your file uses version {file}. This page describes version {page}, which has breaking changes from your
      version. ErsatzTV Next does not load your file until you update it (see{' '}
      <Link to={migration ?? '/next-docs/reference/versions#compatibility'}>
        {migration ? 'the migration guide' : 'Compatibility'}
      </Link>
      ).
      {known.includes(version) && (
        <>
          {' '}The schema for version {file} is at{' '}
          <a href={`/schema/${kind}/${version}.json`}>
            /schema/{kind}/{version}.json
          </a>
          .
        </>
      )}
    </Admonition>
  );
}
