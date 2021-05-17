import { useEffect, useRef } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
// import components
// TODO: reimplement hero
import ProjectHero from "./ProjectHero"
import ProjectContent from "./ProjectContent"
import ProjectFooter from "./ProjectFooter"

// **********
// component
// **********

export default function Project({ project }) {
	// console.log("project:", project) // ? debug
	const {
		title,
		description,
		moreInfo,
		features,
		projectLink,
		codeLink,
		image,
		tech,
	} = project

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
			<ProjectHero {...{ title, image }} />
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
			<ProjectFooter {...{ title }} />
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	height: 100%;
	width: 100%;

	/* // TODO: investigate blurred background */
	background: black;
	color: ${({ theme }) => theme.color.font_white_med};

	@media (min-width: ${({ theme }) => theme.media.desktop}px) {
		padding-top: 24px;
	}
`
