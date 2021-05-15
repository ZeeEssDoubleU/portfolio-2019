import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navigate } from "gatsby"

// **********
// component
// **********

export default function ProjectFooter(props) {
	return (
		<Container>
			<Link
				to="/"
				aria-label={`close ${props.title} project info panel`}
				onClick={(e) => {
					e.preventDefault()
					// navigate back (-1)
					navigate(-1, {
						state: { noScroll: true },
					})
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

		color: ${({ theme }) => theme.appTextWhiteL};
		font-size: 20px;
		background: black;
		cursor: pointer;
	}
`
