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

### Count

**Count** instructions play a specific number of items from a content source.

```yaml
playout:
  - count: 3
    content: "MORNING_CARTOONS"
    filler_kind: "none"
    custom_title: "Saturday Morning Block"
```

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

## Control Instructions

Control instructions allow users to customize how the playout builder behaves, but do not directly schedule any content themselves.

- [epg_group](#epg-group)
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
