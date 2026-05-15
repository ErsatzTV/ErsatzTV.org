---
uid: scheduling-block-index
title: Block Schedules
---

Block schedules consist of **Blocks**, **Templates**, **Decos**, **Deco Templates**, and **Playout Templates**.

### Blocks

Blocks are conceptually like a classic schedule with a fixed duration (number of minutes). Like classic schedules contain schedule items, blocks contain block items.

Every block item has the following properties:

- **Collection Type** - the type of content in the block item.
- **Collection** - the desired collection, based on the selected collection type.
- **Playback Order** - Similar to [schedule items playback order](/docs/scheduling/classic/items#playback-order). Some playback orders are only available with certain types of content.
  - **Shuffle** - Available with all content
  - **Chronological** - Available with all content except **Multi Collections**
  - **Random** - Available with all content except **Multi Collections**
  - **Season, Episode** - Available with **Television Show**
- **Show In EPG** - When enabled, any media items scheduled from this block item will have an entry in the EPG.
- **Disable Watermarks** - When enabled, any media items scheduled from this block will *never* display a watermark, even with a deco set to override watermark.

:::note
Every block item also uses **Playout Mode** - **One**, which is implicit and cannot be changed
:::

### Templates

Templates are used to tell ErsatzTV when to schedule blocks during a non-specific "day".
Weekday and weekend templates may be useful, for example.

### Decos

Decos (short for "decorations") separate secondary content like filler and watermarks from primary content. Specifically:

- **Watermark** - Used to configure watermark behavior for all content, or all primary content.
- **Default Filler** - After all blocks have been scheduled, a second pass will be made to fill unscheduled time using random items from the default filler collection.
- **Dead Air Fallback** - When no playout item is found for the current time, *one* item will be randomly selected from this collection and looped and trimmed to exactly fit until the start of the next playout item.

:::note
**Dead Air Fallback** replaces the **Channel is Offline** image that would otherwise display.
:::

Every deco has the following properties:

- **Watermark Mode**
  - **Inherit** - Use the **Watermark Mode** setting from the playout's default deco
  - **Disable** - Disable watermarks while this deco is active
  - **Override** - Override the watermark (to the specific value) while this deco is active
- **Use Watermark During Filler** - When **Watermark Mode** is set to **Override**, this determines whether the watermark will be overlayed on top of filler content, or content that is otherwise hidden from the EPG.
- **Default Filler Mode**
  - **Inherit** - Use the **Default Filler Mode** setting from the playout's default deco
  - **Disable** - Disable default filler while this deco is active
  - **Override** - Override the default filler (to the specific value) while this deco is active
- **Trim To Fit** - When **Default Filler Mode** is set to **Override**, this determines whether the last default filler item is allowed to go over the next block's start time, or whether it should be trimmed so that the next block can start exactly as scheduled.
- **Dead Air Fallback Mode**
  - **Inherit** - Use the **Dead Air Fallback Mode** setting from the playout's default deco
  - **Disable** - Disable dead air fallback while this deco is active
  - **Override** - Override the dead air fallback (to the specific value) while this deco is active

### Deco Templates

Deco templates are similar to (block) templates in that they are used to schedule decos during a non-specific "day". Users may have deco templates that correspond with their block templates, or the deco templates may be completely different.

### Playout Templates

Finally, playout templates are used to bring (block) templates and deco templates together on specific days, using a prioritized list similar to alternate schedules.
