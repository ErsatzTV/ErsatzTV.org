---
uid: media-local-images
title: Images
sidebar_position: 6
---

### Folder Layout

The **Images** library has no folder requirements, but folders can be a useful source of metadata.

### Image Fallback Metadata

Images will have a tag added to their metadata for every containing folder, including the top-level folder. As an example, consider adding an images folder with the following files:

```bash
└── One
    └── Two
        ├── Three
        │   └── Image One.jpg
        └── Four
            └── Image Two.png
```

Your images library will then have two media items with the following metadata:

1. title: `Image One`, tags: `One`, `Two`, `Three`
2. title: `Image Two`, tags: `One`, `Two`, `Four`

### Image Durations

Image library items default to a duration of 15 seconds.

The **Media** > **Images** page can be used to configure image durations at a folder level. Child folders with no configured duration will inherit the closest ancestor's duration, or the default of 15 seconds if no ancestor has a configured duration.
