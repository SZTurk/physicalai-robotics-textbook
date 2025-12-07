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
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
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
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
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
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6fa'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '46c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '8f6'),
            routes: [
              {
                path: '/docs/ai-for-robotics',
                component: ComponentCreator('/docs/ai-for-robotics', 'd38'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/foundations',
                component: ComponentCreator('/docs/foundations', 'd2f'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/foundations/forward-kinematics',
                component: ComponentCreator('/docs/foundations/forward-kinematics', 'd2e'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/foundations/history-of-robotics',
                component: ComponentCreator('/docs/foundations/history-of-robotics', '6b6'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/foundations/intro',
                component: ComponentCreator('/docs/foundations/intro', '3bc'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/foundations/inverse-kinematics',
                component: ComponentCreator('/docs/foundations/inverse-kinematics', '1fa'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/foundations/robot-dynamics',
                component: ComponentCreator('/docs/foundations/robot-dynamics', 'aef'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/foundations/test-features',
                component: ComponentCreator('/docs/foundations/test-features', 'db3'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/foundations/what-is-robotics',
                component: ComponentCreator('/docs/foundations/what-is-robotics', '1a7'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/gazebo',
                component: ComponentCreator('/docs/gazebo', '69b'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/labs/advanced',
                component: ComponentCreator('/docs/labs/advanced', '300'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/docs/labs/beginner',
                component: ComponentCreator('/docs/labs/beginner', 'edf'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/docs/labs/intermediate',
                component: ComponentCreator('/docs/labs/intermediate', '636'),
                exact: true,
                sidebar: "labsSidebar"
              },
              {
                path: '/docs/nvidia-isaac',
                component: ComponentCreator('/docs/nvidia-isaac', '44f'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/real-world-projects',
                component: ComponentCreator('/docs/real-world-projects', 'a54'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/reference/api-reference',
                component: ComponentCreator('/docs/reference/api-reference', 'eb8'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/reference/command-cheatsheet',
                component: ComponentCreator('/docs/reference/command-cheatsheet', 'b80'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/reference/glossary',
                component: ComponentCreator('/docs/reference/glossary', '478'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docs/ros2',
                component: ComponentCreator('/docs/ros2', '6a6'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/docs/test-features',
                component: ComponentCreator('/docs/test-features', 'c3b'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '70e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '315'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f86'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '9f6'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'b91'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '272'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              },
              {
                path: '/docs/unity-robotics',
                component: ComponentCreator('/docs/unity-robotics', 'b13'),
                exact: true,
                sidebar: "textbookSidebar"
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
