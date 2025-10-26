---
uid: media-local-remotestreams-sample
title: Sample Remote Streams
sidebar_position: 2
---

## Local Camera

```yaml title="local_camera.yml"
url: "rtsp://user:pass@192.168.1.100/h264_Preview_01_sub"
is_live: true
duration: 01:00:00
```

## Remote VOD Content

Note: `yt-dlp` is not on the official docker image by default you will need to add it to the image. 

```yaml title="remote_vod.yml"
script: "yt-dlp whatever --hls-use-mpegts -o -"
is_live: false
```

## Remote Live Content

Note: `yt-dlp` is not on the official docker image by default you will need to add it to the image.

```yaml title="remote_live"
script: "yt-dlp whatever-live --hls-use-mpegts -o -"
is_live: true
duration: 02:00:00
