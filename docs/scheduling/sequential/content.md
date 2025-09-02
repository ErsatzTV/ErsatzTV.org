---
uid: scheduling-sequential-content
title: Content Sources
sidebar_position: 1
---

Content sources define the content (media items) that will be used in the sequential schedule. Content sources include:

- [Search](#search)
- [Show](#show)
- [Collection](#collection)
- [Multi Collection](#multi-collection)
- [Smart Collection](#smart-collection)
- [Playlist](#playlist)
- [Marathon](#marathon)

## Search

**Search** content sources use ErsatzTV's search engine to dynamically find content matching your criteria (query).

```yaml
content:
  - search:
    key: "SATURDAY_CARTOONS"
    query: "type:episode AND show_title:\"Looney Tunes\""
    order: shuffle
```

### Search parameters

- **key** (required) - Unique name that can be used to reference this content throughout the sequential schedule definition.
- **query** (required) - Search expression that will be used to find content.
- **order** (required) - Playback order; only **chronological** and **shuffle** are currently supported.

### Common search patterns

```yaml
# Find all episodes of a specific show
query: "type:episode AND show_title\"The Simpsons\""

# Find movies from a specific decade
query: "type:move AND release_date:[20000101 TO 20091231]"

# Find content with specific tags
query: "type:other_video AND tag:bumpers"

# Complex searches with multiple criteria
query: "type:episode AND (show_title:\"Friends\" OR show_title:\"Seinfeld\")"
```

:::note
Before using search queries in a sequential schedule, test them in the [search interface](/docs/search) to make sure they return the expected content. This helps to avoid empty content sources or unexpected scheduling results.
:::

## Show

**Show** content sources target specific shows using external identifier metadata, giving precise control over content selection.

```yaml
content:
  - show:
    key: "FRIENDS_EPISODES"
    guids:
      - source: "tvdb"
        value: "79168"
      - source: "imdb"
        value: "tt0108778"
    order: "chronological"
```

### Show parameters

- **key** (required) - Unique name that can be used to reference this content throughout the sequential schedule definition.
- **guids** (required) - List of show identifiers (**source** and **value** pairs)
- **order** (required) - Playback order; only **chronological** and **shuffle** are currently supported.

### Show identifiers

Show identifiers can be any GUID that is present in your metadata. You can verify GUID metadata using [Search](/docs/search) in the form `source:value`, e.g. `tvdb:79168` or `imdb:tt0108778`.

## Collection

**Collection** content sources reference existing [Collections](/docs/collections/manual), letting you reuse content you have already organized.

```yaml
content:
  - collection: "Saturday Morning Cartoons"
    key: "CARTOONS"
    order: "shuffle"
```

### Collection parameters

- **collection** (required) - The name of the existing [Manual Collection](/docs/collections/manual).
- **key** (required) - Unique name that can be used to reference this content throughout the sequential schedule definition.
- **order** (required) - Playback order; only **chronological** and **shuffle** are currently supported.

## Multi Collection

**Multi Collection** content sources reference existing [Multi Collections](/docs/collections/multi), letting you reuse content you have already organized.

```yaml
content:
  - multi_collection: "All Comedy Shows"
    key: "COMEDY"
    order: "shuffle"
```

### Multi Collection parameters

- **multi_collection** (required) - The name of the existing [Multi Collection](/docs/collections/multi).
- **key** (required) - Unique name that can be used to reference this content throughout the sequential schedule definition.
- **order** (required) - Playback order; only **chronological** and **shuffle** are currently supported.

## Smart Collection

**Smart Collection** content sources reference existing [Smart Collections](/docs/collections/smart), letting you reuse content you have already organized.

```yaml
content:
  - smart_collection: "Recent Movies"
    key: "NEW_MOVIES"
    order: "chronological"
```

### Smart Collection parameters

- **smart_collection** (required) - The name of the existing [Smart Collection](/docs/collections/smart).
- **key** (required) - Unique name that can be used to reference this content throughout the sequential schedule definition.
- **order** (required) - Playback order; only **chronological** and **shuffle** are currently supported.

## Playlist

**Playlist** content sources reference existing [Playlists](/docs/lists/playlist), letting you reuse content you have already organized.

```yaml
content:
  - playlist: "My Favorites"
    playlist_group: "Personal Lists"
    key: "FAVORITES"
```

### Playlist parameters

- **playlist** (required) - The name of the existing [Playlist](/docs/lists/playlist).
- **playlist_group** (required) - The name of the existing **Playlist Group** that contains the named **Playlist**.
- **key** (required) - Unique name that can be used to reference this content throughout the sequential schedule definition.

## Marathon

**Marathon** content sources create dynamic playlists that intelligently mix content from multiple shows or searches.

```yaml
content:
  - marathon:
    key: "COMEDY_MARATHON"

    # Option 1: Use specific show IDs
    guids:
      - source: "imdb"
        value: "tt0108778"    # Friends
      - source: "imdb"
        value: "tt0098904"    # Seinfeld
    
    # Option 2: Use search queries
    searches:
      - "type:episode AND show_title:\"Friends\""
      - "type:episode AND show_title:\"Seinfeld\""
      - "type:episode AND show_title:\"The Office\""
    
    group_by: "show"          # or "season"
    item_order: "shuffle"     # or "chronological"
    play_all_items: false     # Cycle through shows
    shuffle_groups: true      # Randomize show order
```

### Marathon parameters

- **key** (required) - Unique name that can be used to reference this content throughout the sequential schedule definition.
- **guids** - List of external content identifiers (**source** and **value** pairs).
- **searches** - List of search expressions.
- **group_by** (required) - Tells the sequential scheduler how to group the combined content (returned from all guids and searches). Valid values are **show**, **season**, **artist** and **album**.
- **item_order** (required) - Playback order within each group; only **chronological** and **shuffle** are currently supported.
- **play_all_items** - When **true**, will play every item from a group before moving to the next group. When **false**, will play one item from a group before moving to the next group.
- **shuffle_groups** - When **true**, will randomize the order of groups. When **false**, will cycle through groups in a fixed order.
