import React, { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
// import components
import Icon from "./Icons/Icon"
import { NavContext } from "../pages"

// styled components
const Section = styled.section`
  display: grid;
  height: 100vh;
  justify-items: center;
  align-items: center;
  align-content: center;
  background: ${props => props.theme.appBgColor};
  /* svg icons down in component */
  .logo {
    width: calc(0.7 * 100vw);
    max-width: calc(0.3 * 100vh);
  }
  .arrow-down {
    position: absolute;
    width: 30px;
    top: calc(100vh - 40px);
    left: calc(50vw - 30px / 2);
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const Landing = props => {
  // react-intersection-observer
  const [ref, inView, entry] = useInView({
    // set margin equal to height of nav bar
    rootMargin: "-80px 0px 0px 0px",
  })

  // toggleNav function of NavContext
  const toggleNav = useContext(NavContext).toggleNav
  useEffect(() => {
    if (entry) {
      toggleNav(inView, entry)
    }
  }, [inView])

  // debug
  if (entry) console.log("Landing in view?", inView)

  return (
    <Section ref={ref}>
      <Icon name="logo-landing" className="logo" />
      <a href="#about">
        <Icon name="arrow-down" className="arrow-down" />
      </a>
    </Section>
  )
}

export default Landing
