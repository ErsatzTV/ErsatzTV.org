// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ErsatzTV',
  tagline: 'Your personal IPTV server',
  favicon: 'images/favicon-32x32.png',
  url: 'https://ersatztv.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ErsatzTV', // Usually your GitHub org/user name.
  projectName: 'ErsatzTV', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'images/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      navbar: {
        logo: {
          alt: 'ErsatzTV Logo',
          src: 'images/ersatztv.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
          {
            href: 'https://discuss.ersatztv.org',
            label: 'Community',
            position: 'right'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Documentation',
            to: '/docs/intro',
          },
          {
            label: 'Discord',
            to: 'https://discord.gg/hHaJm3yGy6',
          },
          {
            label: 'GitHub',
            to: 'https://github.com/ErsatzTV/ErsatzTV',
          },
          {
            label: 'Sponsor',
            to: 'https://github.com/sponsors/jasongdove',
          },
          {
            label: 'Donate',
            to: 'https://www.paypal.me/jasongdove',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jason Dove`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
