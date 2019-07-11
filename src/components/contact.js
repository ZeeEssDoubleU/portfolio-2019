import React from "react"
import styled from "styled-components"

// import components
import SidePanel from "../components/SidePanel"
import Icon from "./Icon"
// import elements
import { SectionHeader } from "../elements/SectionHeader"
import { Action } from "../elements/Action"

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
  form {
    display: grid;
    grid-row-gap: 20px;
    margin: 30px 34px;
    & > * {
      position: relative;
      background: linear-gradient(
        to left,
        rgba(80, 227, 194, 0.2) 0%,
        rgba(65, 94, 250, 0.2) 100%
      );
      color: #50e3c2;
      font-size: 12px;
      padding: 12px;
      border-style: none;
      border-radius: 5px;
      box-shadow: 4px 6px 6px 0 rgba(0, 0, 0, 0.5);
      &::placeholder {
        color: rgba(80, 227, 194, 0.6);
        font-size: 12px;
      }
    }
    textarea {
      height: 120px;
      resize: none;
    }
  }
`

const Contact = () => {
  const submitForm = event => {
    document.querySelector(".contact-form").submit()
  }

  return (
    <ContactSection>
      <Icon name="stripes" className="stripes" />
      <ContactGrid>
        <SidePanel justifySelf="start" background>
          <SectionHeader>get in touch</SectionHeader>
        </SidePanel>
        <form
          id="contact-form"
          onSubmit={event => {
            event.preventDefault()
            console.log("Email sent!")
          }}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            spellCheck={true}
          />
        </form>
        <SidePanel justifySelf="end" background>
          <Action type="submit" form="contact-form">
            submit
          </Action>
        </SidePanel>
      </ContactGrid>
    </ContactSection>
  )
}

export default Contact
