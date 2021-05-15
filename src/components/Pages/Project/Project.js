import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
// import components
import Hero from "./ProjectHero"
import Footer from "./ProjectFooter"
import ProjectContent from "./ProjectContent"

// **********
// component
// **********

export default function Project({
	title,
	description,
	moreInfo,
	features,
	projectLink,
	codeLink,
	image,
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
			<Hero {...{ title, image }} />
			<ProjectContent
				ref={targetRef}
				{...{
					title,
					description,
					projectLink,
					codeLink,
					moreInfo,
					features,
					tech,
				}}
			/>
			<Footer {...{ title }} />
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	height: 100%;
	width: 100%;

	color: ${({ theme }) => theme.appTextWhiteM};
	background: black;
	@media (min-width: ${({ theme }) => theme.desktop}) {
		padding-top: 24px;
	}
`
