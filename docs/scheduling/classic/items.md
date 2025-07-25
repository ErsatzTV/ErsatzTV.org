---
uid: scheduling-classic-items
title: Schedule Items
---

## Start Type

Items with a **Dynamic** start type will start immediately after the preceding schedule item, while a **Fixed** start type requires a start time.

## Fixed Start Time Behavior

When **Fixed** start type is used, select the desired behavior for when the previous item runs over time.

- **Strict** - Always wait for the exact start time, even if that means waiting (adding unscheduled time) until the next day.
- **Flexible** - Start scheduling this item immediately (do not wait) if waiting (adding unscheduled item) would go into the next day.

As an example, if the current scheduling time is 6:02 AM and this schedule item has a fixed start time of 6:00 AM

- **Strict** - will add nearly 24 hours (23:58) of unscheduled time so that this item can start exactly at 6:00 AM the next day.
- **Flexible** - will NOT add unscheduled time, and will schedule this item at 6:02 AM, which may also affect the scheduling of later items.

## Collection Type

Schedule items can contain the following collection types:

- **Collection** - Select a collection that you have created manually.
- **Television Show** - Select an entire television show.
- **Television Season** - Select a specific season of a television show.
- **Artist** - Select all music videos for a specific artist.
- **Multi Collection** - Select all collections within a multi-collection.
- **Smart Collection** - Select all items that match a saved search query.
- **Playlist** - Select a playlist that you have created.

## Collection

Based on the selected collection type, select the desired collection.

## Playback Order

Select the desired playback order for media items within the selected collection:

- **Chronological** - Items are ordered by release date, then by season and episode number.
- **Random** - Items are randomly ordered and may contain repeats.
- **Shuffle** - Items are randomly ordered and no item will be played a second time until every item from the collection has been played once.
- **Shuffle In Order** - Items are grouped (episodes by show, music videos by artist, one group for all movies), the group contents are sorted chronologically, and the groups are shuffled together while maintaining their individual chronological ordering.

:::note
**Shuffle In Order** can only be used with **Collection**, **Smart Collection** and **Multi Collection**
:::

### Playout Mode

Select how you want this schedule item to behave every time it is selected for playback.

- **One** - Play one media item from the collection before advancing to the next schedule item.
- **Multiple** - Play the specified **Multiple Count** of media items from the collection before advancing to the next schedule item.
- **Duration** - Play the maximum number of complete media items that will fit in the specified **Playout Duration**
- **Flood** - Play media items from the collection either forever or until the next schedule item's start time, if one exists.

Click **Save Changes** to save all changes made to the schedule's items.

### Tail Mode (Duration)

Select how you want this duration schedule item to behave when no more complete media items will fit in the specified **Playout Duration**:

- **(none)** - Immediately advance to the next schedule item
- **Offline** - Show the ETV offline image for the remainder of the **Playout Duration**
- **Filler** - Fill the remainder of the **Playout Duration** with the specified collection, followed by the ETV offline image if needed

### Guide Mode

Select how you want this schedule item to behave in the channel guide:

- **Normal** - show all scheduled items in the channel guide
- **Filler** - hide all scheduled items from the channel guide, and extend the end time for the previous item in the guide
