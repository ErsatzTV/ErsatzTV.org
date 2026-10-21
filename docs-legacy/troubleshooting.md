---
uid: troubleshooting
title: Troubleshooting
sidebar_position: 12
---

When something doesn't play correctly, ErsatzTV can collect troubleshooting results: FFmpeg logs, the FFmpeg profile, hardware capabilities, media info and similar files. These are what the maintainer needs to investigate a problem.

## Collecting Results

1. Search for the affected content using the search bar.
2. Use the overflow/three dots menu on the content and select **Troubleshoot Playback**.
3. Select the playback settings that trigger the problem.
4. Click **Play** to start playback.
5. Repeat steps 3 and 4 until the problem is reproduced.

If the problem only happens on the channel (e.g. between items, or with filler or graphics), use **Troubleshoot Channel** on the **Channels** page instead, with the date and time when the problem happens.

## Sharing Results

### Upload Results

Click **Upload Results** to send the results to the maintainer. The dialog lists every file before anything is sent. After the upload, ErsatzTV shows an ID like `etv-xxxx-xxxxxx`. Paste that ID into your GitHub issue or Discord thread.

The ID only names the upload. Nobody can download or delete anything with it, so it is safe to post publicly.

The ErsatzTV server uploads the results itself, so it needs outbound HTTPS access to `upload.ersatztv.org`. The upload server accepts a few uploads per minute from each address; if it reports that it is busy, wait a minute and try again.

### Download Results

Click **Download Results** to save the same files as a zip. Use this when uploading isn't possible: ErsatzTV has no internet access, the results are larger than 25 MB, or the upload server is unavailable.

:::warning
GitHub issues are public. The zip includes file paths (which can contain your username and share names) and the names of your media. If you'd rather not post it publicly, use **Upload Results**, or join [Discord](https://discord.ersatztv.org) and send it to the maintainer in a direct message.
:::

## Upload Privacy

### What Is Uploaded

The upload contains the same files as **Download Results**, including the file paths and media names described above. The upload also includes your ErsatzTV version and the name of the key set it was encrypted with. Media samples are never uploaded.

### Who Can Read It

ErsatzTV encrypts the results on your ErsatzTV server, before they are sent, using [age](https://age-encryption.org). They are encrypted to two public keys built into ErsatzTV: the maintainer's key, and a backup key that is kept offline. Only those two keys can decrypt an upload. The upload server only ever has the encrypted file, and can't read it.

### How Long It Is Kept

- The upload server deletes uploads after 7 days. Cleanup runs once a day, so deletion can take up to a day longer.
- Copies the maintainer downloads are deleted when the issue is closed.
- To have an upload deleted sooner, send the maintainer its ID in your issue or in a Discord direct message.

### What the Upload Server Records

The upload server stores the encrypted file, its size, the upload time, your ErsatzTV version and the key set name. It does not record your IP address, and its web server doesn't log uploads. The hosting provider may keep its own network records, which are outside the project's control.
