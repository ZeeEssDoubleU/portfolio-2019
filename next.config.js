module.exports = {
	images: {
		domains: [`www.datocms-assets.com`],
	},
	// TODO: remove when ready
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	// TODO: further investigate redirects
	// async redirects() {
	// 	return [
	// 		{
	// 			source: "/projects/:slug",
	// 			destination: "/project/:slug",
	// 			permanent: true,
	// 		},
	// 	]
	// },
}
