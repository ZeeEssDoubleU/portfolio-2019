import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react"
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
  height: calc(100vh - 90px);
  visibility: hidden;
`

// exported component
const Layout = props => {
  const [showNav, setShowNav] = useState(false)
  const [menuExpanded, setMenuExpanded] = useState(false)
  const menuState = menuExpanded ? " is-active" : ""
  // grab context from theme for use in component
  const themeContext = useContext(ThemeContext)
  const windowMobileCheck = useCallback(
    () =>
      typeof window !== "undefined"
        ? window.innerWidth < themeContext.tablet
        : null,
    [themeContext.tablet]
  )
  // prevents re-initialization of timeline on re-renders
  const [windowMobile, setWindowMobile] = useState(() => windowMobileCheck())

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
  }, [windowMobileCheck])

  const tl = useRef(null)
  // componentDidMount.  Create nav and menu animation timelines
  useEffect(() => {
    tl.current = new TimelineMax({ paused: true })
      .add("showNav-start") // showNav
      .staggerFromTo(
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
      .add("showNav-end") // showNav
      .add("menuExpand-start", "+=1") // menuExpand
      .set(
        ".menu-items",
        { autoAlpha: 0, x: -40, immediateRender: true },
        "menuExpand-start"
      )
      .staggerFromTo(
        ".menu-items",
        0.5,
        { autoAlpha: 0, x: -40 },
        { autoAlpha: 1, x: 0 },
        0.1,
        "menuExpand-start += .3"
      )
      .add("menuExpand-end") // menuExpand
  }, [])
  // gsap animation - nav header.  Triggers on showNav and windowMobile
  useEffect(() => {
    showNav
      ? tl.current.tweenFromTo("showNav-start", "showNav-end")
      : tl.current.pause("showNav-start")
  }, [showNav, windowMobile])
  // gsap animation - mobile menu.  Triggers on menuExpanded
  useEffect(() => {
    menuExpanded
      ? tl.current.tweenFromTo("menuExpand-start", "menuExpand-end")
      : tl.current.pause("menuExpand-start")
  }, [menuExpanded])

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
