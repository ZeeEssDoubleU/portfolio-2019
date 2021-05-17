// import components
import Project from "../../components/Pages/Project"
// import queries
import { getHomeData, getProjectData } from "../../data/queries"
import { prefetchQuery_serverSide } from "../../data/reactQueryClient"

// **********
// component
// **********

export default function ProjectPage({ data }) {
	// console.log("data:", data) // ? debug
	return <Project {...data} />
}

// ************
// get props
// ************

// This function gets called at build time
export async function getStaticPaths() {
	try {
		const {
			data: { allProjects },
		} = await getHomeData()

		console.log("getting ALL project data...") // ? debug

		// get the paths we want to pre-render based on project
		const paths = allProjects.map((project) => {
			const { slug } = project

			return {
				params: {
					slug, // ! return key must equal dynamic part of file name [project].tsx
				},
			}
		})

		// pre-render only these paths at build time.
		// { fallback: false } means other routes should 404.
		return {
			paths,
			fallback: false,
		}
	} catch (error) {
		console.error(error)
	}
}

export async function getStaticProps({ params }) {
	// from getStaticPaths above
	const { slug } = params

	try {
		const { data } = await getProjectData(slug)
		// console.log("data:", data) // ? debug

		console.log("building project page...")

		return {
			props: {
				data,
				dehydratedState: await prefetchQuery_serverSide(
					"homeData",
					getHomeData,
				),
			},
		}
	} catch (error) {
		// console.error(error) // ? debug
		return {
			notFound: true,
		}
	}
}
