import axios from "axios"

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
	profileImage: upload(filter: {filename: {matches: {pattern: "selfie-tinted.png"}}}) {
		title
		url
	}
`
export const allProjectsQuery = `
	allProjects(orderBy: order_DESC) {
		title
		description
		slug
	}
`
export const projectQuery = `
	query ProjectBySlug($slug: String!) {
		project(slug: { eq: $slug }) {
			title
			description
			moreInfo
			features
			tech
			projectLink
			codeLink
			image {
				fluid(imgixParams: { auto: "format", q: 0 }) {
					...GatsbyDatoCmsFluid
				}
			}
			slug
		}
	}
`

// ************
// get data - datocms
// ************

export async function getDatocmsData(query) {
	const token = process.env.DATOCMS_API_TOKEN
	const { data } = await axios({
		url: `https://graphql.datocms.com/`,
		method: "POST",
		headers: {
			authorization: `Bearer ${token}`,
		},
		data: {
			query: query,
		},
	})

	// console.log("data:", data) // ? debug
	return data
}

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
