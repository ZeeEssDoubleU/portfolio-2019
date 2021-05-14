import path from "path"
import { CreatePagesArgs, CreateWebpackConfigArgs } from "gatsby"

// ************
// lifecyle hook
// ************

export async function createPages({ actions, graphql, reporter }) {
	const { data } = await graphql(`
		query AllDatoCmsProjectBySlug {
			allDatoCmsProject {
				nodes {
					slug
				}
			}
		}
	`)

	if (!data) {
		reporter.panicOnBuild("Could not fetch projects from DatoCMS on build.")
		return
	}

	data.allDatoCmsProject.nodes.forEach((node) => {
		const { slug } = node

		if (!slug) return
		// console.log("slug:", slug) // ? debug

		actions.createPage({
			path: `/project/${slug}`,
			component: path.resolve(`./src/templates/ProjectInfo.js`),
			context: {
				slug: slug,
			},
		})
	})
}
