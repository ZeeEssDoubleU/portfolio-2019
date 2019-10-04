import { useLayoutEffect, useCallback } from "react"
import { onWindowResize, onToggleMenu } from "../store/useStore"
export const useWindowResize = (
  dispatch,
  menuExpanded,
  isMobile,
  themeContext
) => {
  const resizeEffect = useCallback(() => {
    // updates window state
    onWindowResize(dispatch, themeContext)
    // shrinks mobile menu if expanded window to tablet or larger
    if (menuExpanded && !isMobile) {
      onToggleMenu(dispatch, false)
    }
  }, [dispatch, isMobile, menuExpanded, themeContext])

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
  }, [themeContext, dispatch, resizeEffect])
}
