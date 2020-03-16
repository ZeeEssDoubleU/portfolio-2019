const axios = require(`axios`)
const fs = require("fs")

// dotenv needed to protect contentful API keys
if (process.env.NODE_ENV !== `production`) {
  require(`dotenv/config`)
}

// creates favicon.svg and faviconShare.svg file for gatsby-plugin-manifest
const saveIcons = async () => {
  const favicon = await axios.get(
    `https://www.datocms-assets.com/16519/1575643152-logo-favicon.svg`
  )
  fs.writeFile(
    "./src/components/Icons/favicon.svg",
    favicon.data,
    err => console.log(err),
    res => console.log("Favicon was saved!")
  )
}
saveIcons()

module.exports = {
  siteMetadata: {
    title: `Web Developer | New York City`,
    titleTemplate: "%s | Zachary Williams",
    description:
      "Zachary Williams is a web developer in New York City.  Contact him here for front-end engineering help with React, Gatsby, Next and more.",
    siteUrl: "https://zswportfolio.netlify.com", // No trailing slash allowed!
    image: `./src/components/Icons/favicon.svg`, // declared in globalSEO on DatoCMS
    themeColor: "linear-gradient(153deg, #323232 0%, black 100vh)",
    keywords:
      "react developer, javascript developer, front end developer, web developer, freelance web developer, web developer new york city, new york city, new york city web development, gatsby developer, developer for hire",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
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
        display: `minimal-ui`,
        icon: `./src/components/Icons/favicon.svg`, // declared in globalSEO on DatoCMS
      },
    },
    "gatsby-plugin-offline", // load after manifest (above) so manifest can be cached
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
  ],
}
