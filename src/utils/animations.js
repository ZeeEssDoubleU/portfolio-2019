import { useLayoutEffect, useRef } from "react"
import { TimelineMax } from "gsap"

export const useAnim_showNav = state => {
  const tl_nav = useRef(null)
  const tl_nav_desktop = useRef(null)
  // componentDidMount.  Create nav and menu animation timelines
  useLayoutEffect(() => {
    // nav animation
    tl_nav.current = new TimelineMax({ paused: true })
      .add("showNavElems-start") // showNav - START
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
        ".menu-link",
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
        ".menu-link",
        0.5,
        { autoAlpha: 0, x: -40, y: 0 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "showNavElems-desktop-start"
      )
      .add("showNavElems-desktop-end") // showNav - desktop - END

    return () => {
      tl_nav.current.kill()
      tl_nav_desktop.current.kill()
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
}
export const useAnim_expandMenu = state => {
  const tl_menu = useRef(null)
  // componentDidMount.  Create nav and menu animation timelines
  useLayoutEffect(() => {
    // menu expand animation
    tl_menu.current = new TimelineMax({ paused: true })
      .add("menuExpand-start") // menuExpand - START
      .to(
        ".menu-link",
        0.01,
        { autoAlpha: 0, x: -40, y: 0, immediateRender: true },
        "menuExpand-start"
      )
      .staggerFromTo(
        ".menu-link",
        0.5,
        { autoAlpha: 0, x: -40, y: 0 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "menuExpand-start+=.2"
      )
      .add("menuExpand-end") // menuExpand - END

    return () => {
      tl_menu.current.kill()
    }
  }, [])

  // gsap animation - mobile menu.  Triggers on state.menuExpanded
  useLayoutEffect(() => {
    state.menuExpanded
      ? tl_menu.current.tweenFromTo("menuExpand-start", "menuExpand-end")
      : tl_menu.current.pause("menuExpand-start")
  }, [state.menuExpanded])
}

export const useAnim_modalFromBottom = () => {
  const tl_modal = useRef(null)
  // animate/show modal (project info) when component mounts
  useLayoutEffect(() => {
    tl_modal.current = new TimelineMax().to(".modal-from-bottom", 0.3, {
      y: "-100%",
    })
  }, [])

  return tl_modal
}
