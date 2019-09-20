// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

// import components
import ButtonOrLink from "../Layout/ButtonOrLink"
import Icon from "../Icons/Icon"
import ContactForm from "./ContactForm"
import Social from "./Social"
// import styles
import { Section, Header } from "../../styles/global"

// styled components
const StyledSection = styled(Section)`
  background: bottom/cover url(${props => props.bgSvgUrl});
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.9) bottom/cover
      url(${props => props.bgSvgUrl});
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
      contentfulAsset(title: { eq: "stripes" }) {
        file {
          url
        }
      }
    }
  `)

  return (
    <StyledSection
      tabIndex={-1}
      id="contact"
      bgSvgUrl={data.contentfulAsset.file.url}
    >
      <Header>get in touch</Header>
      <ContactForm />
      <ButtonOrLink button icon="check" type="submit" form="contact-form">
        submit
      </ButtonOrLink>
      <Social />
      <Copyright>
        Zachary Williams <Icon name="copyright" className="icon-copyright" />{" "}
        Copyright
        {" " + currentDate}
      </Copyright>
    </StyledSection>
  )
}

export default Contact
