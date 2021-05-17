import { useRef } from "react"
import styled from "styled-components"
// TODO: reimplement components one by one
// import components
// import SEO from "../../SEO"
import Nav from "../../Nav"
import Landing from "../../Sections/Landing/Landing"
import About from "../../Sections/About"
import Projects from "../../Sections/Projects"
import Contact from "../../Sections/Contact"
// import store / utils
import { useStore, onToggleNav } from "../../../store/useStore"
import { useIntersectionObserver } from "../../../hooks/useIO"
import { useWindowResize } from "../../../hooks/useWindowResize"
// import theme
import { theme } from "../../../styles/theme"

// **********
// component
// **********

export default function HomePage({ allProjects }) {
	// store and util functions
	const { state, dispatch } = useStore()

	// updates state with useWindowResize
	useWindowResize(dispatch, theme)

	// intersection obserserver - toggles Nav
	const intersectionObserverRef = useRef()
	useIntersectionObserver(
		dispatch,
		state.isDesktop,
		intersectionObserverRef,
		onToggleNav,
	)

	return (
		<>
			{/* // TODO: convert seo to next head */}
			{/* <SEO /> */}
			<Nav role="navigation" aria-label="main navigation" />
			<Main id="main">
				{/* ref forwarded to div INSIDE landing component */}
				<Landing ref={intersectionObserverRef} id="io-target" />
				<About />
				<Projects />
				<Contact />
			</Main>
		</>
	)
}

// **********
// styles
// **********

const Main = styled.main`
	@media (min-width: ${({ theme }) => theme.media.desktop}px) {
		margin-left: 10%;
	}
`
