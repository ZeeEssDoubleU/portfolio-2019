import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// import icons (from icons folder - local file system)
// now using svg inline directly with gatsby-plugin-react-svg plugin
import Logo from "../../assets/icons/logo.svg"
import LogoLanding from "../../assets/icons/logo-landing.svg"
import LogoNav from "../../assets/icons/logo-nav.svg"
import DownArrow from "../../assets/icons/downArrow.svg"
import DownArrowA from "../../assets/icons/downArrow-anim"
import Stripes from "../../assets/other/stripes.svg"
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
    case "logo":
      return <Logo {...props} />
    case "logo-landing":
      return <LogoLanding {...props} />
    case "logo-nav":
      return <LogoNav {...props} />
    case "down-arrow":
      return <DownArrow {...props} />
    case "down-arrow-a":
      return <DownArrowA {...props} />
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
