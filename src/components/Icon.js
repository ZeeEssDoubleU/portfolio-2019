import React from "react"

// import icons (from icons folder)
import Logo from "../assets/icons/logo"
import DownArrow from "../assets/icons/downArrow"
import Stripes from "../assets/other/stripes.js"

const Icon = props => {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />
    case "down arrow":
      return <DownArrow {...props} />
    case "stripes":
      return <Stripes {...props} />
    default:
      return null
  }
}

export default Icon
