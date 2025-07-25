---
uid: media-plex
title: Plex Libraries
sidebar_position: 2
---

Plex libraries provide a way to synchronize your media (metadata) from Plex to ErsatzTV.
This synchronization process is one-way: changes made within Plex are synchronized to ErsatzTV.
ErsatzTV will never make any modifications to your Plex configuration or media.

### Metadata

With Plex libraries, Plex provides all metadata.

### Add Media Items

#### Sign In

To add media items from Plex, under `Media Sources` > `Plex` click the `Sign in to Plex` button and sign in with your Plex account.

#### Synchronize Libraries

After signing in, select which libraries you would like to synchronize from Plex to ErsatzTV by clicking the `Edit Libraries` button for the desired Plex server.

![Plex Edit Libraries Icon](/images/docs/plex-media-source-edit-libaries-icon.png)

In the libraries listing, click the `Synchronize` switch for all libraries you would like to synchronize from Plex to ErsatzTV, and click the `Save Changes` button to start the synchronization process.

![Plex Libraries Synchronize Switch](/images/docs/plex-libraries-synchronize-switch.png)

### Streaming From Disk

Media items are streamed from Plex media sources by default. Instead, if you would like to stream from disk, ErsatzTV will check for media items using the same path that Plex uses to play the media item.
There are two ways to make this work:

1. Ensure ErsatzTV has access to exactly the same shares and mounts as Plex
2. Configure path replacements to tell ErsatzTV where it should look on its file system for a given Plex folder

Option 1 is recommended as it will "just work" without any further configuration.

To configure path replacements for a Plex media source, click the `Edit Path Replacements` button in the 

![Plex Edit Path Replacements Icon](/images/docs/plex-media-source-edit-path-replacements-icon.png)

Click `Add Path Replacement` to add a new path replacement, and enter the `Plex Path` along with the equivalent `Local Path` for ErsatzTV.
Click `Save Changes` after you have created all needed path replacements.

![Plex Path Replacements](/images/docs/plex-media-source-path-replacements.png)
