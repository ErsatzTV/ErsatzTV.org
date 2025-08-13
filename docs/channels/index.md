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

## Stream Selector Mode

This setting influences how audio and subtitle streams are selected for playback. The two options are **Default** and **Custom**.

### Default Audio Stream Selector

By default, audio stream selection filters by **Preferred Audio Language** and **Preferred Audio Title** and from the remaining streams, selects either the audio stream that is flagged as default or the audio stream with the most channels.

### Default Subtitle Stream Selector

By default, subtitles are first filtered by **Preferred Subtitle Language** if configured. Then, subtitle stream selection depends on the selected **Subtitle Mode**:

- **None** - Subtitles are disabled.
- **Forced** - Subtitles are ordered by stream index and the first subtitle with the forced metadata flag set is selected, if one exists.
- **Default** - The first subtitle with the default metadata flag set (then ordered by stream index) is selected, if one exists.
- **Any** - The first subtitle ordered by stream index is selected, if one exists.

### Custom Stream Selector

A [custom stream selector](/docs/channels/streamselector) can be used for much greater control over audio and subtitle stream selection.

## Logo

Channel logos can be added using the **Upload Logo** button and the logos will display in most client program guides.
