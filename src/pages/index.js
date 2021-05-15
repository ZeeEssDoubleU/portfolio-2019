import React, { useContext, useEffect, useRef } from "react"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
// import components
import SEO from "../components/SEO"
import Nav from "../components/Nav"
import Landing from "../components/Sections/Landing/Landing"
import About from "../components/Sections/About"
import Projects from "../components/Sections/Projects"
import Contact from "../components/Sections/Contact"
// import store / utils
import { useStore, onToggleNav } from "../store/useStore"
import { useIntersectionObserver } from "../hooks/useIO"
import { useWindowResize } from "../hooks/useWindowResize"

// **********
// component
// **********
export default function Index() {
	// let the document know when mouse is being used
	useEffect(() => {
		document.body.addEventListener("mousedown", () => {
			document.body.classList.add("using-mouse")
		})
		document.body.addEventListener("keydown", () => {
			document.body.classList.remove("using-mouse")
		})
	}, [])

	// grab context from theme for use in component
	const theme = useContext(ThemeContext)

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
			<SEO />
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
