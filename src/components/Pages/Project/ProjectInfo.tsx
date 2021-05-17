import styled from "styled-components"
// import components
// TODO: import icons for tech stack
// import Icon from "../Icons/Icon"

// **********
// component
// **********

export default function ProjectInfo({ moreInfo, features, tech }) {
	// array to display tech stack below in render
	const techArray = JSON.parse(tech).map((tech, index) => (
		<li key={index}>
			<span>+</span>
			{tech}
		</li>
	))

	// array to display tech stack below in render
	const featuresArray = JSON.parse(features).map((feature, index) => (
		<li key={index}>
			<span>&#10003;</span>
			{feature}
		</li>
	))

	return (
		<Container>
			<Description>{moreInfo}</Description>
			<List>
				<h3>Features</h3>
				<ul>{featuresArray}</ul>
			</List>
			<List>
				<h3>Development Tools</h3>
				<ul>{techArray}</ul>
			</List>
		</Container>
	)
}

// **********
// styles
// **********

const Description = styled.div`
	white-space: pre-wrap;
`
const Container = styled.div`
	display: grid;
	justify-items: center;
	grid-gap: 32px;
`
const List = styled.div`
	ul {
		width: fit-content;
		padding: 0;
		margin: 8px auto 0;
		li {
			display: grid;
			text-align: left;
			grid-template-columns: 20px auto;
		}
	}
`
