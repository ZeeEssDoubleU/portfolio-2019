import React from "react"

// import icons (from icons folder)
import Logo from "../../assets/icons/logo"
import LogoLanding from "../../assets/icons/logo-landing"
import LogoNav from "../../assets/icons/logo-nav"
import DownArrow from "../../assets/icons/downArrow"
import Stripes from "../../assets/other/stripes.js"
// import react-icons
import {
  FaReact,
  FaCss3,
  FaNode,
  FaSass,
  FaGithub,
  FaRegEnvelope,
  FaLinkedinIn,
  FaDribbble,
  FaTwitter,
  FaRegCopyright,
  FaPlus,
  FaCheck,
} from "react-icons/fa"
import {
  DiReact,
  DiMongodb,
  DiNodejs,
  DiSass,
  DiCss3Full,
  DiHtml5,
} from "react-icons/di"

// TODO
// gatsby
// graphQL
// netlify
// mongoDB
// express
// apollo
// styled-components

const Icon = props => {
  switch (props.name) {
    case "logo-landing":
      return <LogoLanding {...props} />
    case "logo-nav":
      return <LogoNav {...props} />
    case "down arrow":
      return <DownArrow {...props} />
    case "stripes":
      return <Stripes {...props} />
    case "github":
      return <FaGithub {...props} />
    case "linkedin":
      return <FaLinkedinIn {...props} />
    case "dribbble":
      return <FaDribbble {...props} />
    case "twitter":
      return <FaTwitter {...props} />
    case "email":
      return <FaRegEnvelope {...props} />
    case "copyright":
      return <FaRegCopyright {...props} />
    case "plus":
      return <FaPlus {...props} />
    case "check":
      return <FaCheck {...props} />
    default:
      return null
  }
}

export default Icon
