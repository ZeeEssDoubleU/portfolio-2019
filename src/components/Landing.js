import React from "react"
import styled from "styled-components"
import { scrollToAnim } from "../utils/scrollToAnim"

// import components
import Icon from "./Icons/Icon"

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
  align-content: center;
  /* svg icons down in component */
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    will-change: transform !important;
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
    bottom: 20px;
    left: 50vw;
    transform: translateX(-50%);
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(-50%) scale(1.1);
    }
  }
`

const Landing = props => {
  return (
    <Section id="landing">
      <Layout>
        <Icon name="logo-landing" className="logo" />
        <a
          href="#about"
          onClick={e => {
            e.preventDefault()
            if (window.scrollY >= window.innerHeight) return
            scrollToAnim(null, "#about")
          }}
        >
          <Icon name="arrow-down" className="arrow-down" />
        </a>
      </Layout>
    </Section>
  )
}

export default Landing
