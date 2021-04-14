module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '44954675d67447cfad110027a71ba873',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Sky\'s Blog',
  domain: 'zdl.im',
  author: 'Sky',

  // open graph metadata (optional)
  description: 'Sky\'s Blog',
  socialImageTitle: 'Sky\'s Blog',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: '',
  github: '',
  telegram: 'skywxbot',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
pageUrlOverrides: {
   '/web': '252b6d49b4de4547b33c63b6dde2e776',
   '/money': 'a637c6f05a244be2a8152191839a8445'
  },
  pageUrlOverrides: null
}
