---
uid: scheduling-classic-index
title: Classic Schedules
---

# Classic Schedules

Schedules are used to control the playback order of media items on a channel.
Create a Schedule by navigating to the **Schedules** page, clicking **Add Schedule** and giving your schedule a name, and selecting the appropriate settings:

* **Keep Multi-Part Episodes Together** - This only applies to shuffled schedule items, and will try to intelligently group multi-part episodes (i.e. `s05e02 - whatever part 1` and `s05e03 - whatever part 2`) so they are always scheduled together and always play in the correct order.
* **Treat Collections As Shows** - This only applies when **Keep Multi-Part Episodes Together** is enabled, and will try to group multi-part episodes across shows within the collection (i.e. crossover episodes like `Show 1 - s03e04 - Whatever Part 1` and `Show 2 - s01e07 - Whatever Part 2`).
* **Shuffle Schedule Items** - This shuffles the order of schedule items when building a playout, and is mostly used on channels with a mix of shows that require unique schedule item settings per show. Note that this disables fixed start times and flood mode.
* **Random Start Point** - This starts each schedule item at a random place within the collection.

# Schedule Items

Schedules contain an ordered list of items (collections), and will play back one or more items from each collection before advancing to the next schedule item.

Edit the new schedule's items by clicking the **Edit Schedule Items** button for the schedule:

![Schedules Edit Schedule Items Button](/images/docs/schedules-edit-schedule-items.png)

Add a new item to the schedule by clicking **Add Schedule Item** and configure as desired. See [Schedule Items](/docs/scheduling/classic/items).
