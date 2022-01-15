require("dotenv").config({
  path: `.env`,
})
const config = require('gatsby-plugin-config').default;
const GA_TRACKING_ID = config.GA_TRACKING_ID;


module.exports = {
  siteMetadata: {
    siteUrl: "https://hhaluk.me",
    title: "Huseyin Haluk Profile Card",
    description: "Open Source Content:  github.com/Huseyinnurbaki • huseyinnurbaki.medium.com • hub.docker.com/search?q=hhaluk&type=image",
    author: "Huseyinnurbaki",
    keywords: ["huseyinnurbaki", "opensource", "hhaluk", "hhaluk.me", "in/huseyinnurbaki", "crypto-watchdog", "mocktail", "blog", "github", "medium",]
 
  },
  plugins: [
     {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          GA_TRACKING_ID,
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        createLinkInHead: true, // optional: create a link in the `<head>` of your site
        addUncaughtPages: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.ico",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://hhaluk.me',
        sitemap: 'https://hhaluk.me/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }

    
  ],
};
