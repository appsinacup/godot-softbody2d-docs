// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SoftBody2D',
  tagline: '2D Softbodies plugin for Godot 4.x',
  favicon: 'img/softbody2d.ico',

  // Set the production url of your site here
  url: 'https://softbody2d.appsinacup.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'appsinacup', // Usually your GitHub org/user name.
  projectName: 'godot-softbody2d', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/softbody2d_banner.jpg',
      navbar: {
        title: 'Softbody2D',
        logo: {
          alt: 'Softbody2D Logo',
          src: 'img/softbody2d.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://appsinacup.com',
            label: 'Appsinacup',
            position: 'right',
          },
          {
            href: 'https://github.com/appsinacup/godot-softbody2d',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/56dMud8HYn',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Appsinacup',
                href: 'https://appsinacup.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/appsinacup/godot-softbody2d',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Appsinacup, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
