import { useEffect, useRef } from "react"
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
	const targetRef = useRef(null)
	// effect disables/enables scrolling of page under modal
	// disables when modal mounted
	// enables when modal unmounted
	useEffect(() => {
		const targetElem = targetRef.current
		disableBodyScroll(targetElem)
		return () => enableBodyScroll(targetElem)
	}, [])

	return (
		<Container ref={targetRef}>
			<Hero {...{ title, image }} />
			<ProjectContent
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

	color: ${({ theme }) => theme.color.font_white_med};
	background: black;
	@media (min-width: ${({ theme }) => theme.media.desktop}px) {
		padding-top: 24px;
	}
`
