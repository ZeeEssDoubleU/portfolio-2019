import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

// import components
import SidePanel from "../Layout/SidePanel"
import Icon from "../Icons/Icon"
import ContactForm from "./ContactForm"
import Social from "./Social"

// styled components
const Section = styled.section`
  position: relative;
  z-index: 10;
  display: grid;
  /* TODO: Make responsive.  Remove max-width */
  max-width: 1400px;
  background: bottom/cover url(${props => props.bgSvgUrl});
  padding: 30px 0;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: ${props => props.theme.desktop}) {
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.8) bottom/cover
      url(${props => props.bgSvgUrl});
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }
`
const Copyright = styled.p`
  display: grid;
  grid-template-columns: auto auto auto;
  color: ${props => props.theme.appGreen};
  padding: 0 10px;
  margin: 10px auto;
  align-items: center;
  grid-gap: 4px;
  .icon-copyright {
    height: 18px;
    width: 18px;
  }
`

const Contact = props => {
  const currentDate = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    # query for background image using gatsby-source-contentful
    {
      file(name: { eq: "stripes" }) {
        url
      }
    }
  `)

  return (
    <Section tabIndex={-1} id="contact" bgSvgUrl={data.file.url}>
      <SidePanel header>get in touch</SidePanel>
      <ContactForm id="contact-form" />
      <SidePanel button icon="check" type="submit" form="contact-form">
        submit
      </SidePanel>
      <Social />
      <Copyright>
        Zachary Williams <Icon name="copyright" className="icon-copyright" />{" "}
        Copyright
        {" " + currentDate}
      </Copyright>
    </Section>
  )
}

export default Contact
