import { useLayoutEffect, useRef } from "react"
import { TimelineMax } from "gsap"

export const useNavAnims = state => {
  const tl = useRef(null)
  // componentDidMount.  Create nav and menu animation timelines
  useLayoutEffect(() => {
    tl.current = new TimelineMax({ paused: true })
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
        ".menu-items",
        0.5,
        { autoAlpha: 0, x: 0, y: -40 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "showNavElems-start"
      )
      .add("showNavElems-end") // showNav - END
      .add("showNavElems-desktop-start", "+=1") // showNav - desktop - START
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
      .add("menuExpand-start", "+=1") // menuExpand - START
      .set(
        ".menu-items",
        { autoAlpha: 0, x: -40, y: 0, immediateRender: true },
        "menuExpand-start"
      )
      .staggerFromTo(
        ".menu-items",
        0.5,
        { autoAlpha: 0, x: -40, y: 0 },
        { autoAlpha: 1, x: 0, y: 0 },
        0.1,
        "menuExpand-start += .3"
      )
      .add("menuExpand-end") // menuExpand - END

    return () => tl.current.kill()
  }, [])

  // gsap animation - nav header.  Triggers on showNav and when window is mobile
  useLayoutEffect(() => {
    if (state.isDesktop) {
      tl.current.tweenFromTo(
        "showNavElems-desktop-start",
        "showNavElems-desktop-end"
      )
    } else {
      state.navVisible && !state.isDesktop
        ? tl.current.tweenFromTo("showNavElems-start", "showNavElems-end")
        : tl.current.pause("showNavElems-start")
    }
  }, [state.navVisible, state.isMobile, state.isDesktop])
  // gsap animation - mobile menu.  Triggers on state.menuExpanded
  useLayoutEffect(() => {
    state.menuExpanded
      ? tl.current.tweenFromTo("menuExpand-start", "menuExpand-end")
      : tl.current.pause("menuExpand-start")
  }, [state.menuExpanded])
}
