import React from "react"
import { graphql } from "gatsby"
//import component
import Project from "../components/Pages/Project"
import SEO from "../components/SEO"

// **********
// component
// **********

export default function ProjectPage({ data }) {
	const project = data.datoCmsProject
	// console.log("data:", data) // ? debug

	return (
		<>
			<SEO
				title={project.title}
				description={project.description}
				keywords={project.tech}
			/>
			<Project
				title={project.title}
				description={project.description}
				moreInfo={project.moreInfo}
				features={project.features}
				projectLink={project.projectLink}
				codeLink={project.codeLink}
				image={project.image}
				tech={project.tech}
			/>
		</>
	)
}

// **********
// query
// **********

export const query = graphql`
	query DatoCmsProjectBySlug($slug: String!) {
		datoCmsProject(slug: { eq: $slug }) {
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