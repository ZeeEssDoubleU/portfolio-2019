import "dotenv/config"

// import icon paths
import { faviconPath } from "./prebuild"

export default {
	siteMetadata: {
		title: `Web Developer | New York City`,
		titleTemplate: "%s | Zachary Williams",
		description:
			"Zachary Williams is a web developer in New York City.  Contact him here for front-end engineering help with React, Gatsby, Next and more.",
		siteUrl: "https://zswportfolio.netlify.com", // No trailing slash allowed!
		image: faviconPath, // declared in globalSEO on DatoCMS
		themeColor: "linear-gradient(153deg, #323232 0%, black 100vh)",
		keywords:
			"react developer, javascript developer, front end developer, web developer, freelance web developer, web developer new york city, new york city, new york city web development, gatsby developer, developer for hire",
		lang: "en",
	},
	plugins: [
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
				display: `standalone`,
				icon: faviconPath, // declared in globalSEO on DatoCMS
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
				apiToken: process.env.DATOCMS_API_TOKEN,
				localeFallbacks: {
					it: ["en"],
				},
			},
		},
	],
}
