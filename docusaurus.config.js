// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kyna',
  tagline: 'Build real applications with Kyna',
  favicon: 'img/favicon.svg',

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
        href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap',
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
        alt: 'Qentrah mark',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 30,
        height: 30,
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Guide'},
        {to: '/docs/libraries/native', label: 'Libraries', position: 'left'},
        {to: '/docs/built-with-kyna', label: 'Built with Kyna', position: 'left'},
        {href: 'https://qentrah.com/', label: 'Qentrah', position: 'right'},
        {type: 'search', position: 'right'},
        {href: 'https://github.com/qentrah/Kyna', position: 'right', className: 'header-github-link', 'aria-label': 'Kyna on GitHub'},
        {href: 'https://www.npmjs.com/package/@kyna-language/cli', position: 'right', className: 'header-npm-link', 'aria-label': 'Kyna CLI on npm'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Learn', items: [
          {label: 'Introduction', to: '/docs/intro'},
          {label: 'Language tour', to: '/docs/tutorial/tour'},
          {label: 'Getting started', to: '/docs/tutorial/getting-started'},
        ]},
        {title: 'Build', items: [
          {label: 'Native libraries', to: '/docs/libraries/native'},
          {label: 'Built with Kyna', to: '/docs/built-with-kyna'},
          {label: 'Kyna Music source', href: 'https://github.com/qentrah/kyna-music'},
        ]},
        {title: 'Qentrah', items: [
          {label: 'Projects, tools & ideas', href: 'https://qentrah.com/'},
          {label: 'Kyna source', href: 'https://github.com/qentrah/Kyna'},
          {label: 'Report an issue', href: 'https://github.com/qentrah/Kyna/issues'},
        ]},
      ],
      copyright: 'Kyna by Ahmed Mansour · Qentrah. Documentation built with Docusaurus.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'toml'],
    },
  },
};

export default config;
