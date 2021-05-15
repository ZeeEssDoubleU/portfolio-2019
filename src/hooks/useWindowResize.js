import { useEffect } from "react"
import { onWindowResize } from "../store/useStore"

// ************
// hook
// ************

export const useWindowResize = (dispatch, theme) => {
	useEffect(() => {
		// get window size and add event listener on component mount
		onWindowResize(dispatch, theme)
		window.addEventListener("resize", () => {
			onWindowResize(dispatch, theme)
		})
		// remove event listener on component unmount
		return () =>
			window.removeEventListener("resize", () => {
				onWindowResize(dispatch, theme)
			})
	}, [theme, dispatch])
}
