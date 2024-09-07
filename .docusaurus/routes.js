import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/achievements',
    component: ComponentCreator('/achievements', '988'),
    exact: true
  },
  {
    path: '/achievements/archive',
    component: ComponentCreator('/achievements/archive', '550'),
    exact: true
  },
  {
    path: '/achievements/authors',
    component: ComponentCreator('/achievements/authors', '8d7'),
    exact: true
  },
  {
    path: '/achievements/mdx-blog-post',
    component: ComponentCreator('/achievements/mdx-blog-post', '1fa'),
    exact: true
  },
  {
    path: '/achievements/tags',
    component: ComponentCreator('/achievements/tags', '51b'),
    exact: true
  },
  {
    path: '/achievements/tags/achievements',
    component: ComponentCreator('/achievements/tags/achievements', 'f36'),
    exact: true
  },
  {
    path: '/announcements',
    component: ComponentCreator('/announcements', '2cf'),
    exact: true
  },
  {
    path: '/announcements/archive',
    component: ComponentCreator('/announcements/archive', 'b7f'),
    exact: true
  },
  {
    path: '/announcements/authors',
    component: ComponentCreator('/announcements/authors', '9e4'),
    exact: true
  },
  {
    path: '/announcements/mdx-blog-post',
    component: ComponentCreator('/announcements/mdx-blog-post', '053'),
    exact: true
  },
  {
    path: '/announcements/tags',
    component: ComponentCreator('/announcements/tags', 'c51'),
    exact: true
  },
  {
    path: '/announcements/tags/announcements',
    component: ComponentCreator('/announcements/tags/announcements', 'a44'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '1b9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/blog-page',
    component: ComponentCreator('/blog/tags/blog-page', 'e61'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a31'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '84c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0b2'),
            routes: [
              {
                path: '/docs/documentations/doc',
                component: ComponentCreator('/docs/documentations/doc', '828'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
