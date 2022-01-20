// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Slangekongernes Grav',
  tagline: 'Et lærende begynder dyb',
  url: 'https://slangekongernes-grav.æventyr.dk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'toxicdonkeybutts',
  projectName: 'slangekongernes-grav',

  i18n: {
    defaultLocale: 'da',
    locales: ['da'],
  },

  plugins: [
    'plugin-image-zoom',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        hashed: true,
        language: ["da"],
        translations: {
          "search_placeholder": "Søg",
          "see_all_results": "Vis alle resultater",
          "no_results": "Ingen resultater fundet.",
          "search_results_for": "Søgeresultater for \"{{ keyword }}\"",
          "search_the_documentation": "Søg i dokumentationen",
          "count_documents_found": "Et dokument fundet",
          "count_documents_found_plural": "{{ count }} dokumenter fundet",
          "no_documents_were_found": "Ingen dokumenter fundet"
        }
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          routeBasePath: 'bog'
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
      hideableSidebar: true,
      navbar: {
        title: 'Slangekongernes Grav',
        logo: {
          alt: 'En simpel slange',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduktion',
            position: 'right',
            label: 'Eventyret',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
