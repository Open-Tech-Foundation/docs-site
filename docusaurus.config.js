// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const repoName = "";
const pkgVer = ""; //require(`../packages/${repoName}/package.json`).version;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Tagline.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "open-tech-world", // Usually your GitHub org/user name.
  projectName: repoName, // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          // Please change this to your repo.
          editUrl: `https://github.com/open-tech-world/${repoName}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Site",
        logo: {
          alt: "Open Tech World Logo",
          src: "img/logo.png",
        },
        items: [
          {
            label: "v" + pkgVer,
            position: "right",
            href: `https://www.npmjs.com/package/@open-tech-world/${repoName}`,
          },
          {
            type: "doc",
            docId: "Getting Started",
            position: "left",
            label: "Docs",
          },
          {
            href: `https://github.com/open-tech-world/${repoName}`,
            className: "header-github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            html: `⚡ by <a href="https://open-tech-world.pages.dev">Open Tech World</a>`,
          },
          {
            html: `📝 with <a href="https://docusaurus.io/">Docusaurus</a>`,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Contributors of <a href="https://github.com/open-tech-world/${repoName}">@open-tech-world/${repoName}</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
