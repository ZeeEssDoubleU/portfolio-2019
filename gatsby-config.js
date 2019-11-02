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
    siteUrl: "https://zswportfolio.netlify.com", // No trailing slash allowed!
    image: "./static/favicon.svg", // Path to your image you placed in the 'static' folder
    themeColor: "linear-gradient(153deg, #323232 0%, black 100vh)",
    keywords:
      "react developer, javascript developer, front end developer, web developer, freelance web developer, web developer new york city, new york city, new york city web development, gatsby developer, developer for hire",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        localeFallbacks: {
          it: ["en"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // where to append modal to
        appElement: "#___gatsby",
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
