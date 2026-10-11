# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. It uses npm;
`package-lock.json` pins the dependencies.

### Installation

```
$ npm ci
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

GitHub Actions (`.github/workflows/build.yml`) builds every pull request and deploys `main` to GitHub Pages.

### ErsatzTV Next schemas

The Next reference is generated from the JSON schemas in [ErsatzTV/next](https://github.com/ErsatzTV/next). To update
it after a schema change in `next`, run this with a full clone of `next` (history and tags):

```
$ npm run sync-next-schemas -- ../next origin/main
$ npm run generate-next-reference
```

Commit everything both commands change:

- `schemas/next/`: the current schemas, and `since.json` (the first schema version and release with each property and
  enum value).
- `static/schema/{kind}/{x.y.z}.json`: every schema version, served for editors that validate config files.
- `docs-next/reference/_generated/`: one MDX partial per schema definition, imported by the reference pages.
- `static/{kind}/version/{x.y.z}/`: redirect pages for the `version` URLs in config files.

`npm start` and `npm run build` run the generator, and CI fails if its output differs from what is committed.
