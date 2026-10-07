---
uid: releases
title: Releases
sidebar_position: 4
---

ErsatzTV Next is published as versioned releases and as development builds. Published releases and builds never change: a version number always refers to the same files.

:::note
ErsatzTV (legacy) users don't need to install ErsatzTV Next separately. Each ErsatzTV release bundles a specific ErsatzTV Next version.
:::

## Downloads

- **Binaries:** the [latest release](https://github.com/ErsatzTV/next/releases/latest) has builds for Windows (x64), Linux (x64, x64 musl, arm64) and macOS (x64, arm64). Each archive contains `ersatztv`, `ersatztv-channel` and `ersatztv-playout-generator` (and `libvpl.dll` on Windows).
- **Docker:** `ersatztv/next` (also `ghcr.io/ersatztv/next`) for `linux/amd64` and `linux/arm64`.
- **FFmpeg:** use the [ErsatzTV-ffmpeg](https://github.com/ErsatzTV/ErsatzTV-ffmpeg/releases/latest) build. The Docker image already includes it.

To see which version you're running:

```bash
ersatztv --version
```

## Version Numbers

Releases use [semantic versioning](https://semver.org). Before `1.0`, versions have the form `0.B.C`, the same rule as the [config versions](configuration/versions):

- `B` changes with every breaking change, for example `0.2.3` to `0.3.0`.
- `C` changes with every other release, whether it adds features or only fixes bugs, for example `0.2.3` to `0.2.4`.

A release is breaking when something that worked with the previous release can stop working:

- a config format changes its `B` (lineup, channel or playout);
- a command-line option or subcommand of `ersatztv`, `ersatztv-channel` or `ersatztv-playout-generator` is removed or renamed;
- an HTTP route or the HLS output of `ersatztv` is removed or changes;
- a default changes in a way that changes the output of an existing config.

The [changelog](https://github.com/ErsatzTV/next/blob/main/CHANGELOG.md) lists breaking changes under **Breaking**, with instructions for updating your configs.

## Compatibility

The release notes of every release and development build end with a **Compatibility** section that lists:

- the config versions that build reads, for example "Channel config: reads versions `0.1.0` to `0.1.1`";
- the ErsatzTV-ffmpeg version it was built and tested with.

A newer ErsatzTV Next can need a newer ErsatzTV-ffmpeg. It still runs with an older build, but can lack the fixes and features that need the newer one, so update ErsatzTV-ffmpeg along with ErsatzTV Next.

## Docker Tags

| Tag | Follows |
|---|---|
| `latest` | the newest release |
| `v0.2` | the newest `0.2.x` release, so it stops before the next breaking release |
| `v0.2.0` | exactly that release |
| `develop` | the newest development build |
| `v0.2.1-f8410286-develop` | exactly that development build |

For Docker Compose, a `vX.Y` tag picks up fixes and features without a breaking change.

## Development Builds

Development builds are published from the main branch in [ErsatzTV/next-develop-builds](https://github.com/ErsatzTV/next-develop-builds/releases/latest), ahead of the next release. A development build is named after the release it leads to and the commit it was built from. For example, `v0.2.1-f8410286-develop` is commit `f8410286` on the way to `v0.2.1`, and reports `0.2.1-f8410286-develop+linux-x64` as its version on Linux x64.

Development builds are less tested than releases. Only the newest 100 are kept.
