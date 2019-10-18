import React, { useEffect } from "react"
import { useHistory, useLocation, withRouter } from "react-router-dom"

const PreserveSroll = props => {
  const history = useHistory()
  const location = useLocation()
  const scrollPositions = {}

  // console.log("history", history)
  // console.log("location", location)
  // console.log("props", props)

  useEffect(() => {
    const newPath = location.pathname

    if (history.action === "POP") {
      // if back button pressed
      const pos = scrollPositions[newPath]
      console.log("POS", pos)
      if (pos) {
        window.scrollTo(pos[0], pos[1])
      }
    } else {
      // if navigating without back button
      scrollPositions[location.pathname] = [window.scrollX, window.scrollY]
    }

    return () => {
      // console.log("component UMOUNT")
    }
  }, [location.pathname])

  return <>{props.children}</>
}
export default withRouter(PreserveSroll)

// store path => store position
