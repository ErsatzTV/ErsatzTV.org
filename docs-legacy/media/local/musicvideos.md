---
uid: media-local-musicvideos
title: Music Videos
sidebar_position: 3
---

### Folder Layout

The **Music Videos** library requires artist subfolders. The following is a (non-exhaustive) example of valid artist folders and filenames for music videos:

```bash
└── Artist
    ├── Album
    │   ├── Track One.mp4
    │   └── Track Two.mp4
    ├── Another Track
    │   └── Another Track.mp4
    └── Track Three.mp4
```

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
