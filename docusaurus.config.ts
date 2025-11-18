import { themes as prismThemes } from "prism-react-renderer";
import type * as Preset from "@docusaurus/preset-classic";
import * as ClientRedirects from "@docusaurus/plugin-client-redirects";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ErsatzTV",
  tagline: "Your Personal IPTV Server",
  favicon: "images/branding/favicon.icon",
  url: "https://ersatztv.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ErsatzTV", // Usually your GitHub org/user name.
  projectName: "ErsatzTV", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    {
      src: "https://umami.ersatztv.org/script.js",
      defer: true,
      "data-website-id": "a4c678e2-348a-426f-b9b5-4a93ceba6b36",
    },
  ],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/images/branding/site.webmanifest",
      },
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ErsatzTV/ErsatzTV.org/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig: {
    image: "images/branding/og-image.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: "ErsatzTV Logo",
        src: "images/branding/ersatztv@120.png",
      },
      items: [
        {
          type: "doc",
          docId: "index",
          position: "right",
          label: "Documentation",
        },
        {
          href: "https://features.ersatztv.org",
          label: "Feature Requests",
          position: "right",
        },
        {
          href: "https://discuss.ersatztv.org",
          label: "Community",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "Documentation",
          to: "/docs",
        },
        {
          label: "Discord",
          to: "https://discord.ersatztv.org",
        },
        {
          label: "GitHub",
          to: "https://github.com/ErsatzTV/ErsatzTV",
        },
        {
          label: "Sponsor",
          to: "https://github.com/sponsors/jasongdove",
        },
        {
          label: "Donate",
          to: "https://www.paypal.me/jasongdove",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jason Dove`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "yaml"],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/docs/intro",
            to: "/docs",
          },
          {
            from: "/docs/user-guide/install",
            to: "/docs/installation",
          },
          {
            from: "/docs/user-guide/add-media-items",
            to: "/docs/media",
          },
          {
            from: "/docs/user-guide/create-collections",
            to: "/docs/collections",
          },
          {
            from: "/docs/user-guide/create-channels",
            to: "/docs/channels",
          },
          {
            from: "/docs/user-guide/configure-clients",
            to: "/docs/clients",
          },
          {
            from: "/docs/user-guide/search",
            to: "/docs/search",
          },
          {
            from: "/docs/channels/streamselector",
            to: "/docs/advanced/custom-stream-selector",
          },
          {
            from: "/docs/scheduling/yaml",
            to: "/docs/scheduling/sequential",
          },
        ],
      } satisfies ClientRedirects.Options,
    ],
  ],
};

module.exports = config;
