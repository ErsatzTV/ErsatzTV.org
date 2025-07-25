---
uid: installation-docker
title: Docker
sidebar_position: 4
---

## Docker Images

<a href="https://hub.docker.com/r/jasongdove/ersatztv"><img alt="Docker Pull Count" src="https://img.shields.io/docker/pulls/jasongdove/ersatztv" /></a>

### Latest Release

- `jasongdove/ersatztv:latest`
- `ghcr.io/ersatztv/ersatztv:latest`

### Development Release

Development releases update much more frequently, but have the potential to be less stable than full releases. 

- `jasongdove/ersatztv:develop`
- `ghcr.io/ersatztv/ersatztv:develop`

### FFmpeg

ErsatzTV depends on an up-to-date version of FFmpeg and FFprobe. Docker images are bundled with all required dependencies, including FFmpeg.

## Docker

1\. Download the latest container image

```bash
docker pull ghcr.io/ersatztv/ersatztv
```

2\. Create a directory to store configuration data

```bash
mkdir /path/to/config
```

3\. Create and run a container

```bash
docker run -d \
  --name ersatztv \
  -e TZ=America/Chicago \
  -p 8409:8409 \
  -v /path/to/config:/config \
  -v /path/to/local/media:/path/to/local/media:ro \
  --restart unless-stopped \
  ghcr.io/ersatztv/ersatztv
```

4\. To limit the writing to an SSD drive you can add a Temporary File System by adding this line to your docker container before the line `ghcr.io/ersatztv/ersatztv`

```bash
  --mount type=tmpfs,destination=/transcode \
```
