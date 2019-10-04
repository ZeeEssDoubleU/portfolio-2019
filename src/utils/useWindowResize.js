import { useLayoutEffect } from "react"
import { onWindowResize, onToggleMenu } from "../store/useStore"

export const useWindowResize = (dispatch, themeContext) => {
  const resizeEffect = () => {
    onWindowResize(dispatch, themeContext)
    // close mobile menu when on tablet or bigger
    if (window.innerWidth >= themeContext.tablet) {
      onToggleMenu(dispatch, false)
    }
  }

  useLayoutEffect(() => {
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
  }, [themeContext, dispatch])
}
