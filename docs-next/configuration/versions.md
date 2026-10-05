---
uid: configuration-versions
title: Config Versions
sidebar_position: 1
---

Every ErsatzTV Next config file declares the version of its format in a `version` property. ErsatzTV Next checks the version when it loads the file, so a file written for a different format fails with a clear error instead of being misread.

```json
{
  "version": "https://ersatztv.org/channel/version/0.1.0",
  ...
}
```

## Current Versions

- **Lineup**: `https://ersatztv.org/lineup/version/0.0.1`
- **Channel**: `https://ersatztv.org/channel/version/0.1.1`
- **Playout**: `https://ersatztv.org/playout/version/0.0.5`

## Compatibility

Versions have the form `0.B.C` (`B` for breaking, `C` for compatible):

- `B` changes when the format changes in a way that older files can't be read correctly. ErsatzTV Next rejects a file whose `B` differs from its own.
- `C` changes when the format gains new, optional properties. ErsatzTV Next loads any file with the same `B` and a `C` up to its own.

A file without a `version` is treated as `0.0.0`. A lineup without a version still loads. A channel config without a version is rejected, because the channel format is now `0.1.0`.

## Channel Config Overlays

A channel can merge overlay files on top of its base `channel.json` (the `overlays` list in the lineup). ErsatzTV Next checks each file's version **before** merging, so every overlay needs its own `version`, even an overlay that sets a single value:

```json
{
  "version": "https://ersatztv.org/channel/version/0.1.0",
  "fallback": {
    "show_error": false
  }
}
```

An overlay without a version stops the channel from starting.

:::note
ErsatzTV (legacy) users with next engine channels: overlays in ErsatzTV's config folder / `next` / `channel-config-overlays` (`default.json` and `{number}.json`) follow the same rules.
:::

## Updating Channel Configs to 0.1.0

Channel version `0.1.0` replaced the implicit "`"format": null` means copy" with an explicit `mode`:

1. Set `"version": "https://ersatztv.org/channel/version/0.1.0"` in `channel.json` and in every overlay.
2. Replace `"format": null` with `"mode": "copy"` in `normalization.audio` or `normalization.video`. Keep or add a `format` for items that can't be copied; see [Stream Copy](stream-copy).
3. Remove `normalize_loudness: true` from audio that uses `"mode": "copy"`. ErsatzTV Next rejects that combination.

`"format": null` in a base `channel.json` is now a load error. In an overlay, `null` removes the key from the merged config, so the default `format` (`h264` / `aac`) applies. It does not enable copy.
