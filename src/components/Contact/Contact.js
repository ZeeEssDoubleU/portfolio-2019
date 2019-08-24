import React from "react"
import styled, { withTheme } from "styled-components"

// import components
import SidePanel from "../Layout/SidePanel"
import Icon from "../Layout/Icon"
import ContactForm from "./ContactForm"
import Social from "./Social"

// styled components
const Section = styled.section`
  position: relative;
  overflow-y: hidden;
  .stripes {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`
const Layout = styled.div`
  display: grid;
  position: relative;
  z-index: 2;
  padding: 30px 0;
  /* TODO: Make responsive.  Remove max-width */
  max-width: 1400px;
  margin: 0 auto;
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
    <Section tabIndex="-1" id="contact">
      <Icon name="stripes" className="stripes" />
      <Layout>
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
      </Layout>
    </Section>
  )
}

export default withTheme(Contact)
