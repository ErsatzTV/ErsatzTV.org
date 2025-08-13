import {themes as prismThemes} from 'prism-react-renderer';
import { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as ClientRedirects from '@docusaurus/plugin-client-redirects';

const config: Config = {
  title: 'ErsatzTV',
  tagline: 'Your Personal IPTV Server',
  favicon: 'images/favicon-32x32.png',
  url: 'https://ersatztv.org',
  baseUrl: '/',
  organizationName: 'ErsatzTV',
  projectName: 'ErsatzTV',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ErsatzTV/ErsatzTV.org/edit/main/'
        },
        theme: {
          customCss: './src/css/custom.css',
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
    ]
  ],

  themeConfig:
    {
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
            docId: 'index',
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
            to: '/docs',
          },
          {
            label: 'Discord',
            to: 'https://discord.ersatztv.org',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "yaml"]
      },
    } satisfies Preset.ThemeConfig,

    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              from: '/docs/intro',
              to: '/docs'
            },
            {
              from: '/docs/user-guide/install',
              to: '/docs/installation'
            },
            {
              from: '/docs/user-guide/add-media-items',
              to: '/docs/media'
            },
            {
              from: '/docs/user-guide/create-collections',
              to: '/docs/collections'
            },
            {
              from: '/docs/user-guide/create-channels',
              to: '/docs/channels'
            },
            {
              from: '/docs/user-guide/configure-clients',
              to: '/docs/clients'
            },
            {
              from: '/docs/user-guide/search',
              to: '/docs/search'
            },
            {
              from: '/docs/channels/streamselector',
              to: '/docs/advanced/custom-stream-selector'
            }
          ]
        } satisfies ClientRedirects.Options
      ]
    ]
};

module.exports = config;
