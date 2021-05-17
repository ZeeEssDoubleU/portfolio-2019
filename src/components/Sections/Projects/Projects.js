import { useState } from "react"
import styled from "styled-components"
// import components
import StyledButton from "../../elements/StyledButton"
import ProjectListing from "./ProjectListing"
// import styles
import { Section, Header, Body } from "../../../styles/elements"
import { useHomeData } from "../../../data/hooks"

// **********
// component
// **********

export default function Projects() {
	const { allProjects } = useHomeData()
	console.log("allProjects:", allProjects) // ? debug
	const [showMoreIndex, setShowMoreIndex] = useState(5)

	// display 'show more' button if all projects aren't shown
	// display nothing if all project are shown
	const isHidden = allProjects.length <= showMoreIndex ? true : false

	// array to display projects below in render
	const projectArray = allProjects
		.slice(0, showMoreIndex)
		.map((project, index) => {
			return (
				<ProjectListing
					key={index}
					index={index}
					title={project.title}
					description={project.description}
					slug={project.slug}
				></ProjectListing>
			)
		})

	return (
		<Container id="projects">
			<Header>projects</Header>
			<Body>{projectArray}</Body>
			{!isHidden && (
				<StyledButton
					icon="plus"
					hidden={isHidden}
					aria-label="show more projects"
					// TODO: add show more animation
					// slide container down
					// stagger fade in new projects
					onClick={() => setShowMoreIndex(showMoreIndex + 5)}
				>
					show more
				</StyledButton>
			)}
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled(Section)``
