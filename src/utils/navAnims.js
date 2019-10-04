import { useEffect, useRef } from "react"
import { TimelineMax } from "gsap"

export const useNavAnims = (state, themeContext) => {
  const tl = useRef(null)
  // componentDidMount.  Create nav and menu animation timelines
  useEffect(() => {
    tl.current = new TimelineMax({ paused: true })
      .add("showNavElems-start") // showNav
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
      .add("showNavElems-end") // showNav
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

  // gsap animation - nav header.  Triggers on showNav and when window is mobile
  const tabletCheck = state.windowWidth < themeContext.tablet
  useEffect(() => {
    state.navVisible
      ? tl.current.tweenFromTo("showNavElems-start", "showNavElems-end")
      : tl.current.pause("showNavElems-start")
  }, [state.navVisible, tabletCheck])
  // gsap animation - mobile menu.  Triggers on state.menuExpanded
  useEffect(() => {
    state.menuExpanded
      ? tl.current.tweenFromTo("menuExpand-start", "menuExpand-end")
      : tl.current.pause("menuExpand-start")
  }, [state.menuExpanded])
}
