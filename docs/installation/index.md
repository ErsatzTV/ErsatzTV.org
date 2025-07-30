---
uid: installation-index
title: Installation
---

ErsatzTV is available as Docker images and as pre-built binary packages for Windows (x64), MacOS (x64, arm64) and Linux (x64, arm64, arm). 

- [Windows](/docs/installation/windows)
- [macOS](/docs/installation/macos)
- [Linux](/docs/installation/linux)
- [Docker](/docs/installation/docker)
- [Unraid](/docs/installation/advanced/unraid)

### Release Builds

Release builds can be found on ErsatzTV's [releases](https://github.com/ErsatzTV/ErsatzTV/releases) page. More details are provided on the platform-specific installation pages.

### Development Builds

Development builds for all supported architectures can be found on the [develop release](https://github.com/ErsatzTV/ErsatzTV/releases/tag/develop).
The development builds are updated with every push to the main branch and have the potential to be less stable than releases.

### Downgrading

:::warning
Downgrading ErsatzTV is **not supported**. Newer versions generally include database schema changes, configuration changes, etc, which are **not** backwards-compatible.

As a rule of thumb, if you are using development builds you must stay using development builds until the next full release, at which point you can switch over to a full release.

The only way to safely downgrade ErsatzTV, from development or full release to **any** previous version, is by backing up and restoring the entire ErsatzTV config folder.
:::
