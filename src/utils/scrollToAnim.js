import { TweenLite, ScrollToPlugin, Power2 } from "gsap/all"

export const scrollToAnim = (menuExpanded, destination) => {
  const duration = menuExpanded ? 0 : 0.7

  const offsetY = isNaN(destination) ? 80 : 0

  // //   debug
  //   console.log("menuExpanded", menuExpanded)
  //   console.log("destination", destination)
  //   console.log("target", target)

  TweenLite.to(window, duration, {
    scrollTo: { y: destination, offsetY },
    ease: Power2.easeOut,
  })
}
