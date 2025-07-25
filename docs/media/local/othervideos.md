---
uid: media-local-othervideos
title: Other Videos
sidebar_position: 4
---

### Folder Layout

The **Other Videos** library has no folder requirements, but folders can be a useful source of metadata.

### NFO Metadata

Each other video may have a corresponding NFO file with exactly the same name, except for the `.nfo` extension. The NFO must use the movie format. See [Kodi Wiki](https://kodi.wiki/view/NFO_files/Movies) for more information.
ErsatzTV will read the following fields from the other video NFO:

- Title
- Sort Title
- Outline
- Year
- MPAA
- Premiered
- Plot
- Genre(s)
- Tag(s)
- Studio(s)
- Actor(s)
- Credit(s)
- Director(s)
- Unique Id(s)

### Other Video Fallback Metadata

Other videos will have a tag added to their metadata for every containing folder, including the top-level folder. As an example, consider adding a commercials folder with the following files:

```bash
└── Commercials
    ├── 1990
    │   └── Cars
    │       └── 1990 Car Commercial 1.mkv
    └── 1992
        └── Cars
            └── 1992 Car Commercial 1.mkv
```

Your other video library will then have two media items with the following metadata:

1. title: `1990 Car Commercial 1`, tags: `Commercials`, `1990`, `Cars`
2. title: `1992 Car Commercial 1`, tags: `Commercials`, `1992`, `Cars`
