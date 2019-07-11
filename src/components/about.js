import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// import components
import SidePanel from "./SidePanel"
// import elements
import { Action } from "../elements/Action"

// styled components
const AboutSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
`
const BgImage = styled(BackgroundImage)`
  height: 60vh;
  background-position: 80% 100%;
  background-size: auto 130%;
  mask-image: linear-gradient(to bottom, black, transparent);
`
const AboutGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: start;
  align-content: start;
  padding: 30px 0;
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
        <SidePanel
          columns="2"
          fontFam="American Typewriter"
          fontSize="12px"
          justifySelf="start"
          background
        >
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
        <SidePanel justifySelf="end" background>
          <Action>contact me</Action>
        </SidePanel>
      </AboutGrid>
    </AboutSection>
  )
}

export default About
