// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// import components
import StyledButton from "../elements/StyledButton"
import Icon from "../Icons/Icon"
import ContactForm from "./ContactForm"
import Social from "../elements/Social"
// import styles
import {
  Section,
  Layout,
  Header,
  Body,
  DesktopWrapper,
} from "../../styles/elements"

// ***COMPONENT***
const Contact = props => {
  const query = graphql`
    {
      datoCmsAsset(path: { regex: "/stripes.svg/" }) {
        url
      }
    }
  `
  const { datoCmsAsset } = useStaticQuery(query)

  const currentDate = new Date().getFullYear()

  return (
    <StyledSection tabIndex={-1} id="contact" bgSvgUrl={datoCmsAsset.url}>
      <DesktopWrapper>
        <Layout>
          <Header>get in touch</Header>
          <Body>
            <ContactForm />
          </Body>
          <StyledButton
            icon="check"
            type="submit"
            form="contact-form"
            aria-label="submit contact form"
            justifySelf="end"
          >
            submit
          </StyledButton>
          <Social />
          <Copyright>
            Zachary Williams{" "}
            <Icon name="copyright" className="icon-copyright" /> Copyright
            {" " + currentDate}
          </Copyright>
        </Layout>
      </DesktopWrapper>
    </StyledSection>
  )
}
export default React.memo(Contact)

// ***STYLES***
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
