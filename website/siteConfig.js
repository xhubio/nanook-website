/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Deutsche Bahn',
    image: '/img/users/deutschebahn.svg',
    infoLink: 'https://deutschebahn.de',
    pinned: true,
  },
  {
    caption: 'Weltprofolio',
    image: '/img/users/LogoWeltportfolio.png',
    infoLink: 'https://Weltportfolio.net',
    pinned: true,
  },
  {
    caption: 'BitDiver',
    image: '/img/fa.svg',
    infoLink: 'https://bitdiver.xhub.io',
    pinned: true,
  },
];


const repoUrl = 'https://github.com/xhubio/nanook-table/';
const siteConfig = {
  title: 'Nanook', // Title for your website.
  tagline: 'A toolkit for test case and test data creation',
  url: 'https://nanook.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'nanook',
  organizationName: 'Nanook',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'


  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/xhubio/nanook-table/',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'tutorials/overview', label: 'Docs'},
    /* you can add external links */
    {href: repoUrl, label: 'GitHub'},
    // {doc: 'api/overview', label: 'API'},
    // {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/nanook.svg',
  footerIcon: 'img/nanook.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#999998',
    secondaryColor: '#5b504e',
    primaryColor: 'rgb(34, 34, 34)',
    secondaryColor: '#05A5D1',
    tintColor: '#005068',
    backgroundColor: '#f5fcff',
  },

  /* Custom fonts for website */
  /* #c1c1c1
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Nanook.io`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  usePrism: ['javascript', 'js', 'jsx', 'java', 'objective-c', 'json'],
  highlight: {
    theme: 'solarized-dark',
  },
};

module.exports = siteConfig;
