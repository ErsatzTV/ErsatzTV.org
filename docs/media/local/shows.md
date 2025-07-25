---
uid: media-local-shows
title: Shows
sidebar_position: 2
---

### Folder Layout

The **Shows** library requires show and season subfolders. The following is a (non-exhaustive) example of valid (show and season) folders and filenames for episodes:

```bash
├── Some Show (1999)
|   └── Season 01
|       └── Show - S01E01.mp4
└── Another Show
    └── Season 1
        ├── Show - s1e1.mp4
        └── Episode 2
            └── Show - s1e2.mp4
```

### Show NFO Metadata

Each show folder may contain a `tvshow.nfo` file. See [Kodi Wiki](https://kodi.wiki/view/NFO_files/TV_shows#TV_Show) for more information.
ErsatzTV will read the following fields from the show NFO:

- Title
- Year
- Premiered
- Plot
- Genre(s)
- Tag(s)
- Studio(s)

### Show Fallback Metadata

When no show NFO is found, the show metadata will only contain the title and an optional year, both parsed from the show subfolder name.
Examples:

- `Title`
- `Title (1999)`

### Season Metadata

The season number is parsed from the season subfolder.
Examples:

- `Season 01`
- `Season 1`

### Episode NFO Metadata

Each episode may have a corresponding NFO file with exactly the same name, except for the `.nfo` extension. See [Kodi Wiki](https://kodi.wiki/view/NFO_files/TV_shows#Episodes) for more information.
ErsatzTV will read the following fields from the episode NFO:

- Title
- Episode
- Aired
- Plot

### Episode Fallback Metadata

When no episode NFO is found, the episode metadata will only contain the title and the episode number, both parsed from the episode file name.
Examples:

- `Title - s01e04.mkv`
- `Title - S1E4.mkv`
