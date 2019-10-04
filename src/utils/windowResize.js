import { useEffect } from "react"

import { windowResize } from "../store/useStore"
export const useWindowResize = (dispatch, themeContext) => {
  useEffect(() => {
    // get window size and add event listener on component mount
    windowResize(dispatch, themeContext)
    window.addEventListener("resize", () => {
      windowResize(dispatch, themeContext)
    })
    // remove event listener on component unmount
    return () =>
      window.removeEventListener("resize", () => {
        windowResize(dispatch, themeContext)
      })
  }, [themeContext, dispatch])
}
