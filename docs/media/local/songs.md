---
uid: media-local-songs
title: Songs
sidebar_position: 5
---

### Folder Layout

The **Songs** library has no folder requirements, but folders can be a useful source of metadata.

### Song Metadata

Songs will have basic metadata pulled from embedded tags (artist, album, title).

### Song Fallback Metadata

Songs will have a tag added to their metadata for every containing folder, including the top-level folder. As an example, consider adding a songs folder with the following files:

```bash
└── Rock
    └── Awesome Band
        ├── Awesome Album
        │   └── 01 Track 1.flac
        └── Better Album
            └── 05 Track 5.flac
```

Your songs library will then have two media items with the following metadata:

1. title: `01 Track 1`, tags: `Rock`, `Awesome Band`, `Awesome Album`
2. title: `05 Track 5`, tags: `Rock`, `Awesome Band`, `Better Album`
