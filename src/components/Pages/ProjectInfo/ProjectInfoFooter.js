// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

// **********
// component
// **********

export default function ProjectInfoFooter(props) {
	return (
		<Container>
			<Link
				to="/"
				aria-label={`close ${props.title} project info panel`}
				onClick={(e) => {
					e.preventDefault()
					// use navigate from reach router instead of gatsby for back (-1) functionality
					// Gatsby still not updated with latest version
					navigate(-1)
				}}
			>
				<button>Close</button>
			</Link>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;

	display: grid;
	grid-template-rows: 70px;
	justify-content: center;
	align-content: center;
	button {
		border: none;

		color: ${(props) => props.theme.appTextWhiteL};
		font-size: 20px;
		background: black;
		cursor: pointer;
	}
`
