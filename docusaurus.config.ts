import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// import * as dotenv from 'dotenv';
// dotenv.config();
// export const envVariable = {
//   'REACT_APP_GOOGLE_SCRIPT_URL': REACT_APP_GOOGLE_SCRIPT_URL
// }
require('dotenv').config()




const config: Config = {
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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    'REACT_APP_GOOGLE_SCRIPT_URL': process.env.REACT_APP_GOOGLE_SCRIPT_URL,
    'appId': process.env.ALGOLIA_APP_ID,
    'apiKey': process.env.ALGOLIA_API_KEY,
    'indexName': process.env.ALGOLIA_INDEX_NAME,
    
    // 'apiKey': process.env.API_KEY,
    // 'appId': process.env.APPLICATION_ID,
  },
  // customFields: {
  //   'apiKey': process.env.API_KEY,
  //   'appId': process.env.APPLICATION_ID,
  // },
  presets: [
    [
      'classic',

      {   sitemap: {
          changefreq: 'daily',
          priority: 0.5,

        },
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
   



          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'announcements',
        path: './announcements',
        routeBasePath: 'announcements',
        blogTitle: 'Announcements',
        blogDescription: 'This is the announcements section on my portfolio website',
        postsPerPage: 'ALL',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
 



        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // Useful options to enforce blogging best practices
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'achievements',
        path: './achievements',
        routeBasePath: 'achievements',
        blogTitle: 'Achievements',
        blogDescription: 'This is the achievements section on my portfolio website',
        postsPerPage: 'ALL',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
 



        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // Useful options to enforce blogging best practices
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],

  ],

  
  

  themeConfig: {
    // Replace with your project's social card
    image: 'img/Myproject.png',


  
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY as string,
      appId: process.env.ALGOLIA_APP_ID as string,
      indexName: process.env.ALGOLIA_INDEX_NAME as string,
      searchParameters: {
        facetFilters: ['language:en', 'version:v1'],
      },

      // Optional parameters
      contextualSearch: true,  // Enables contextual search for language/version
      externalUrlRegex: 'external\\.com|domain\\.com',  // URLs where window.location is used instead of history.push
      
      // Replace search result pathnames for multi-deployment or different base URLs
      replaceSearchResultPathname: {
        from: '/docs/',  // Modify as per your needs
        to: '/',
      },
      
  
      
      // Optional: Path for search page (enabled by default)
      searchPagePath: 'search',  // Set to false to disable the search page

      // Optional: Enable insights feature for DocSearch (disabled by default)
      insights: false,  // Set to true to enable
      

    },
     /**
      * * Highlight: added default color mode as dark
    **/
     colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    /**
      * * Highlight: adding hideable sidebar
    **/
    docs: {
      sidebar: {
        hideable: true,
      },
    },
      /**
        * * Highlight: adding announcement banner
      **/
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
        {to: '/announcements', label: 'Announcements', position: 'left'},
        {to: '/achievements', label: 'Achievements', position: 'left'},
        {
          href:`https://github.com/MJ665/mj665.github.io`,
          label:'GitHub Repo',
          position:'left'
        },
        {
          href: 'https://github.com/MJ665',
          position: 'right',
          className:"navbar-icon",
          "area-label":"GitHub",
          html: `<svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 496 512"
          height="26"
          width="26"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>`,
        },
        {
          href:"https://www.linkedin.com/in/mj2h/",
          position:"right",
          className:"navbar-icon",
          "area-label":"Linkedin Profile Page",
          html:`<svg xmlns="http://www.w3.org/2000/svg" 
          width="26" height="26"  
          stroke="currentColor" 
          fill="currentColor" 
          stroke-width="0" 
          viewBox="0 0 50 50" >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
          `
        },
        {
          href: 'https://x.com/MeetJain495531',
          position: 'right',
          className: 'navbar-icon navbar-icon-twitter',
          'aria-label': 'X Profile Page',
          html: `<svg 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              viewBox="0 0 50 50" 
              height="26" width="26" 
              xmlns="http://www.w3.org/2000/svg">
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
              </svg>`,
        },
        {
          href: 'http://discordapp.com/users/1053004379424309358',
          position: 'right',
          className: 'navbar-icon',
          'aria-label': 'Discord Profile Page',
          html: `<svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 640 512"
          height="26"
          width="26"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>`,
        },
        {
          href: 'mailto:contact.hackathonmj@gmail.com',
          position: 'right',
          className: 'navbar-icon ',
          'aria-label': 'Email',
          html: `<svg 
              stroke="currentColor" 
              fill="currentColor" 
              stroke-width="0" 
              viewBox="0 0 35 35" 
              height="26" 
              width="26" 
              xmlns="http://www.w3.org/2000/svg">
              
              <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z"/>
              </svg>`,
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
              href: 'https://www.linkedin.com/in/mj2h/',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/users/mj665',
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
              href: 'https://github.com/MJ665/mj665.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meet Jain Portfolio, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  } satisfies Preset.ThemeConfig,
  
  
};

export default config;
