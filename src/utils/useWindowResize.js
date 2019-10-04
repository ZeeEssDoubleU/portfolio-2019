import { useEffect } from "react"
import { onWindowResize, onToggleMenu } from "../store/useStore"
export const useWindowResize = (dispatch, menuExpanded, themeContext) =>
  useEffect(() => {
    const resizeEffect = () => {
      // updates windowSize state
      onWindowResize(dispatch, themeContext)
      // shrinks mobile menu if window expanded bigger than tablet
      if (menuExpanded && window.innerWidth >= themeContext.tablet) {
        onToggleMenu(dispatch, false)
      }
    }

    // get window size and add event listener on component mount
    onWindowResize(dispatch, themeContext)
    window.addEventListener("resize", () => {
      resizeEffect()
    })
    // remove event listener on component unmount
    return () =>
      window.removeEventListener("resize", () => {
        resizeEffect()
      })
  }, [themeContext, dispatch, menuExpanded])
