// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import components
import InternalLink from "./elements/InternalLink"
import StyledButton from "./elements/StyledButton"
import Icon from "./Icons/Icon"
// import styles
import { Section, Layout, Header, Body, DesktopWrapper } from "../styles/global"

// styled components
const StyledLayout = styled(Layout)`
  .link-contact-me {
    justify-self: end;
  }
`
const Bio = styled(Body)`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  justify-items: center;
  color: white;
  font-size: 15px;
  line-height: 1.8;
  white-space: pre-wrap;
  .bio-name {
    font-size: 18px;
    font-weight: 500;
  }
  p {
    margin: 12px 0;
  }
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    align-items: center;
  }
`
const Selfie = styled(Img)`
  /* stretch image across background */
  height: 240px;
  width: 100%;
  /* creates fade to black effect on background image */
  mask-image: linear-gradient(
    to bottom,
    transparent -10%,
    black,
    transparent 110%
  );
  img {
    object-position: 80% 50% !important;
  }
  /* creates fade to black effect on background image */
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    height: 240px;
    width: 240px;
    mask-image: radial-gradient(black 30%, transparent 100%);
    img {
      object-position: 100% 50% !important;
    }
    border-radius: 50%;
    margin-right: 36px;
  }
`
const Highlight = styled.span`
  color: #50e3c2;
`

const About = props => {
  const query = graphql`
    {
      datoCmsAsset(path: { regex: "/selfie-tinted.png/" }) {
        fluid(maxWidth: 1400) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  `
  const { datoCmsAsset } = useStaticQuery(query)

  return (
    <Section id="about">
      <DesktopWrapper>
        <StyledLayout>
          <Header>about</Header>
          <Bio>
            <Selfie
              title="selfie"
              fluid={{ ...datoCmsAsset.fluid }}
              alt="selfie photo of developer with dark filter"
            />
            <div>
              <p className="bio-name">Zachary Williams</p>
              <p>
                <Highlight>
                  <Icon name="map-marker" />
                  {"  "}New York, NY, USA
                </Highlight>
              </p>
              <p>
                My name is Zachary Williams, or Zak for short.{"  "}I’m a{" "}
                <Highlight>front-end developer</Highlight> based in New York
                CIty.
                {"  "}I enjoy creating clean, intuitive web interfaces that
                provide a satisfying user experience.
              </p>
              <p>
                If you’re in need of a website, mobile or web application, or
                just want to say what’s up, give me a shout!
              </p>
            </div>
          </Bio>
          <InternalLink href="contact" className="link-contact-me">
            <StyledButton icon="email">contact me</StyledButton>
          </InternalLink>
        </StyledLayout>
      </DesktopWrapper>
    </Section>
  )
}

export default React.memo(About)
