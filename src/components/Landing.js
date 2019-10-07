// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { scrollToAnim } from "../utils/scrollToAnim"
// import components
import Icon from "./Icons/Icon"
// import styles
import { Section, Layout, DesktopWrapper } from "../styles/global"

// styled components
const StyledSection = styled(Section)`
  height: 100vh;
`
const StyledDesktopWrapper = styled(DesktopWrapper)`
  height: 100%;
`
const StyledLayout = styled(Layout)`
  max-width: none;
  justify-items: center;
  align-content: center;
  background: black bottom/cover url(${props => props.bgSvgUrl});
  /* svg icons down in component */
  .logo {
    width: calc(0.7 * 100vw);
    max-width: calc(0.4 * 100vh);
    max-height: 868px;
  }
  .arrow-down {
    position: absolute;
    width: 30px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: transform 0.2s !important;
    &:hover {
      transform: translateX(-50%) scale(1.1);
    }
  }
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    will-change: transform !important;
    position: fixed;
    height: 100%;
    width: 100%;
    background: black bottom/cover url(${props => props.bgSvgUrl});
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
  }
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    width: 90%;
  }
`

const Landing = (props, ref) => {
  const query = graphql`
    {
      datoCmsAsset(path: { regex: "/stripes.svg/" }) {
        url
      }
    }
  `
  const { datoCmsAsset } = useStaticQuery(query)

  return (
    // ref forwarded from parent
    <StyledSection id="landing">
      <StyledDesktopWrapper>
        <StyledLayout bgSvgUrl={datoCmsAsset.url}>
          <Icon name="logo-landing" className="logo" />
          <a
            href="#about"
            aria-label="scroll to about section"
            onClick={e => {
              e.preventDefault()
              if (window.scrollY >= window.innerHeight) return
              scrollToAnim(null, "#about")
            }}
          >
            <Icon name="arrow-down" className="arrow-down" />
          </a>
        </StyledLayout>
      </StyledDesktopWrapper>
    </StyledSection>
  )
}

export default React.memo(Landing)
