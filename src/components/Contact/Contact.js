// @ts-nocheck
import React from "react"
import styled from "styled-components"

// import components
import ButtonOrLink from "../Layout/ButtonOrLink"
import Icon from "../Icons/Icon"
import ContactForm from "./ContactForm"
import Social from "./Social"
// import styles
import { Section, Layout, Header, Body } from "../../styles/global"

// styled components
const StyledLayout = styled(Layout)`
  background: none;
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
    <Section tabIndex={-1} id="contact">
      <StyledLayout>
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
      </StyledLayout>
    </Section>
  )
}

export default Contact
