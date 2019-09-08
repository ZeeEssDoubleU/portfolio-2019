import React, { useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
// import components
import Icon from "./Icons/Icon"
import { NavContext } from "../pages"

// styled components
const Section = styled.section`
  height: 100vh;
  width: 100vw;
`
const Layout = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  justify-items: center;
  align-items: center;
  align-content: center;
  /* svg icons down in component */
  @media (min-width: ${props => props.theme.desktop}) {
    position: fixed;
    background: ${props => props.theme.appBgDarkGrad};
  }
  .logo {
    width: calc(0.7 * 100vw);
    max-width: calc(0.4 * 100vh);
    max-height: 868px;
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
  }, [inView, toggleNav, entry])

  // // debug
  // if (entry) console.log("Landing in view?", inView)

  return (
    <Section ref={ref}>
      <Layout>
        {/* TODO: Fade in icon and name */}
        <Icon name="logo-landing" className="logo" />
        <a href="#about">
          <Icon name="arrow-down" className="arrow-down" />
        </a>
      </Layout>
    </Section>
  )
}

export default Landing
