// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Meet Jain Portfolio',
  tagline: 'Always eager to learn new technologies and skills',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mj665.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mj665', // Usually your GitHub org/user name.
  projectName: 'mj665.github.io', // Usually your repo name.
  deploymentBranch:"gh-pages-deployment",

  onBrokenLinks: 'warn',
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
  
      // adding announcement banner
    announcementBar:{
      id: 'openToWork',
      content:
      `<strong>Open To work and get hired.</strong> Reach Me Out on Discord, LinkedIn, Email or X. You can get links from below or on <a target="_blank" rel="noopener noreferrer" href="https://linktr.ee/mj665">Linktree</a>.`,
      backgroundColor: '#fafbfc',
      textColor: '#574476',
      isCloseable: false,
    },
    navbar: {
        title: 'Meet Jain',
        logo: {
          alt: 'My Site Logo',
          src: 'img/graphic_programmer.png',
          // srcDark: 'img/logo_dark.png',
        // width: 50,
        // Height: 300,
        className: 'custom-navbar-logo-class',
        // style: {border: 'solid grey'},
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/MJ665/Meet-Jain-Portfolio-React',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://linktr.ee/mj665',
            label: 'Link Tree',
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
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/mj665/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/users/1053004379424309358',
              },
              {
                label: 'LinkTree',
                href: 'https://linktr.ee/mj665',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MJ665/Meet-Jain-Portfolio-React',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Meet Jain Portfolio, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
