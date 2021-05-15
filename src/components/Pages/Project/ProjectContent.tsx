import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
// import components
import Links from "./ProjectLinks"
import Info from "./ProjectInfo"

// **********
// component
// **********

export default function ProjectContent({
	title,
	description,
	moreInfo,
	features,
	projectLink,
	codeLink,
	tech,
}) {
	// targetRef pointed at Container below
	const targetRef = useRef(null)
	useEffect(() => {
		// assigned ref to variable at advice of react warning
		const targetElem = targetRef.current
		// body scroll disabled when component (modal) mounted
		disableBodyScroll(targetElem)
		return () => enableBodyScroll(targetElem)
	}, [])

	return (
		<Container>
			<Grid>
				<Header>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</Header>
				<Links {...{ title, projectLink, codeLink }} />
				<Info {...{ moreInfo, features, tech }} />
			</Grid>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.main`
	position: absolute;
	top: 0;
	height: calc(100% - 70px);
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	mask-image: linear-gradient(
		to bottom,
		transparent 0%,
		black 3%,
		black 97%,
		transparent 100%
	);
	h1,
	h3,
	h4 {
		color: ${({ theme }) => theme.appTextWhiteL};
	}
	@media (min-width: ${({ theme }) => theme.desktop}) {
		left: 50%;
		transform: translateX(-50%);
	}
`
const Description = styled.div``
const Grid = styled.div`
	position: absolute;
	top: 60vw;
	display: grid;
	/* width: 100%; */
	justify-items: center;
	text-align: center;
	grid-gap: 32px;
	padding: 96px 24px 24px;
	background: linear-gradient(to bottom, transparent 0, black 216px);

	@media (min-width: ${({ theme }) => theme.desktop}) {
		top: 30vw;
		left: 50%;
		transform: translateX(-50%);
		padding: 0 24px 24px;
		background: linear-gradient(to bottom, transparent 0, black 72px);
	}
`
const Header = styled.div``
const Title = styled.h1`
	margin: 0.5em 0 8px;
`