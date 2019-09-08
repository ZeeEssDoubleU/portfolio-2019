import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import components
import SidePanel from "./Layout/SidePanel"

// styled components
const Section = styled.section`
  position: relative;
  z-index: 10;
  display: grid;
  /* TODO: Make responsive.  Remove max-width */
  max-width: 1400px;
  padding: 30px 0;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: ${props => props.theme.desktop}) {
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.95);
    /* backdrop-filter: blur(10px); */
    border-radius: 10px;
  }
`
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
      <SidePanel header>about</SidePanel>
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
      <SidePanel link icon="email" href="#contact">
        contact me
      </SidePanel>
    </Section>
  )
}

export default About
