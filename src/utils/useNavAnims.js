import { useLayoutEffect, useRef } from "react"
import { TimelineMax } from "gsap"

export const useNavAnims = state => {
  const tl_nav = useRef(null)
  const tl_nav_desktop = useRef(null)
  const tl_menu = useRef(null)
  // componentDidMount.  Create nav and menu animation timelines
  useLayoutEffect(() => {
    // nav animation
    tl_nav.current = new TimelineMax({ paused: true })
      .add("showNavElems-start") // showNav - START
      // TODO: wait for GSAP response
      // .to(".nav-bar", 0.01, { autoAlpha: 1 }, "showNavElems-start")
      .staggerFromTo(
        ".logo-items",
        0.5,
        { autoAlpha: 0, x: 0, y: -40 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "showNavElems-start"
      )
      .fromTo(
        ".nav-hamburger",
        0.5,
        { autoAlpha: 0, x: 0, y: -40 },
        { autoAlpha: 1, x: 0, y: 0 },
        "showNavElems-start"
      )
      .staggerFromTo(
        ".menu-items",
        0.5,
        { autoAlpha: 0, x: 0, y: -40 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "showNavElems-start"
      )
      .add("showNavElems-end") // showNav - END

    // nav animation on desktop
    tl_nav_desktop.current = new TimelineMax({ paused: true })
      .add("showNavElems-desktop-start") // showNav - desktop - START
      .staggerFromTo(
        ".logo-items",
        0.5,
        { autoAlpha: 0, x: -40, y: 0 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "showNavElems-desktop-start"
      )
      .fromTo(
        ".nav-hamburger",
        0.5,
        { autoAlpha: 0, x: -40, y: 0 },
        { autoAlpha: 1, x: 0, y: 0 },
        "showNavElems-desktop-start"
      )
      .staggerFromTo(
        ".menu-items",
        0.5,
        { autoAlpha: 0, x: -40, y: 0 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "showNavElems-desktop-start"
      )
      .add("showNavElems-desktop-end") // showNav - desktop - END

    // menu expand animation
    tl_menu.current = new TimelineMax({ paused: true })
      .add("menuExpand-start") // menuExpand - START
      .to(
        ".menu-items",
        0.01,
        { autoAlpha: 0, x: -40, y: 0, immediateRender: true },
        "menuExpand-start"
      )
      // TODO: wait for GSAP response
      // .to(".nav-bar", 0.3, { height: "100%" }, "menuExpand-start")
      // .add("menuExpand-close")
      .staggerFromTo(
        ".menu-items",
        0.5,
        { autoAlpha: 0, x: -40, y: 0 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "menuExpand-start+=.2"
      )
      .add("menuExpand-end") // menuExpand - END

    return () => {
      tl_nav.current.kill()
      tl_nav_desktop.current.kill()
      tl_menu.current.kill()
    }
  }, [])

  // gsap animation - nav header.  Triggers on showNav and when window is mobile
  useLayoutEffect(() => {
    if (state.isDesktop) {
      tl_nav_desktop.current.tweenFromTo(
        "showNavElems-desktop-start",
        "showNavElems-desktop-end"
      )
    } else {
      state.navVisible
        ? tl_nav.current.tweenFromTo("showNavElems-start", "showNavElems-end")
        : tl_nav.current.pause("showNavElems-start")
    }
  }, [state.navVisible, state.isMobile, state.isDesktop])
  // gsap animation - mobile menu.  Triggers on state.menuExpanded
  useLayoutEffect(() => {
    state.menuExpanded
      ? tl_menu.current.tweenFromTo("menuExpand-start", "menuExpand-end")
      : tl_menu.current.pause("menuExpand-start")
  }, [state.menuExpanded])
}
