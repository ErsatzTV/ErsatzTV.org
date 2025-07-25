---
uid: media-jellyfin
title: Jellyfin Libraries
sidebar_position: 3
---

Jellyfin libraries provide a way to synchronize your media (metadata) from Jellyfin to ErsatzTV. This synchronization process is one-way: changes made within Jellyfin are synchronized to ErsatzTV. ErsatzTV will never make any modifications to your Jellyfin configuration or media.

### Metadata

With Jellyfin libraries, Jellyfin provides all metadata.

### Add Media Items

#### Connect to Server

Connecting to a Jellyfin server requires two settings: the server address and an api key.

##### Server Address

The server address is the address that you type in your web browser to access your Jellyfin server.

##### API Key

To create a Jellyfin API Key, from the `Admin / Dashboard` in Jellyfin, select `Advanced / API Keys` and click the `+` button near the top.

![Jellyfin Create API Key Button](/images/docs/jellyfin-create-api-key-button.png)

Give the API Key a name like `ErsatzTV` and click `Ok`. The API key is then displayed.

![Jellyfin API Key](/images/docs/jellyfin-api-key.png)

##### Configuration

Finally, in ErsatzTV, under `Media Sources` > `Jellyfin` click the `Connect Jellyfin` button, enter the `Address` and `Api Key` and click `Save Changes` to connect to your Jellyfin server.

#### Synchronize Libraries

After connecting, select which libraries you would like to synchronize from Jellyfin to ErsatzTV by clicking the `Edit Libraries` button for the desired Jellyfin server.

![Jellyfin Edit Libraries Icon](/images/docs/jellyfin-media-source-edit-libaries-icon.png)

In the libraries listing, click the `Synchronize` switch for all libraries you would like to synchronize from Jellyfin to ErsatzTV, and click the `Save Changes` button to start the synchronization process.

![Jellyfin Libraries Synchronize Switch](/images/docs/jellyfin-libraries-synchronize-switch.png)

### Streaming From Disk

Media items are streamed from Jellyfin media sources by default. Instead, if you would like to stream from disk, ErsatzTV will check for media items using the same path that Jellyfin uses to play the media item.
There are two ways to make this work:

1. Ensure ErsatzTV has access to exactly the same shares and mounts as Jellyfin
2. Configure path replacements to tell ErsatzTV where it should look on its file system for a given Jellyfin folder

Option 1 is recommended as it will "just work" without any further configuration.

To configure path replacements for a Jellyfin media source, click the `Edit Path Replacements` button in the

![Jellyfin Edit Path Replacements Icon](/images/docs/jellyfin-media-source-edit-path-replacements-icon.png)

Click `Add Path Replacement` to add a new path replacement, and enter the `Jellyfin Path` along with the equivalent `Local Path` for ErsatzTV.
Click `Save Changes` after you have created all needed path replacements.

![Jellyfin Path Replacements](/images/docs/jellyfin-media-source-path-replacements.png)
