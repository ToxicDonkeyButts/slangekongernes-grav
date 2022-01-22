// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tomb of the Serpent Kings",
  tagline: 'A "learning" module in an old school style.',
  url: "https://www.tomboftheserpentkings.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "toxicdonkeybutts",
  projectName: "tomboftheserpentkings",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "da"],
  },

  plugins: [
    "plugin-image-zoom",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexBlog: false,
        hashed: true,
        language: ["en", "da"],
        docsRouteBasePath: "book",
        // translations: {
        //   "search_placeholder": "Søg",
        //   "see_all_results": "Vis alle resultater",
        //   "no_results": "Ingen resultater fundet.",
        //   "search_results_for": "Søgeresultater for \"{{ keyword }}\"",
        //   "search_the_documentation": "Søg i dokumentationen",
        //   "count_documents_found": "Et dokument fundet",
        //   "count_documents_found_plural": "{{ count }} dokumenter fundet",
        //   "no_documents_were_found": "Ingen dokumenter fundet"
        // }
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: true,
          routeBasePath: "book",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: "Tomb of the Serpent Kings",
        logo: {
          alt: "A simple snake",
          src: "img/logo.svg",
        },
        items: [],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
