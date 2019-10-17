// @ts-nocheck
import React, { useContext, useRef } from "react"
import { ThemeContext } from "styled-components"
// import styles
import ResetStyle from "../styles/reset"
import GlobalStyle from "../styles/global"
// import components
import Nav from "./Nav/Nav"
import Landing from "./Landing"
import About from "./About"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
// import store / utils
import { useStore, onToggleNav } from "../store/useStore"
import { useIntersectionObserver } from "../utils/useIO"
import { useWindowResize } from "../utils/useWindowResize"

// ***COMPONENT***
const Layout = props => {
  const { state, dispatch } = useStore()
  // grab context from theme for use in component
  const themeContext = useContext(ThemeContext)

  // updates state with useWindowResize
  useWindowResize(dispatch, themeContext)

  // intersection obserserver - toggles Nav
  const ioTarget = useRef(null)
  useIntersectionObserver(dispatch, state.isDesktop, ioTarget, onToggleNav)

  return (
    <>
      <ResetStyle />
      <GlobalStyle menuExpanded={state.menuExpanded} />
      <Nav role="navigation" aria-label="main navigation" />
      <div id="io-target" ref={ioTarget}>
        <Landing />
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  )
}
export default Layout
