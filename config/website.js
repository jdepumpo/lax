const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'jfd3 | Joe DePumpo Portfolio', // Navigation and Site Title
  siteTitleAlt: 'jfd3', // Alternative Site title for SEO
  siteUrl: 'https://jfd3.us', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Joe DePumpos web design and development portfolio.',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@jdepumpo', // Twitter Username

  // Manifest and Progress color
  themeColor: tailwind.colors.purple,
  backgroundColor: tailwind.colors.black,
};
