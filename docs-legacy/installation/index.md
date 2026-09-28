---
uid: installation-index
title: Installation
---

ErsatzTV is available as Docker images and as pre-built binary packages for Windows (x64), MacOS (x64, arm64) and Linux (x64, arm64). 

- [Windows](/docs/installation/windows)
- [macOS](/docs/installation/macos)
- [Linux](/docs/installation/linux)
- [Docker](/docs/installation/docker)
- [Unraid](/docs/installation/advanced/unraid)

### Release Builds

The latest release build can be found on ErsatzTV's [latest release](https://github.com/ErsatzTV/legacy/releases/latest) page. More details are provided on the platform-specific installation pages.

### Development Builds

The [latest development build](https://github.com/ErsatzTV/legacy-develop-builds/releases/latest) for all supported architectures can be found in the separate [legacy-develop-builds](https://github.com/ErsatzTV/legacy-develop-builds/releases) repository.
A new development build is published for every push to the main branch, and is named after the upcoming release and the commit it was built from, e.g. `v26.11.0-f8410286-develop` for a build made after `v26.10.0`.
Development builds have the potential to be less stable than releases, and only the 100 most recent development builds are kept.

### Downgrading

:::warning
Downgrading ErsatzTV is **not supported**. Newer versions generally include database schema changes, configuration changes, etc, which are **not** backwards-compatible.

As a rule of thumb, if you are using development builds you must stay using development builds until the next full release, at which point you can switch over to a full release.

The only way to safely downgrade ErsatzTV, from development or full release to **any** previous version, is by backing up and restoring the entire ErsatzTV config folder.
:::
