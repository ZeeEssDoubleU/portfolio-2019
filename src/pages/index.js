// @ts-nocheck
import React, { useContext, useEffect, useRef } from "react"
import { ThemeContext } from "styled-components"
// import styles
import GlobalStyle from "../styles/global"
// import components
import SEO from "../components/SEO"
import Nav from "../components/Nav/Nav"
import Landing from "../components/Landing"
import About from "../components/About"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"
// import store / utils
import { useStore, onToggleNav } from "../store/useStore"
import { useIntersectionObserver } from "../utils/useIO"
import { useWindowResize } from "../utils/useWindowResize"

// ***COMPONENT***
const App = () => {
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
  const themeContext = useContext(ThemeContext)

  // store and util functions
  const { state, dispatch } = useStore()
  // updates state with useWindowResize
  useWindowResize(dispatch, themeContext)
  // intersection obserserver - toggles Nav
  const ioTarget = useRef(null)
  useIntersectionObserver(dispatch, state.isDesktop, ioTarget, onToggleNav)

  return (
    <>
      <GlobalStyle menuExpanded={state.menuExpanded} />
      <SEO />
      <Nav role="navigation" aria-label="main navigation" />
      <main>
        <div id="io-target" ref={ioTarget}>
          <Landing />
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
