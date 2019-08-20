import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import components
import SidePanel from "./Layout/SidePanel"

// styled components
const AboutSection = styled.section`
  position: relative;
`
const BgImage = styled(Img)`
  /* stretch image across background */
  position: absolute !important;
  top: 0;
  bottom: 0;
  width: 100%;
  /* creates fade to black effect on background image */
  mask-image: linear-gradient(to bottom, black, transparent);
  img {
    object-position: 80% 50% !important;
  }
`
const AboutGrid = styled.div`
  display: grid;
  position: relative;
  padding: 30px 0;
  z-index: 1;
`
const AboutBody = styled.div`
  display: grid;
  align-content: center;
  color: white;
  font-family: American Typewriter;
  font-size: 12px;
  margin: 30px 34px;
  line-height: 2.5;
  white-space: pre-wrap;
`
const Highlight = styled.span`
  color: #50e3c2;
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/selfie-tinted.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <AboutSection>
      <BgImage
        title="Selfie"
        fluid={{ ...data.file.childImageSharp.fluid }}
        alt="About Section Selfie Background Image"
      />
      <AboutGrid>
        <SidePanel columns="2" fontFam="American Typewriter" fontSize="12px">
          <Highlight>Name:</Highlight>
          <span>Zachary Williams</span>
          <Highlight>Profession:</Highlight>
          <span>Web Developer</span>
          <Highlight>Location:</Highlight>
          <span>New York City</span>
        </SidePanel>
        <AboutBody>
          <p>
            My name is Zachary Williams, or Zak for short.{"  "}I’m a{" "}
            <Highlight>front-end developer</Highlight> based in New York CIty.
            {"  "}I enjoy creating clean, intuitive web interfaces that provide
            a satisfying user experience.
          </p>
          <p>
            If you’re in need of a website, mobile or web application, or just
            want to say what’s up, give me a shout!
          </p>
        </AboutBody>
        <SidePanel button icon="email">
          contact me
        </SidePanel>
      </AboutGrid>
    </AboutSection>
  )
}

export default About
