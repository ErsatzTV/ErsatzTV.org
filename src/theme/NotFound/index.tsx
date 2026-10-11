import React, {type ReactNode, useEffect} from 'react';
import NotFound from '@theme-original/NotFound';
import type NotFoundType from '@theme/NotFound';
import type {WrapperProps} from '@docusaurus/types';

import {VERSION_PATH, versionTarget} from '@site/scripts/lib/next-schema.mjs';

type Props = WrapperProps<typeof NotFoundType>;

// Known schema versions have their own redirect pages in static/. This catches versions newer than
// the last schema sync, so a config file's `version` URL never ends on a 404.
export default function NotFoundWrapper(props: Props): ReactNode {
  useEffect(() => {
    const match = VERSION_PATH.exec(window.location.pathname);
    if (match) {
      window.location.replace(versionTarget(match[1], match[2]) + window.location.hash);
    }
  }, []);

  return <NotFound {...props} />;
}
