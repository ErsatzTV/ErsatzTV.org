---
uid: configuration-scaling
title: Scaling
sidebar_position: 4
---

ErsatzTV Next scales each item to the channel's resolution. When the scale runs in software (ffmpeg's `scale` filter), `normalization.video.filters.scale.flags` sets the scaling algorithm:

```json
{
  "version": "https://ersatztv.org/channel/version/0.1.2",
  "normalization": {
    "video": {
      "filters": {
        "scale": {
          "flags": "lanczos"
        }
      }
    }
  }
}
```

If `flags` is not set, ErsatzTV Next uses `bicubic`.

The setting applies everywhere the software scaler runs: the main picture, watermarks and other graphics, and image-based subtitles. It also applies to hardware-accelerated channels when a step falls back to software scaling. Hardware scalers (e.g. `scale_cuda`, `scale_vaapi`, `vpp_qsv`) are not affected.

## Values

`flags` is passed to ffmpeg as-is, so any [swscale flags](https://ffmpeg.org/ffmpeg-scaler.html#sws_005fflags) work, including combinations joined with `+`. Suggested values:

| `flags` | Use |
|---------|-----|
| `bicubic` | Default. Good quality at low cost. |
| `lanczos` | Slightly sharper than `bicubic`, at nearly twice the scaling cost. |
| `bicubic+accurate_rnd+full_chroma_int` | `bicubic` with more accurate rounding and chroma. |
| `fast_bilinear` | Lowest CPU use. Visibly aliased when downscaling, e.g. stair-stepped text and shimmering detail. |

`flags` may only contain lowercase letters, digits, `_`, `.`, `+` and `-`. ErsatzTV Next rejects any other value when it loads the channel config.

## Cost

Scaling is a small part of a software transcode. Compared to `fast_bilinear`, a full software pipeline (decode, scale, libx264 encode) used under 1% more CPU with `bicubic` and about 3% more with `lanczos`, for both 1080p → 720p and 4K HDR → 1080p.

The difference is largest when scaling is the only software step, e.g. software decode and scale with a hardware encoder. There, `bicubic` adds roughly 1–8 ms of CPU per frame over `fast_bilinear`, depending on resolution (highest for 4K sources).

## ErsatzTV (Legacy)

ErsatzTV channels that use the next engine have no setting for this in the UI. To change it, set `flags` in a channel config overlay in ErsatzTV's config folder / `next` / `channel-config-overlays` (`default.json` for all channels, or `{number}.json` for one channel), using the example above.

The legacy engine always uses `fast_bilinear`.
