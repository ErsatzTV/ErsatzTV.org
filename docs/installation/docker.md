---
uid: installation-docker
title: Docker
sidebar_position: 4
---

:::warning
If you want to use Windows or macOS, please run ErsatzTV natively instead. See [Windows](/docs/installation/windows) and [macOS](/docs/installation/macos).

While it is possible to run ErsatzTV in Docker on a Windows or macOS host, it is **not** supported. Some features are known to be broken when running in Docker on platforms other than Linux, including:

- Hardware acceleration
- Scanning on macOS in Docker

You **will not** receive any support for running ErsatzTV in Docker on platforms other than Linux.
:::

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

## Docker Compose

1\. Ensure you have docker compose installed: https://docs.docker.com/compose/install

2\. Create your docker compose file using the below sample as a guide

:::warning
**NVIDIA GPU Passthrough**

In order to use your Nvidia GPU with Docker, you will need to first install the Nvidia Container Toolkit.

See [Nvidia Container Toolkit Installation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
:::
```yaml
services:
  ersatztv:
    image: ghcr.io/ersatztv/ersatztv
    container_name: ersatztv
    environment:
      - TZ=America/Chicago # Edit for your timezome, list can be found https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      - PGID=1000
      - PUID=1000
# UNCOMMENT THESE LINES TO ENABLE NVIDIA GPU PASSTHROUGH
      #- NVIDIA_VISIBLE_DEVICES:all
      #- NVIDIA_DRIVER_CAPABILITIES:all
    #deploy:
    #    resources:
    #      reservations:
    #        devices:
    #          - driver: nvidia
    #            count: 1
    #            capabilities: [gpu]
    ports: # This maps port from host:container
      - "8409:8409"
    volumes:
     # Required: Configuration data (must be writable)
      - /path/to/config:/config
     # Required: media directories - Where your media files are stored. Use :ro at the end of the path to limit container to Read-Only
      - /path/to/local/media:/path/to/local/media:ro
# tmpfs is optional but recommended: Limits writing to SSD/disk by using RAM for transcode files. Comment out to disable
    tmpfs:
      - /transcode
    restart: unless-stopped
```

3\. Run the container using docker compose command

```bash
docker compose up -d /path/to/compose/file
```
