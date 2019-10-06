import { useEffect } from "react"
import { onWindowResize } from "../store/useStore"
export const useWindowResize = (dispatch, themeContext) => {
  useEffect(() => {
    // get window size and add event listener on component mount
    onWindowResize(dispatch, themeContext)
    window.addEventListener("resize", () => {
      onWindowResize(dispatch, themeContext)
    })
    // remove event listener on component unmount
    return () =>
      window.removeEventListener("resize", () => {
        onWindowResize(dispatch, themeContext)
      })
  }, [themeContext, dispatch])
}
