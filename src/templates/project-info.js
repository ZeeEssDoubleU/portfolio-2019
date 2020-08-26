// @ts-nocheck
import React from "react";
import { graphql } from "gatsby";
//import component
import ProjectInfo from "../components/Projects/ProjectInfo";
import SEO from "../components/SEO";

// **********
// component
// **********

export default ({ data }) => {
	const project = data.datoCmsProject;

	return (
		<>
			<SEO
				title={project.title}
				description={project.description}
				keywords={project.tech}
			/>
			<ProjectInfo
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
	);
};

// **********
// query
// **********

export const pageQuery = graphql`
	query($slug: String!) {
		datoCmsProject(slug: { eq: $slug }) {
			title
			description
			moreInfo
			features
			tech
			projectLink
			codeLink
			image {
				fluid(maxWidth: 1400, imgixParams: { fm: "jpg" }) {
					...GatsbyDatoCmsFluid
				}
			}
			slug
		}
	}
`;
