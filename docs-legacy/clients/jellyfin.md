---
uid: clients-jellyfin
title: Jellyfin
sidebar_position: 2
---

Jellyfin requires two steps to configure Live TV:

- [Add Tuner Device](#add-tuner-device)
- [Add TV Guide Data](#add-tv-guide-data)

### Add Tuner Device

From the Admin Dashboard in Jellyfin, click **Live TV** and **+** to add a new tuner device:

![Jellyfin Add Tuner Device](/images/docs/jellyfin-add-tuner-device.png)

For **Tuner Type** select **M3U Tuner**, for **File or URL** enter the **M3U** url from ErsatzTV (see [required urls](/docs/clients/#required-urls)), and click **Save**.

![Jellyfin Live TV Tuner Setup](/images/docs/jellyfin-live-tv-tuner-setup.png)

### Add TV Guide Data

From the Admin Dashboard in Jellyfin, click **Live TV** and **+** to add a tv guide data provider and select **XMLTV**.

![Jellyfin Add TV Guide Data Provider](/images/docs/jellyfin-add-tv-guide-data-provider.png)

Enter the **XMLTV** url from ErsatzTV (see [required urls](/docs/clients/#required-urls)) and click **Save**.

![Jellyfin XMLTV Settings](/images/docs/jellyfin-xmltv-settings.png)
