// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kyna',
  tagline: 'A statically typed language with an inspectable compiler',
  favicon: 'img/logo.svg',

  url: 'https://up-to-code.github.io',
  baseUrl: '/kyna-docs/',
  organizationName: 'Up-to-code',
  projectName: 'kyna-docs',
  trailingSlash: false,

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap',
      },
    },
  ],

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: () => {},
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/Up-to-code/kyna-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Kyna',
      logo: {
        alt: 'Kyna Logo',
        src: 'img/logo.svg',
        width: 26,
        height: 26,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'Learn',
          position: 'left',
          items: [
            {label: 'Getting started', to: '/docs/tutorial/getting-started'},
            {label: 'Language tour', to: '/docs/tutorial/tour'},
            {label: 'Modules & imports', to: '/docs/tutorial/modules'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Reference',
          position: 'left',
          items: [
            {label: 'Bindings & types', to: '/docs/reference/bindings'},
            {label: 'Control flow & matching', to: '/docs/reference/control-flow'},
            {label: 'Functions & closures', to: '/docs/reference/functions'},
            {label: 'Classes & objects', to: '/docs/reference/classes-and-objects'},
            {label: 'Exceptions & errors', to: '/docs/reference/exceptions'},
            {label: 'Async & concurrency', to: '/docs/reference/async'},
            {label: 'Networking & HTTP', to: '/docs/reference/networking'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Library',
          position: 'left',
          items: [
            {label: 'Text', to: '/docs/stdlib/text'},
            {label: 'Collections', to: '/docs/stdlib/collections'},
            {label: 'Files', to: '/docs/stdlib/files'},
            {label: 'System', to: '/docs/stdlib/system'},
            {label: 'Data formats', to: '/docs/stdlib/data-formats'},
            {label: 'Timing & memory', to: '/docs/stdlib/timing-and-memory'},
          ],
        },
        {
          to: '/docs/examples',
          label: 'Examples',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/Up-to-code/Kyna',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.npmjs.com/package/@kyna-language/cli',
          label: 'npm',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Language Tour', to: '/docs/tutorial/tour'},
            {label: 'Getting Started', to: '/docs/tutorial/getting-started'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Bindings & Types', to: '/docs/reference/bindings'},
            {label: 'Standard Library', to: '/docs/stdlib/text'},
            {label: 'Networking API', to: '/docs/reference/networking'},
          ],
        },
        {
          title: 'Community & Code',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Up-to-code/Kyna',
            },
            {
              label: 'Issue Tracker',
              href: 'https://github.com/Up-to-code/Kyna/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kyna Language Contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'toml'],
    },
  },
};

export default config;
