import React from "react"

// import icons (from icons folder - local file system)
import Logo from "./logo"
import LogoLanding from "./logo-landing"
import LogoNav from "./logo-nav"
import ArrowDown from "./arrow-down"
import ArrowDownA from "./arrow-down-anim"
import Stripes from "./stripes"
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
  FaEllipsisH,
} from "react-icons/fa"
import {
  DiReact,
  DiMongodb,
  DiNodejs,
  DiSass,
  DiCss3Full,
  DiHtml5,
} from "react-icons/di"

// TODO: Find the icons for the following
// gatsby
// graphQL
// netlify
// mongoDB
// express
// apollo
// styled-components

const Icon = props => {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />
    case "logo-landing":
      return <LogoLanding {...props} />
    case "logo-nav":
      return <LogoNav {...props} />
    case "arrow-down":
      return <ArrowDown {...props} />
    case "arrow-down-a":
      return <ArrowDownA {...props} />
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
    case "ellipsis":
      return <FaEllipsisH {...props} />
    default:
      return null
  }
}

export default Icon
