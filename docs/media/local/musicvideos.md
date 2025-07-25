---
uid: media-local-musicvideos
title: Music Videos
sidebar_position: 3
---

### Folder Layout

The `Music Videos` library requires artist subfolders. The following is a (non-exhaustive) list of valid locations for music videos:

- `Artist\Album\Track.mp4`
- `Artist\Track\Track.mp4`
- `Artist\Track.mp4`

### Artist NFO Metadata

Each artist subfolder may contain an `artist.nfo` file. See [Kodi Wiki](https://kodi.wiki/view/NFO_files/Music#Artists) for more information.
ErsatzTV will read the following fields from the artist NFO:

- Name
- Disambiguation
- Biography
- Genre(s)
- Style(s)
- Mood(s)

### Artist Fallback Metadata

When no artist NFO is found, the artist metadata will only contain a name, which will be the exact name of the artist subfolder.
