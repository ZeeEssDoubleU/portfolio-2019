// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { scrollToAnim } from "../utils/scrollToAnim"
// import components
import Icon from "./Icons/Icon"
// import styles
import { Section, Layout } from "../styles/global"

// styled components
const StyledSection = styled(Section)`
  height: 100vh;
  width: 100vw;
`
const StyledLayout = styled(Layout)`
  max-width: none;
  justify-items: center;
  align-content: center;
  background: black bottom/cover url(${props => props.bgSvgUrl});
  /* svg icons down in component */
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    will-change: transform !important;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: black bottom/cover url(${props => props.bgSvgUrl});
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
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
  const data = useStaticQuery(graphql`
    # query for background image using gatsby-source-contentful
    {
      contentfulAsset(title: { eq: "stripes" }) {
        file {
          url
        }
      }
    }
  `)
  return (
    <StyledSection id="landing">
      <StyledLayout bgSvgUrl={data.contentfulAsset.file.url}>
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
      </StyledLayout>
    </StyledSection>
  )
}

export default Landing
