// dotenv needed to protect contentful API keys
require("dotenv/config")

module.exports = {
  siteMetadata: {
    title: `Zachary Williams | Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "nm1f42dx9p9w",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
