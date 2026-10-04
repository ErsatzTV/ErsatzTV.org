---
uid: installation-macos
title: macOS
sidebar_position: 2
---

### Installing on macOS

1. Download the `.dmg` from the [latest release from GitHub](https://github.com/ErsatzTV/legacy/releases/latest).
2. Open the `.dmg` and drag `ErsatzTV` to the Applications folder.
3. Double-click the `ErsatzTV` application.
4. Use the tray menu to open the UI, view logs or exit.

#### FFmpeg

ErsatzTV depends on an up-to-date version of FFmpeg and FFprobe. macOS packages are bundled with all required dependencies, including FFmpeg, so FFmpeg from Homebrew is not needed. A custom FFmpeg path must point to an [ErsatzTV-FFmpeg](https://github.com/ErsatzTV/ErsatzTV-ffmpeg/releases/latest) build (the `macos64` or `macosarm64` assets).

When updating from a version without bundled FFmpeg, ErsatzTV switches the configured FFmpeg and FFprobe paths to the bundled builds once, on first start.

### Updating on macOS

1. Cleanly exit ErsatzTV using the tray menu.
2. Download the `.dmg` from the [latest release from GitHub](https://github.com/ErsatzTV/legacy/releases/latest).
3. Open the `.dmg` and drag `ErsatzTV` to the Applications folder and click yes to replace the files.
4. Double-click the `ErsatzTV` application.
5. Use the tray menu to open the UI, view logs or exit.

