---
uid: media-local-movies
title: Movies
sidebar_position: 1
---

### Folder Layout

The **Movies** library requires movie subfolders. The following is a (non-exhaustive) example of valid folders and filenames for movies:

```bash
├── Movie (1999)
|   └── Movie (1999).mkv
└── Movie
    └── Movie.mkv
```

### NFO Metadata

Each movie folder may contain a `movie.nfo` file, or an NFO file with exactly the same name as the movie, except for the `.nfo` extension. See [Kodi Wiki](https://kodi.wiki/view/NFO_files/Movies) for more information.
ErsatzTV will read the following fields from the movie NFO:

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

### Movie Fallback Metadata

When no movie NFO is found, the movie metadata will only contain a title and a year, both parsed from the movie file name. Example:

```bash
└── Movie (1999)
    └── Movie (1999).mkv
```
- title: `Movie`
- year: `1999`
