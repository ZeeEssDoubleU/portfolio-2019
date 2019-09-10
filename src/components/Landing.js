import React from "react"
import styled from "styled-components"

// import components
import Icon from "./Icons/Icon"

// styled components
const Section = styled.section`
  height: 100vh;
  width: 100vw;
`
const Layout = styled.div`
  will-change: transform !important;
  display: grid;
  height: 100vh;
  width: 100vw;
  justify-items: center;
  align-content: center;
  /* svg icons down in component */
  @media (min-width: ${props => props.theme.desktop + "px"}) {
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
  return (
    <Section id="landing">
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
