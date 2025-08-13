---
uid: advanced-custom-stream-selector
title: Custom Stream Selector
sidebar_position: 1
---

Custom stream selectors allow a high level of control over audio and subtitle stream selection by using a prioritized list of preferred audio, subtitle and content criteria.

## Stream Selector Definitions

Stream selectors are defined in YAML files which must be placed in ErsatzTV's config folder / `scripts` / `channel-stream-selectors`, and they must contain a list of **items**, which are audio, subtitle and content criteria.

```yaml
items:
  # english audio (wildcard matches `en` and `eng`), and no subtitles
  - audio_language: ["en*"]
    disable_subtitles: true

  # any audio language, and no subtitles
  - audio_language: ["*"]
    disable_subtitles: true
```

:::note
Audio and subtitle criteria must **both** be matched in a single item to finalize stream selection.
:::

## Stream Selector Item Parameters

### Audio Language

**audio_language** is a list of strings that may include wildcards (`*`) and are used to filter audio streams that do not match the specified language.

```yaml
audio_language: ["en", "eng"]
```

### Audio Title Block List

**audio_title_blocklist** is a list of strings and is used to filter audio streams when the audio title contains any string from the blocklist.

```yaml
audio_title_blocklist: ["riff"]
```

### Audio Title Allow List

**audio_title_allowlist** is a list of strings and is used to filter audio streams when the audio title *does not* contain any string from the allowlist.

```yaml
audio_title_allowlist: ["riff"]
```

### Audio Condition

**audio_condition** is an expression that can use the following fields:

- **id** - stream index
- **title** - stream title
- **lang** - stream language tag (two or three letters)
- **default** - `true` or `false`, if the stream is flagged as default
- **forced** - `true` or `false`, if the stream is flagged as forced
- **codec** - stream codec
- **channels** - the whole number of audio channels, i.e. 5.1 audio has 6 channels

```yaml
# title contains 'movie' and has more than 2 audio channels
audio_condition: "title like '%movie%' and channels > 2"
```

### Disable Subtitles

**disable_subtitles** will prevent selecting any subtitle when set to **true**.

```yaml
disable_subtitles: true
```

### Subtitle Language

**subtitle_language** is a list of strings that may include wildcards (`*`) and are used to filter subtitle streams that do not match the specified language.

```yaml
subtitle_language: ["en", "eng"]
```

### Subtitle Title Block List

**subtitle_title_blocklist** is a list of strings and is used to filter subtitle streams when the subtitle title contains any string from the blocklist.

```yaml
subtitle_title_blocklist: ["riff"]
```

### Subtitle Title Allow List

**subtitle_title_allowlist** is a list of strings and is used to filter subtitle streams when the subtitle title *does not* contain any string from the allowlist.

```yaml
subtitle_title_allowlist: ["riff"]
```

### Subtitle Condition

**subtitle_condition** is an expression that can use the following fields:

- **id** - stream index
- **title** - stream title
- **lang** - stream language tag (two or three letters)
- **default** - `true` or `false`, if the stream is flagged as default
- **forced** - `true` or `false`, if the stream is flagged as forced
- **codec** - stream codec
- **sdh** - if the stream is flagged as SDH
- **external** - if the stream is external, such as with SRT files, as opposed to embedded in the media file

```yaml
# external/sidecar english subtitles
subtitle_condition: "lang like 'en%' and external"
```

### Content Condition

:::warning
This feature is under active development and is only available on develop [builds](/docs/installation/#development-builds) and [tags](/docs/installation/docker#development-release).
:::

**content_condition** is an expression that can use the following fields:

- **channel_number** - channel number
- **channel_name** - channel name
- **time_of_day_seconds** - the content start time, represented in seconds since midnight

```yaml
# after noon
content_condition: "time_of_day_seconds >= 43200"
```

## Sample Stream Selectors

### Disable RiffTrax

```yaml
items:
  # english audio without "riff" in the title
  - audio_language: ["en*"]
    audio_title_blocklist: ["riff"]
    disable_subtitles: true

  # english audio with no subtitles
  - audio_language: ["en*"]
    disable_subtitles: true

  # any other language audio with english subtitles
  - audio_language: ["*"]
    subtitle_language: ["en*"]

  # any language audio with no subtitles
  - audio_language: ["*"]
    disable_subtitles: true
```

### Prefer RiffTrax

```yaml
items:
  # english audio with "riff" in the title
  - audio_language: ["en*"]
    audio_title_allowlist: ["riff"]
    disable_subtitles: true

  # english audio with no subtitles
  - audio_language: ["en*"]
    disable_subtitles: true

  # any other language audio with english subtitles
  - audio_language: ["*"]
    subtitle_language: ["en*"]

  # any language audio with no subtitles
  - audio_language: ["*"]
    disable_subtitles: true
```

### Dual Audio Anime

```yaml
items:
  # 1. Prefer English audio, disable subtitles
  - audio_language: ["en*"]
    disable_subtitles: true

  # 2. Fallback to Japanese audio, enable English subtitles
  - audio_language: ["ja*"]
    subtitle_language: ["en*"]

  # 3. If audio is anything else, enable English subtitles
  - audio_language: ["*"]
    subtitle_language: ["en*"]

  # 4. Catch all: any audio when English subtitles are unavailable
  - audio_language: ["*"]
    disable_subtitles: true
```