// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// import components
import Icon from "./Icons/Icon"
import { InternalLink } from "./elements/CustomLink"
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
    width: 70%;
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
    transition: transform 0.2s;
    &:hover {
      transform: translateX(-50%) scale(1.1);
    }
  }
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    will-change: transform;
    position: fixed;
    height: 100%;
    width: 100%;
    background: black bottom/cover url(${props => props.bgSvgUrl});
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    width: 90%;
  }
`

const Landing = props => {
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
          <InternalLink
            href="about"
            cancelParam={() => window.scrollY <= window.innerHeight}
          >
            <Icon name="arrow-down" className="arrow-down" />
          </InternalLink>
        </StyledLayout>
      </StyledDesktopWrapper>
    </StyledSection>
  )
}

export default React.memo(Landing)
