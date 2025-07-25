---
uid: media-local-remotestreams-definition
title: Remote Stream Definitions
sidebar_position: 1
hide_table_of_contents: true
---

Each remote stream is defined in a YAML (`.yml`) file with the following fields:

- **url** - The URL of the content that can be played directly by FFmpeg.
- **script** - The process name and arguments for a command that will output content to stdout.
- **is_live** - *required* property that indicates whether the remote stream contains live content
  - When this is set to **true**, ErsatzTV cannot work ahead on transcoding this item, which is a necessary tradeoff for supporting live content
  - When this is set to **false**, ErsatzTV will treat the stream as VOD and attempt to work ahead on transcoding like any other library item.
- **duration** - When the content is live and does not have duration metadata, this must be provided to allow scheduling, and is in the format "HH:MM:SS".

:::note
The remote stream definition must provide either a **url** or a **script**.
If both are provided, **url** will be used.
:::

:::warning
Setting **is_live** to **false** *will* cause errors when the content is actually live, so it is important to configure this field correctly.
:::
