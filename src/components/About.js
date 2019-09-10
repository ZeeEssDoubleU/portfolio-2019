import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import components
import ButtonOrLink from "./Layout/ButtonOrLink"
// import styles
import { Section, Header } from "../styles/global"

// styled components
const BgImage = styled(Img)`
  /* stretch image across background */
  position: absolute !important;
  height: 100%;
  width: 100%;
  z-index: -1;
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
  /* TODO: Adjust bgImage on desktops */
  /* @media (min-width: ${props => props.theme.desktop + 'px'}) {
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.8);
    border-radius: 10px;
  } */
`
const Body = styled.div`
  display: grid;
  align-content: center;
  color: white;
  font-family: American Typewriter;
  font-size: 12px;
  margin: 30px 24px;
  line-height: 2.5;
  white-space: pre-wrap;
`
const Highlight = styled.span`
  color: #50e3c2;
`

const About = props => {
  const data = useStaticQuery(graphql`
    # query for background image using gatsby-source-contentful
    {
      contentfulAsset(title: { eq: "selfie-tinted" }) {
        fluid(maxWidth: 1400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  `)

  return (
    <Section id="about">
      <BgImage
        title="Selfie"
        fluid={{ ...data.contentfulAsset.fluid }}
        alt="About Section Selfie Background Image"
      />
      <Header>about</Header>
      <Body>
        <p>
          My name is Zachary Williams, or Zak for short.{"  "}I’m a{" "}
          <Highlight>front-end developer</Highlight> based in New York CIty.
          {"  "}I enjoy creating clean, intuitive web interfaces that provide a
          satisfying user experience.
        </p>
        <p>
          If you’re in need of a website, mobile or web application, or just
          want to say what’s up, give me a shout!
        </p>
      </Body>
      <ButtonOrLink link icon="email" href="#contact">
        contact me
      </ButtonOrLink>
    </Section>
  )
}

export default About
