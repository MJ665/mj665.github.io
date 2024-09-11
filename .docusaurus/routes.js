import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/achievements',
    component: ComponentCreator('/achievements', '210'),
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
    path: '/achievements/completed-certificates',
    component: ComponentCreator('/achievements/completed-certificates', '2f7'),
    exact: true
  },
  {
    path: '/achievements/engineering-score',
    component: ComponentCreator('/achievements/engineering-score', 'd73'),
    exact: true
  },
  {
    path: '/achievements/enrolled-certificates',
    component: ComponentCreator('/achievements/enrolled-certificates', '77b'),
    exact: true
  },
  {
    path: '/achievements/ft-multicon-w-2022-23',
    component: ComponentCreator('/achievements/ft-multicon-w-2022-23', '37e'),
    exact: true
  },
  {
    path: '/achievements/iitm-foundation-level',
    component: ComponentCreator('/achievements/iitm-foundation-level', 'afd'),
    exact: true
  },
  {
    path: '/achievements/st-multicon-w-2023-24',
    component: ComponentCreator('/achievements/st-multicon-w-2023-24', '2b8'),
    exact: true
  },
  {
    path: '/achievements/tags',
    component: ComponentCreator('/achievements/tags', '51b'),
    exact: true
  },
  {
    path: '/achievements/tags/completed-certificates',
    component: ComponentCreator('/achievements/tags/completed-certificates', 'cee'),
    exact: true
  },
  {
    path: '/achievements/tags/engineering-score',
    component: ComponentCreator('/achievements/tags/engineering-score', '0a8'),
    exact: true
  },
  {
    path: '/achievements/tags/enrolled-certificates',
    component: ComponentCreator('/achievements/tags/enrolled-certificates', '60d'),
    exact: true
  },
  {
    path: '/achievements/tags/executive-director-maintainer-at-tcet-open-source',
    component: ComponentCreator('/achievements/tags/executive-director-maintainer-at-tcet-open-source', 'e24'),
    exact: true
  },
  {
    path: '/achievements/tags/iit-madras-bs-degree-foundation-level',
    component: ComponentCreator('/achievements/tags/iit-madras-bs-degree-foundation-level', 'f9c'),
    exact: true
  },
  {
    path: '/achievements/tags/multicon-w-2022-23',
    component: ComponentCreator('/achievements/tags/multicon-w-2022-23', '729'),
    exact: true
  },
  {
    path: '/achievements/tags/multicon-w-2023-24',
    component: ComponentCreator('/achievements/tags/multicon-w-2023-24', 'c72'),
    exact: true
  },
  {
    path: '/achievements/tcet-open-source',
    component: ComponentCreator('/achievements/tcet-open-source', '06b'),
    exact: true
  },
  {
    path: '/announcements',
    component: ComponentCreator('/announcements', 'abf'),
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
    path: '/announcements/iitm-diploma-level',
    component: ComponentCreator('/announcements/iitm-diploma-level', '14a'),
    exact: true
  },
  {
    path: '/announcements/tags',
    component: ComponentCreator('/announcements/tags', 'c51'),
    exact: true
  },
  {
    path: '/announcements/tags/iit-madras-bs-degree-diploma-level',
    component: ComponentCreator('/announcements/tags/iit-madras-bs-degree-diploma-level', 'db9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '771'),
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
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/translating-resource-materials-and-texts',
    component: ComponentCreator('/blog/tags/translating-resource-materials-and-texts', '9c9'),
    exact: true
  },
  {
    path: '/blog/translating-resource-materials',
    component: ComponentCreator('/blog/translating-resource-materials', 'b47'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bd9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd2d'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/intro',
            component: ComponentCreator('/docs/tags/intro', '3af'),
            exact: true
          },
          {
            path: '/docs/tags/old-project',
            component: ComponentCreator('/docs/tags/old-project', '97a'),
            exact: true
          },
          {
            path: '/docs/tags/portfolio-website',
            component: ComponentCreator('/docs/tags/portfolio-website', '8fb'),
            exact: true
          },
          {
            path: '/docs/tags/smart-india-hackathon-2023-24',
            component: ComponentCreator('/docs/tags/smart-india-hackathon-2023-24', 'd01'),
            exact: true
          },
          {
            path: '/docs/tags/stats-for-my-uni',
            component: ComponentCreator('/docs/tags/stats-for-my-uni', '465'),
            exact: true
          },
          {
            path: '/docs/tags/super-abacus',
            component: ComponentCreator('/docs/tags/super-abacus', '2a9'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7b6'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/old-project',
                component: ComponentCreator('/docs/old-project', '596'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/portfolio-website',
                component: ComponentCreator('/docs/portfolio-website', '4e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sih-2023-24',
                component: ComponentCreator('/docs/sih-2023-24', '353'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/stats-for-my-uni',
                component: ComponentCreator('/docs/stats-for-my-uni', '01a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/super-abacus',
                component: ComponentCreator('/docs/super-abacus', 'f85'),
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
