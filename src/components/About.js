// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { scrollToAnim } from "../utils/scrollToAnim"

// import components
import ButtonOrLink from "./Layout/ButtonOrLink"
import Icon from "../components/Icons/Icon"
// import styles
import { Section, Layout, Header, Body } from "../styles/global"

// styled components
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
  const data = useStaticQuery(graphql`
    # query for background image using gatsby-source-contentful
    {
      datoCmsAsset(title: { eq: "selfie dark filter" }) {
        fluid(maxWidth: 1400) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  `)

  return (
    <Section id="about">
      <Layout>
        <Header>about</Header>
        <Bio>
          <Selfie
            title="Selfie"
            fluid={{ ...data.datoCmsAsset.fluid }}
            alt="selfie image for about section"
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
              <Highlight>front-end developer</Highlight> based in New York CIty.
              {"  "}I enjoy creating clean, intuitive web interfaces that
              provide a satisfying user experience.
            </p>
            <p>
              If you’re in need of a website, mobile or web application, or just
              want to say what’s up, give me a shout!
            </p>
          </div>
        </Bio>
        <ButtonOrLink
          link
          icon="email"
          href="#contact"
          onClick={e => {
            e.preventDefault()
            // only run on mobile mode
            scrollToAnim(null, "#contact")
            setTimeout(() => document.querySelector("#name").focus(), 700)
            // only run on tablet or greater mode
            // showSection("contact")
            // setTimeout(() => document.querySelector("#name").focus(), 1000)
          }}
        >
          contact me
        </ButtonOrLink>
      </Layout>
    </Section>
  )
}

export default About
