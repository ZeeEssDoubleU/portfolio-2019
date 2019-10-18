// dotenv needed to protect contentful API keys
if (process.env.NODE_ENV !== "production") {
  require("dotenv/config")
}

module.exports = {
  siteMetadata: {
    title: `Web Developer | New York City`,
    titleTemplate: "%s | Zachary Williams",
    description:
      "Zachary Williams is a web developer in New York City.  Contact him here for front-end engineering help with React, Gatsby, Next and more.",
    url: "https://www.zswportfolio.netlify.com", // No trailing slash allowed!
    siteUrl: "https://www.zswportfolio.netlify.com", // No trailing slash allowed!
    image: "./static/favicon.svg", // Path to your image you placed in the 'static' folder
    themeColor: "linear-gradient(153deg, #323232 0%, black 100vh)",
    keywords:
      "react developer, javascript developer, front end developer, web developer, freelance web developer, web developer new york city, new york city, new york city web development, gatsby developer, developer for hire",
    lang: "en",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Developer | Zachary Williams`,
        short_name: `Zachary Williams`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `hsl(167, 73%, 60%)`,
        display: `standalone`,
        icon: `./static/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.DATO_API_TOKEN,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL
        apiUrl: "https://site-api.datocms.com",

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ["en"],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: "#___gatsby",

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          // equivalent to modal close animation in animations.js
          closeTimeoutMS: 300,
          style: {
            overlay: {
              zIndex: 999,
              background: "",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
            content: {
              background: "",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              padding: 0,
              margin: 0,
              border: "none",
              borderRadius: "none",
            },
          },
        },
      },
    },
  ],
}
