require("dotenv").config({
  path: `.env`,
})
const config = require('gatsby-plugin-config').default;
const GA_TRACKING_ID = config.GA_TRACKING_ID;


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.hhaluk.me",
    title: "hhaluk",
    description: "Huseyin Haluk Nurbaki - Profile",
    author: "Huseyinnurbaki",
    keywords: ["blog","github", "medium", "huseyinnurbaki", "opensource", "hhaluk"]
 
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: GA_TRACKING_ID,
      },
      pluginConfig: {
          head: true,
      },
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.ico",
      },
    },
    
  ],
};
