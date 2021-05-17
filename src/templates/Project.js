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
