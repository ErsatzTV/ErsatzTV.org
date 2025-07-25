---
uid: installation-advanced-unraid
title: Unraid
sidebar_position: 1
---

## Unraid Docker

1. Install the Commuinity Applications plugin by pasting the following URL in the Plugins / Install Plugin section of UnRAID  

    ```
    https://raw.githubusercontent.com/Squidly271/community.applications/master/plugins/community.applications.plg
    ```  

    ![Community Applications Install](/images/docs/unraid-install-community-apps.png)

2. Click on the `Apps` tab in UnRAID, search for `ersatztv`, and click the `install` button.

    ![Search Community Applications ErsatzTV](/images/docs/unraid-docker-install-ersatz.png)

3. Choose an appropriate branch (Use `vaapi` for video acceleration for AMD GPUs and Intel CPUs with QuickSync, use `nvidia` for video acceleration for nVidia GPUs)

    ![ErsatzTV Docker branches](/images/docs/unraid-docker-ersatz-branches.png)
    `VAAPI` and `nVidia` branches are for hardware acceleration. See [latest release tags](/docs/installation/docker#latest-release)

4. Map your path to ErsatzTV configuration data

    ![Media Mapping](/images/docs/unraid-path-to-configuration-data.png)

5. Add another path for each media share

    ![Media Mapping](/images/docs/unraid-path-to-media-share.png)

6. **OPTIONAL** In advanced view, add extra parameters for video acceleration. **NOTE** The [nVidia-Driver plugin](https://forums.unraid.net/topic/98978-plugin-nvidia-driver/) must be installed prior to this step.

    ![Adding video acceleration options](/images/docs/unraid-docker-ersatz-hwtranscoding.png)

7. Open your browser to `http://[docker-ip]:8409` (First run may take a few minutes to be available.)
