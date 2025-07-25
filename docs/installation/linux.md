---
uid: installation-linux
title: Linux
sidebar_position: 3
---

### Installing on Linux

1. Create a folder `ersatztv` at your preferred install location.
2. Download and extract the [latest release from GitHub](https://github.com/ErsatzTV/ErsatzTV/releases) to the `ersatztv` folder.
3. Run `ErsatzTV`.
4. Open your browser to `http://[server-ip]:8409`.

#### FFmpeg

ErsatzTV depends on an up-to-date version of FFmpeg and FFprobe. A compatible version of FFmpeg may be found at [ErsatzTV-FFmpeg](https://github.com/ErsatzTV/ErsatzTV-ffmpeg/releases/tag/7.1.1).

### Updating on Linux

1. Cleanly exit ErsatzTV using Ctrl+C or the command:

```shell
kill -SIGINT `pgrep ErsatzTV`
```

2. Completely empty the folder where you originally extracted ErsatzTV.
3. Download the [latest release from GitHub](https://github.com/ErsatzTV/ErsatzTV/releases).
4. Extract the latest release to the now-empty install location.
5. Run `ErsatzTV`.
6. Open your browser to `http://[server-ip]:8409`.
