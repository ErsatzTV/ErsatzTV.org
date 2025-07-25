---
uid: media-emby
title: Emby Libraries
sidebar_position: 4
---

Emby libraries provide a way to synchronize your media (metadata) from Emby to ErsatzTV. This synchronization process is one-way: changes made within Emby are synchronized to ErsatzTV. ErsatzTV will never make any modifications to your Emby configuration or media.

### Metadata

With Emby libraries, Emby provides all metadata.

### Add Media Items

#### Connect to Server

Connecting to a Emby server requires two settings: the server address and an api key.

##### Server Address

The server address is the address that you type in your web browser to access your Emby server.

##### API Key

To create a Emby API Key, from the `Admin / Manage Emby Server` in Emby, select `Advanced / API Keys` and click the `+ New Api Key` button near the top.

![Emby Create API Key Button](/images/docs/emby-create-api-key-button.png)

Give the API Key a name like `ErsatzTV` and click `Ok`. The API key is then displayed.

![Emby API Key](/images/docs/emby-api-key.png)

##### Configuration

Finally, in ErsatzTV, under `Media Sources` > `Emby` click the `Connect Emby` button, enter the `Address` and `Api Key` and click `Save Changes` to connect to your Emby server.

#### Synchronize Libraries

After connecting, select which libraries you would like to synchronize from Emby to ErsatzTV by clicking the `Edit Libraries` button for the desired Emby server.

![Emby Edit Libraries Icon](/images/docs/emby-media-source-edit-libaries-icon.png)

In the libraries listing, click the `Synchronize` switch for all libraries you would like to synchronize from Emby to ErsatzTV, and click the `Save Changes` button to start the synchronization process.

![Emby Libraries Synchronize Switch](/images/docs/emby-libraries-synchronize-switch.png)

### Streaming From Disk

Media items are streamed from Emby media sources by default. Instead, if you would like to stream from disk, ErsatzTV will check for media items using the same path that Emby uses to play the media item.
There are two ways to make this work:

1. Ensure ErsatzTV has access to exactly the same shares and mounts as Emby
2. Configure path replacements to tell ErsatzTV where it should look on its file system for a given Emby folder

Option 1 is recommended as it will "just work" without any further configuration.

To configure path replacements for a Emby media source, click the `Edit Path Replacements` button in the

![Emby Edit Path Replacements Icon](/images/docs/emby-media-source-edit-path-replacements-icon.png)

Click `Add Path Replacement` to add a new path replacement, and enter the `Emby Path` along with the equivalent `Local Path` for ErsatzTV.
Click `Save Changes` after you have created all needed path replacements.

![Emby Path Replacements](/images/docs/emby-media-source-path-replacements.png)
