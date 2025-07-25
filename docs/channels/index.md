---
uid: channels-index
title: Channels
---

Create a Channel by navigating to the **Channels** page and clicking **Add Channel**.

## Channel Number

Channel numbers can be whole numbers or can contain one decimal, like `500` or `500.5`.

## Streaming Mode

Four streaming modes are currently supported. Ideally one of the two primary streaming modes should be used; secondary streaming modes are only needed in some edge cases.

### Primary Streaming Modes

The two primary streaming modes are **HLS Segmenter** (HTTP Live Streaming Segmenter) and **MPEG-TS** (Transport Stream).

* **HLS Segmenter** transcodes content, supports watermarks and offers the best performance at program boundaries
* **MPEG-TS** is a light wrapper over the **HLS Segmenter** streaming mode and provides support for clients that require an HDHomeRun tuner

### Secondary Streaming Modes

The two secondary streaming modes are **HLS Direct** (HTTP Live Streaming Direct) and **MPEG-TS (Legacy)** (Legacy Transport Stream).

* **HLS Direct** does not transcode content and can perform better on low power systems, but does not support watermarks and some clients will have issues at program boundaries
* **MPEG-TS (Legacy)** transcodes content and supports watermarks, though some clients will have issues at program boundaries. This mode will be removed with a future release.

## FFmpeg Profile

FFmpeg Profiles are collections of transcoding settings that are applied to all content on a channel.
The default FFmpeg Profile is probably "good enough" for initial testing.

## Logo

Channel logos can be added using the **Upload Logo** button and the logos will display in most client program guides.
