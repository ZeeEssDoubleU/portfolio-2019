import { TweenLite, ScrollToPlugin } from "gsap/all"

// reference plugins to prevent tree shaking
// (optimization that drops unreferenced modules)
const plugins = [ScrollToPlugin]

export const scrollToAnim = (menuExpanded, destination) => {
  const duration = menuExpanded ? 0 : 0.7

  const offsetY = isNaN(destination) ? 80 : 0

  // //   debug
  //   console.log("menuExpanded", menuExpanded)
  //   console.log("destination", destination)
  //   console.log("target", target)

  // required because framer-motion creates new scrollable area (layout.js)
  const destinationFrame = document.querySelector("#page-transition")
  // checks if destinationFrame available.  If not, use window
  TweenLite.to(destinationFrame || window, duration, {
    scrollTo: { y: destination, offsetY, autoKill: false },
  })
}
