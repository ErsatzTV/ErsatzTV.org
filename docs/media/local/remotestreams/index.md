---
uid: media-local-remotestreams-index
title: Remote Streams
---

Remote streams are defined in [Remote Stream Definition](/docs/media/local/remotestreams/definition) files.

See [Sample Remote Streams](/docs/media/local/remotestreams/sample).

### Folder Layout

The **Remote Streams** library has no folder requirements, but folders can be a useful source of metadata.

### Remote Stream Fallback Metadata

Remote streams will have a tag added to their metadata for every containing folder, including the top-level folder. As an example, consider adding a remote streams folder with the following files:

```bash
└── One
    └── Two
        ├── Three
        │   └── Stream One.yml
        └── Four
            └── Stream Two.yml
```

Your images library will then have two media items with the following metadata:

1. title: `Stream One`, tags: `One`, `Two`, `Three`
2. title: `Stream Two`, tags: `One`, `Two`, `Four`
