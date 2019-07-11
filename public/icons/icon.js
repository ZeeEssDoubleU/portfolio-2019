import React from "react"

// import icons
import Logo from "./logo"
import DownArrow from "./downArrow"

const Icon = props => {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />
    case "down arrow":
      return <DownArrow {...props} />
    default:
      return null
  }
}

export default Icon
