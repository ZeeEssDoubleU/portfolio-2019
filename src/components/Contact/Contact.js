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
import { Section, Layout, Header, Body } from "../../styles/global"

// styled components
const StyledSection = styled(Section)`
  background: bottom/cover url(${props => props.bgSvgUrl});
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    background: none;
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
      datoCmsAsset(title: { eq: "stripes background" }) {
        url
      }
    }
  `)

  return (
    <StyledSection
      tabIndex={-1}
      id="contact"
      bgSvgUrl={data.datoCmsAsset.url}
    >
      <Layout>
        <Header>get in touch</Header>
        <Body>
          <ContactForm />
        </Body>
        <ButtonOrLink button icon="check" type="submit" form="contact-form">
          submit
        </ButtonOrLink>
        <Social />
        <Copyright>
          Zachary Williams <Icon name="copyright" className="icon-copyright" />{" "}
          Copyright
          {" " + currentDate}
        </Copyright>
      </Layout>
    </StyledSection>
  )
}

export default Contact
