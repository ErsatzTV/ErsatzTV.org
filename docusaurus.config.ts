import { themes as prismThemes } from "prism-react-renderer";
import type * as Preset from "@docusaurus/preset-classic";
import * as ClientRedirects from "@docusaurus/plugin-client-redirects";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ErsatzTV",
  tagline: "Your Personal IPTV Server",
  favicon: "images/branding/favicon.ico",
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
        docs: false,
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
        indexBlog: false,
        docsDir: ["docs-legacy", "docs-next"],
        docsRouteBasePath: ["docs", "next-docs"],
        docsPluginIdForPreferredVersion: "next",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: "archived",
      content:
        'ErsatzTV Legacy will continue to receive security updates for the foreseeable future. <a href="https://www.reddit.com/r/ErsatzTV/comments/1sp4jql/unarchiving_ersatztv_legacy" target="_blank" rel="noopener noreferrer">See the announcement for details.</a>',
      backgroundColor: "#2c3c50",
      textColor: "#ffffff",
      isCloseable: false,
    },
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
          docsPluginId: "next",
          position: "right",
          label: "Next Docs",
        },
        {
          type: "doc",
          docId: "index",
          docsPluginId: "legacy",
          position: "right",
          label: "Legacy Docs",
        },
        {
          to: "contact",
          label: "Contact",
          position: "right",
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "Documentation",
          to: "/next-docs",
        },
        {
          label: "Contact",
          to: "contact",
        },
        {
          label: "GitHub",
          to: "https://github.com/ErsatzTV/legacy",
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
      additionalLanguages: ["bash", "yaml", "powershell"],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-content-docs", {
        id: "legacy",
        path: "docs-legacy",
        routeBasePath: "docs",
        sidebarPath: require.resolve("./sidebars-legacy.ts"),
        editUrl: "https://github.com/ErsatzTV/ErsatzTV.org/edit/main"
      }
    ],
    [
      "@docusaurus/plugin-content-docs", {
        id: "next",
        path: "docs-next",
        routeBasePath: "next-docs",
        sidebarPath: require.resolve("./sidebars-next.ts"),
        editUrl: "https://github.com/ErsatzTV/ErsatzTV.org/edit/main"
      }
    ],
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
