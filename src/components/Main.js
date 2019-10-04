// @ts-nocheck
import React, { useContext, useEffect, useRef } from "react"
import { ThemeContext } from "styled-components"
// import styles
import GlobalStyle from "../styles/global"
// import components
import Nav from "./Nav/Nav"
import Landing from "./Landing"
import About from "./About"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"
// import store / utils
import { useStore, toggleNav } from "../store/useStore"
import { useIntersectionObserver } from "../utils/io.js"
import { useNavAnims } from "../utils/navAnims.js"
import { useWindowResize } from "../utils/windowResize"

// exported component
const App = props => {
  const { state, dispatch } = useStore()
  // grab context from theme for use in component
  const themeContext = useContext(ThemeContext)

  // updates state with useWindowResize
  useWindowResize(dispatch, themeContext)

  // intersection obserserver - toggles Nav
  const ioTarget = useRef(null)
  useIntersectionObserver(dispatch, ioTarget, toggleNav)

  // navigation animations
  useNavAnims(state, themeContext)

  return (
    <>
      <GlobalStyle menuExpanded={state.menuExpanded} />
      <Nav role="navigation" aria-label="main navigation"></Nav>
      <div id="io-target" ref={ioTarget}>
        <Landing />
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  )
}
export default App
