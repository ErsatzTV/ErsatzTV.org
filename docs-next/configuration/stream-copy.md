---
uid: configuration-stream-copy
title: Stream Copy
sidebar_position: 2
---

By default, ErsatzTV Next transcodes every item, so every item has the same codec, resolution and audio layout. With stream copy, ErsatzTV Next passes the source video or audio through without re-encoding it. This uses much less CPU or GPU and keeps the source quality. In exchange, the output changes whenever the source does.

Copy is set separately for audio and video, with `mode` in the channel config's `normalization` section:

```json
{
  "version": "https://ersatztv.org/channel/version/0.1.0",
  "normalization": {
    "audio": {
      "mode": "copy",
      "format": "aac",
      "bitrate_kbps": 192,
      "buffer_kbps": 384,
      "channels": 2,
      "sample_rate_hz": 48000
    },
    "video": {
      "mode": "copy",
      "format": "h264",
      "bit_depth": 8,
      "bitrate_kbps": 4000,
      "buffer_kbps": 8000,
      "accel": null
    }
  }
}
```

`mode` is `transcode` (the default) or `copy`.

## Items That Can't Be Copied

A copy channel never drops video, audio, subtitles or graphics to keep copying. When an item can't be copied, ErsatzTV Next transcodes that item, using the other settings in the same section (`format`, `bitrate_kbps`, `accel` and so on). The next item is copied again if it can be.

Video is transcoded when the item has:

- a source codec that is not in `copy_formats` (see below)
- a still image
- graphics, including watermarks
- burned-in subtitles: image subtitles (e.g. PGS, DVD), or text subtitles with subtitle mode `burn`
- Dolby Vision profile 5
- a generated (`lavfi`) source
- an AVI source
- a file that starts between keyframes (common for clips cut from recordings), or no keyframes where playback starts

Audio is transcoded when the item has a source codec that is not in `copy_formats`, a generated (`lavfi`) source, or an AVI source.

The fallback item is always transcoded.

ErsatzTV Next logs a warning for each item it transcodes, with the reasons:

```
copy channel transcodes item 1234: video (graphics layers, burned-in text subtitles)
```

### Settings for Transcoded Items

On a copy channel, all other settings in the section apply only to transcoded items:

- `width` / `height`: if set, transcoded items are scaled to this size. If not set, transcoded items keep their source size.
- `accel`: set a hardware acceleration method to transcode these items on the GPU.
- `normalize_loudness: true` can't be combined with audio `"mode": "copy"`, and the channel config fails to load. Loudness normalization of only some items would make volume jump between copied and transcoded items.

## Copy Formats

`copy_formats` lists the source codecs that are copied. Items with any other codec are transcoded.

| Stream | Default | Allowed values |
|--------|---------|----------------|
| Video | `["h264", "hevc"]` | `h264`, `hevc`, `mpeg2video` |
| Audio | `["aac", "ac3", "eac3", "mp3"]` | `aac`, `ac3`, `eac3`, `mp2`, `mp3` |

The allowed values are the codecs that HLS MPEG-TS segments carry correctly. `mpeg2video` and `mp2` (common in DVB recordings) are not copied by default, because most HLS clients can't play them. Add them if your clients can, e.g. HDHomeRun-style clients:

```json
"video": {
  "mode": "copy",
  "copy_formats": ["h264", "hevc", "mpeg2video"],
  ...
}
```

A shorter list trades CPU for consistency. For example, `["h264"]` copies H.264 and transcodes everything else to `format`.

## Seeking

Copied video can only start at a keyframe. When a stream starts partway through an item, ErsatzTV Next starts the copy at the closest keyframe at or before the scheduled position, and keeps the channel's timeline aligned with the schedule. Each item stays within a few frames of its scheduled length.

## Client Compatibility

Copied streams are standard HLS, but they are less uniform than transcoded streams, and some clients handle that poorly:

- **Changes between items.** Codec, resolution, frame rate and audio layout follow the source, so they can change at every item. ErsatzTV Next marks each item boundary as a discontinuity, which is correct HLS, but many clients (TVs, some web players, and some Plex / Jellyfin live TV setups) stutter, lose audio or stop at a change. Transcoding, or a short `copy_formats` list, gives clients a consistent stream.
- **Segment length.** Copy can't add keyframes, so segments are as long as the source's keyframe interval. Sources with long keyframe intervals produce long segments, which increases latency and the amount clients buffer.

## ErsatzTV (Legacy)

ErsatzTV channels that use the next engine copy a stream when the channel's FFmpeg Profile has `Normalize Video` or `Normalize Audio` disabled:

- Watermarks and graphics are not shown on copied video, as with the legacy engine.
- Items that can't be copied are transcoded with the profile's settings, without hardware acceleration.
- To transcode those items on the GPU, or to change `copy_formats`, use a channel config overlay in ErsatzTV's config folder / `next` / `channel-config-overlays` (`default.json` for all channels, or `{number}.json` for one channel):

```json
{
  "version": "https://ersatztv.org/channel/version/0.1.0",
  "normalization": {
    "video": {
      "accel": "qsv",
      "copy_formats": ["h264", "hevc", "mpeg2video"]
    }
  }
}
```
