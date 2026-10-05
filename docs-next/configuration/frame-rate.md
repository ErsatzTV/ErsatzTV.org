---
uid: configuration-frame-rate
title: Frame Rate
sidebar_position: 3
---

By default, ErsatzTV Next keeps each item's source frame rate, so the channel's frame rate changes whenever the source does. Some clients stutter or stop when the frame rate changes mid-stream, and graphics can look uneven when the content's rate changes underneath them.

Set `frame_rate` in the channel config's `normalization.video` section to give every item the same output frame rate:

```json
{
  "version": "https://ersatztv.org/channel/version/0.1.1",
  "normalization": {
    "video": {
      "frame_rate": "30000/1001"
    }
  }
}
```

`frame_rate` is a string, either a whole number (`"25"`) or a fraction (`"30000/1001"`), between 1 and 240 fps. Decimals are rejected because they are ambiguous: `29.97` is not exactly `30000/1001`. Common values:

| Rate | `frame_rate` |
|------|--------------|
| 23.976 | `"24000/1001"` |
| 24 | `"24"` |
| 25 | `"25"` |
| 29.97 | `"30000/1001"` |
| 30 | `"30"` |
| 50 | `"50"` |
| 59.94 | `"60000/1001"` |
| 60 | `"60"` |

If `frame_rate` is not set, the source frame rate passes through.

## How Items Are Converted

ErsatzTV Next drops or duplicates frames to reach the target rate. It doesn't blend or interpolate frames, so item durations and audio are unchanged. A lower rate (e.g. 60 to 30) drops frames, which also reduces the work for graphics and encoding. A higher rate (e.g. 24 to 60) duplicates frames, and can't make motion smoother than the source.

Conversion happens after deinterlacing and before scaling and graphics, so watermarks and graphics are drawn at the target rate.

## Stream Copy

Copied video can't change its frame rate. On a channel with video `"mode": "copy"` and a `frame_rate`, items that already have the target rate are copied, and all other items are transcoded. See [Stream Copy](stream-copy).

## ErsatzTV (Legacy)

ErsatzTV channels that use the next engine set `frame_rate` when the channel's FFmpeg Profile has `Normalize Frame Rate` enabled. The target is the same as with the legacy engine: when the channel's scheduled items have more than one frame rate, it's the lowest one above 23 fps.

To use a fixed rate instead, set `frame_rate` in a channel config overlay in ErsatzTV's config folder / `next` / `channel-config-overlays` (`default.json` for all channels, or `{number}.json` for one channel):

```json
{
  "version": "https://ersatztv.org/channel/version/0.1.1",
  "normalization": {
    "video": {
      "frame_rate": "25"
    }
  }
}
```
