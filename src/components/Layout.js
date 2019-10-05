// @ts-nocheck
import React, { useRef } from "react"
// import styles
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
import { useNavAnims } from "../utils/useNavAnims"
import { useWindowResize } from "../utils/useWindowResize"

// exported component
const Layout = props => {
  const { state, dispatch } = useStore()

  // updates state with useWindowResize
  useWindowResize(dispatch)

  // intersection obserserver - toggles Nav
  const ioTarget = useRef(null)
  useIntersectionObserver(dispatch, state, ioTarget, onToggleNav)

  // navigation animations
  useNavAnims(state)

  return (
    <>
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
