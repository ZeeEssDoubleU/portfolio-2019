import { getDatocmsData } from "../datocmsClient"

// TODO: convert to .graphql files and react-query codegen
// ************
// graphql queries
// ************

export const backgroundQuery = `
	backgroundImage: asset(filter: {title: {eq: "Background"}}) {
		title
		image {
			url
		}
	}
`
export const aboutQuery = `
	profileImage: asset(filter: {title: {eq: "Avatar"}}) {
		title
		image {
			url
		}
	}
`
export const allProjectsQuery = `
	allProjects(orderBy: order_DESC) {
		title
		description
		slug
	}
`

// ************
// home page
// ************

export const homeQuery = `
	{
		${backgroundQuery}
		${aboutQuery}
		${allProjectsQuery}
	}
`
export async function getHomeData() {
	return await getDatocmsData(homeQuery)
}

// ************
// project page
// ************

export const projectQuery = (slug) => `
	{
		${backgroundQuery}
		project(filter: {slug: {eq: "${slug}"}}) {
			title
			description
			moreInfo
			features
			tech
			projectLink
			codeLink
			image {
				title
				alt
				blurUpThumb
				blurhash
				responsiveImage {
					alt
					base64
					bgColor
					title
				}
				url
				}
			slug
		}
	}
`

export async function getProjectData(slug) {
	const query = projectQuery(slug)

	return await getDatocmsData(query)
}
