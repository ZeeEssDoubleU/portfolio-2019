import React, { useState, useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styled, { ThemeContext } from "styled-components"
import { TimelineMax } from "gsap"
// import styles
import GlobalStyle from "../../styles/global"
// import components
import Nav from "./Nav"

// styled components
const ShowNavIntersection = styled.div`
  position: absolute;
  /* subtract height of Nav bar below */
  height: calc(100vh - 100px);
  visibility: hidden;
  z-index: -1;
`

// exported component
const Layout = props => {
  const [showNav, setShowNav] = useState(false)
  const [menuExpanded, setMenuExpanded] = useState(false)
  const menuState = menuExpanded ? " is-active" : ""
  // grab context from theme for use in component
  const themeContext = useContext(ThemeContext)
  const windowMobileCheck = () =>
    typeof window !== "undefined"
      ? window.innerWidth < themeContext.tablet
      : null
  const [windowMobile, setWindowMobile] = useState(windowMobileCheck())

  // react-intersection-observer
  const [ref, inView, entry] = useInView()

  // showNav if ShowNavIntersection out of view
  useEffect(() => {
    if (entry) setShowNav(!inView)
  }, [inView, entry])

  // set window size state
  // shrink mobile menu down to nav bar when screen increases in size
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (windowMobileCheck()) {
        setWindowMobile(true)
      } else {
        setWindowMobile(false)
        setMenuExpanded(false)
      }
    })
  }, [windowMobileCheck()])

  // create new timeline instance ON EACH RENDER
  const tl = new TimelineMax()
  // gsap animation - mobile menu.  Triggers on menuExpanded
  useEffect(() => {
    menuExpanded
      ? tl.staggerFromTo(
          ".menu-items",
          0.5,
          { autoAlpha: 0, x: -40 },
          { autoAlpha: 1, x: 0 },
          0.1,
          0.3
        )
      : tl.set(".menu-items", { autoAlpha: 0, x: -40, immediateRender: true })
  }, [menuExpanded])
  // gsap animation - nav header.  Triggers on showNav and windowMobile
  useEffect(() => {
    if (showNav)
      tl.staggerFromTo(
        ".logo-items",
        0.5,
        { autoAlpha: 0, x: 0, y: -40 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        0
      )
        .fromTo(
          ".nav-hamburger",
          0.5,
          { autoAlpha: 0, x: 0, y: -40 },
          { autoAlpha: 1, x: 0, y: 0 },
          0
        )
        .staggerFromTo(
          ".menu-items",
          0.5,
          { autoAlpha: 0, x: 0, y: -40 },
          { autoAlpha: 1, x: 0, y: 0 },
          0.1,
          0
        )
  }, [showNav, windowMobile])

  return (
    <>
      <GlobalStyle menuExpanded={menuExpanded} />
      <ShowNavIntersection ref={ref} />
      <Nav
        role="navigation"
        aria-label="main navigation"
        showNav={showNav}
        menuExpanded={menuExpanded}
        setMenuExpanded={setMenuExpanded}
        menuState={menuState}
      ></Nav>
      {props.children}
    </>
  )
}
export default Layout
