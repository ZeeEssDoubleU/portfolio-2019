import React from "react"
import styled, { withTheme } from "styled-components"

// import components
import SidePanel from "../Layout/SidePanel"
import Icon from "../Layout/Icon"
import ContactForm from "./ContactForm"
import Social from "./Social"

// styled components
const ContactSection = styled.section`
  position: relative;
  overflow-y: hidden;
  .stripes {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`
const ContactGrid = styled.div`
  display: grid;
  position: relative;
  z-index: 2;
  padding: 30px 0;
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
  return (
    <ContactSection tabIndex="-1">
      <Icon name="stripes" className="stripes" />
      <ContactGrid>
        <SidePanel header>get in touch</SidePanel>
        <ContactForm id="contact-form" />
        <SidePanel button icon="check" type="submit" form="contact-form">
          submit
        </SidePanel>
        <Social />
        <Copyright>
          Constructed by me <Icon name="copyright" className="icon-copyright" />{" "}
          {currentDate}
        </Copyright>
      </ContactGrid>
    </ContactSection>
  )
}

export default withTheme(Contact)
