---
uid: scheduling-yaml-playout
title: Playout Instructions
sidebar_position: 4
---

Playout instructions define the programming schedule. They execute in order and can loop indefinitely. Playout instructions are categorized as either [Scheduling Instructions](#scheduling-instructions) or [Control Instructions](#control-instructions).

## Scheduling Instructions

Scheduling instructions tell the playout builder how content should be added to the playout.

- [all](#all)
- [count](#count)
- [duration](#duration)
- [pad_to_next](#pad-to-next)
- [pad_until](#pad-until)
- [sequence](#sequence)

### All

**All** instructions play every item from a content source before continuing.

**Use Case**: Perfect for special events, movie marathons, or when you want to ensure all content in a source gets played.

```yaml
playout:
  - all:
    content: "SPECIAL_EVENT"
```

#### All parameters

- **content** (required) - The "key" for the content that should play.
- **custom_title** - Overrides the title that is used in the EPG for content scheduled by this instruction.
- **filler_kind** - Flags this content as filler, which influences EPG grouping. Valid values are **none**, **preroll**, **postroll** and **midroll**. Default is **none**.

### Count

**Count** instructions play a specific number of items from a content source.

```yaml
playout:
  - count: 3
    content: "MORNING_CARTOONS"
    custom_title: "Saturday Morning Block"
```

#### Count parameters

- **content** (required) - The "key" for the content that should play.
- **custom_title** - Overrides the title that is used in the EPG for content scheduled by this instruction.
- **filler_kind** - Flags this content as filler, which influences EPG grouping. Valid values are **none**, **preroll**, **postroll** and **midroll**. Default is **none**.

### Duration

**Duration** instructions play content for a specific amount of time, optionally skipping to find items that fit.

```yaml
playout:
  - duration: "30 minutes"
    content: "SHORT_SHOWS"
    trim: true
    discard_attempts: 3
    fallback: "FILLER_CONTENT"
```

#### Duration parameters

- **duration** (required) - The amount of time that this content should play.
- **content** (required) - The "key" for the content that should play.
- **trim** - When **true**, will trim a content item to exactly fit the specified duration. Default is **false**.
- **discard_attempts** - When **trim** is **false**, this is the number of times to discard items from the collection to find something that fits in the remaining duration.
- **stop_before_end** - When **false**, allows content to run over the specified duration before moving to the next instruction. Default is **true**.
- **offline_tail** - When **true**, after scheduling everything that will fit, any remaining time from the specified duration will be unscheduled (offline). Default is **false**.
- **fallback** - The "key" for content that should be used to fill any remaining unscheduled time. One item will be selected from the content to be looped and trimmed to exactly fit.
- **custom_title** - Overrides the title that is used in the EPG for content scheduled by this instruction.
- **filler_kind** - Flags this content as filler, which influences EPG grouping. Valid values are **none**, **preroll**, **postroll** and **midroll**. Default is **none**.

How duration works:

1. Select the next item from the content source.
2. If it fits within the duration, add it to the playout.
3. If it does not fit and **trim** is **false**, try the next item, up to **discard_attempts** times.
4. If it does not fit and **trim** is **true**, add it to the playout and trim the end of the item to exactly fit within the duration.
5. If nothing fits, select one random item from **fallback** to add to the playout, and loop and trim it to exactly fit within the duration.

### Pad To Next

**Pad To Next** instructions will play content until a specific minutes interval.

**Use Case**: Fill time until the next half-hour or hour mark.

```yaml
playout:
  - pad_to_next: 30  # minutes
    content: "FILLER"
    trim: true
    discard_attempts: 2
    fallback: "BACKUP_FILLER"
    filler_kind: "postroll"
```

#### Pad To Next parameters

- **pad_to_next** (required) - The minutes interval.
- **content** (required) - The "key" for the content that should play.
- **trim** - When **true**, will trim a content item to exactly fit the specified interval. Default is **false**.
- **discard_attempts** - When **trim** is **false**, this is the number of times to discard items from the collection to find something that fits in the remaining interval.
- **fallback** - The "key" for content that should be used to fill any remaining unscheduled time. One item will be selected from the content to be looped and trimmed to exactly fit.
- **custom_title** - Overrides the title that is used in the EPG for content scheduled by this instruction.
- **filler_kind** - Flags this content as filler, which influences EPG grouping. Valid values are **none**, **preroll**, **postroll** and **midroll**. Default is **none**.

### Pad Until

**Pad Until** instructions will play content until a specific time.

**Use Case**: Fill time until a specific scheduled event.

```yaml
playout:
  - pad_until: "9:00 AM"
    tomorrow: false
    content: "MORNING_FILLER"
    trim: true
    fallback: "BACKUP_CONTENT"
```

#### Pad Until parameters

- **pad_until** (required) - The time of day that this content should play until.
- **content** (required) - The "key" for the content that should play.
- **tomorrow** - Only used when the current playout time is already after the specified **pad_until** time. When **true**, content will be scheduled until the specified time of day (the next day). When **false**, this instruction will not schedule any content, and the playout will move to the next instruction.
- **trim** - When **true**, will trim a content item to exactly fit until the specified time. Default is **false**.
- **discard_attempts** - When **trim** is **false**, this is the number of times to discard items from the collection to find something that fits until the specified time.
- **stop_before_end** - When **false**, allows content to run over the specified time before moving to the next instruction. Default is **true**.
- **offline_tail** - When **true**, after scheduling everything that will fit, any remaining time will be unscheduled (offline). Default is **false**.
- **fallback** - The "key" for content that should be used to fill any remaining unscheduled time. One item will be selected from the content to be looped and trimmed to exactly fit.
- **custom_title** - Overrides the title that is used in the EPG for content scheduled by this instruction.
- **filler_kind** - Flags this content as filler, which influences EPG grouping. Valid values are **none**, **preroll**, **postroll** and **midroll**. Default is **none**.

### Sequence

**Sequence** instructions execute predefined [Sequence](/docs/scheduling/yaml/sequence) blocks.

```yaml
playout:
  # Execute the sequence a single time
  - sequence: "MORNING_BLOCK"
  
  # Repeat a sequence multiple times
  - sequence: "SHOW_BLOCK"
    repeat: 4  # Executes SHOW_BLOCK 4 times in a row
```

#### Sequence parameters

- **sequence** (required) - The "key" for the sequence that should be executed.
- **repeat** - The number of times this sequence should be executed. Default value is **1**.

## Control Instructions

Control instructions allow users to customize how the playout builder behaves, but do not directly schedule any content themselves.

- [epg_group](#epg-group)
- [graphics_on](#graphics-on)
- [graphics_off](#graphics-off)
- [repeat](#repeat)
- [shuffle_sequence](#shuffle-sequence)
- [skip_items](#skip-items)
- [skip_to_item](#skip-to-item)
- [wait_until](#wait-until)
- [watermark](#watermark)

### EPG Group

**EPG Group** instructions control how content appears in Electronic Program Guide (EPG) data (XMLTV), and how shows are logically grouped together.

#### Why Use EPG Groups?

By default, every playout instruction creates its own program guide entry. This means separate entries for:

- Each individual bumper
- Each commercial break
- Each piece of filler content
- Every single item in the playout

This creates a clittered, confusing program guide where a single 30-minute show might appear as 5+ separate entries.

#### The Problem EPG Groups Solve

Imagine you want to create a "Saturday Morning Cartoons" block that includes:

1. Opening bumper
2. 3 cartoon episodes
3. Commercial breaks between episodes
4. Closing bumper

Without EPG groups, your program guide would show:

```
9:00 AM - "Bumper"
9:01 AM - "Tom and Jerry S1E1"
9:08 AM - "Commercial"
9:10 AM - "Bugs Bunny S2E5"
9:17 AM - "Commercial"
9:19 AM - "Scooby Doo S1E3"
9:26 AM - "Bumper"
```

With EPG groups, viewers see:

```
9:00 AM - "Saturday Morning Cartoons" (30 minutes)
```

```yaml
playout:
  - epg_group: true        # Start new program entry
    advance: true          # Create new EPG entry (default)
  
  - count: 1
    content: "BUMPERS" 
    filler_kind: "preroll"  # Won't appear in EPG
  
  - count: 1
    content: "MAIN_SHOW"    # Generates EPG metadata
  
  - count: 1
    content: "BUMPERS"
    filler_kind: "postroll" # Won't appear in EPG
  
  - epg_group: false       # End program entry
```

### Graphics On

:::warning
This feature is under active development and is only available on develop [builds](/docs/installation/#development-builds) and [tags](/docs/installation/docker#development-release).
:::

**Graphics On** instructions turn on a graphics element using the [graphics engine](/docs/advanced/graphics-engine). The element will remain on until explicitly turned off.

```yaml
playout:
  - graphics_on: "image/watermark.yml"

  - count: 1
    content: "MAIN_SHOW"
```

### Graphics Off

:::warning
This feature is under active development and is only available on develop [builds](/docs/installation/#development-builds) and [tags](/docs/installation/docker#development-release).
:::

**Graphics Off** instructions turn off one or all graphics elements in the [graphics engine](/docs/advanced/graphics-engine).

```yaml
playout:
  # turn off one graphics element
  - graphics_off: "text/upnext.yml"

  # turn off all graphics elements
  - graphics_off:
```

### Repeat

**Repeat** instructions reset the current instruction index, meaning the next instruction to execute will be the first playout instruction in the YAML schedule definition.

```yaml
playout:
  - count: 1
    content: "SHOWS"

  - repeat: true  # Go back to beginning of playout
```

### Shuffle Sequence

**Shuffle Sequence** instructions will shuffle the order of items in the referenced sequence, which will take effect the next time the sequence is scheduled.

```yaml
sequence:
  - key: "TEST"
    items:
      - count: 1
        content: "ALL_THAT"

      - count: 2
        content: "BLUEY"

      - count: 1
        content: "CLEVELAND"

playout:
  - sequence: "TEST"

  - shuffle_sequence: "TEST"

  - repeat: true
```

### Skip Items

**Skip Items** instructions skip a specific number of items in the referenced content. This is normally used on reset.

```yaml
reset:
  # skip first 5 items
  - skip_items: 5
    content: "TV_SHOWS"
```

### Skip To Item

**Skip To Item** instructions skip to a specific season and episode number within the referenced content. This is normally used on reset.

```yaml
reset:
  - skip_to_item:
    content: "SEASONAL_SHOW"
    season: 2
    episode: 10
```

### Wait Until

**Wait Until** instructions pause the playout (insert nothing) until the specified time has been reached, perfect for scheduling daily programming.

```yaml
reset:
  - wait_until: "6:00 AM"
    tomorrow: false
    rewind_on_reset: true
```

```yaml
playout:
  - wait_until: "18:30"
    tomorrow: false

  - count: 1
    content: "NEWS"
```

### Watermark

**Watermark** instructions can be used to override the watermark in the playout to the watermark with the provided name.

```yaml
playout:
  # override watermark
  - watermark: true
    name: "COOL_WATERMARK"

  - count: 1
    content: "COOL_CONTENT"

  # reset to default watermark
  - watermark: false
```
