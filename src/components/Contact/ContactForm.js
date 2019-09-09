import React from "react"
import styled from "styled-components"

const Grid = styled.form`
  display: grid;
  grid-row-gap: 20px;
  margin: 30px 24px;
  div {
    & > * {
      width: 100%;
      background: linear-gradient(
        to left,
        hsla(${props => props.theme.appGreenPartial}, 0.2),
        hsla(${props => props.theme.appBluePartial}, 0.2)
      );
      color: ${props => props.theme.appGreen};
      font-size: 16px;
      font-family: inherit;
      padding: 12px 24px;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(2px 4px 6px black);
      transition: transform 0.2s;
      &::placeholder {
        color: ${props => props.theme.appGreen};
        opacity: 0.6;
      }
      &:focus {
        transform: scale(1.02);
        box-shadow: 0 0 0 1px hsla(${props => props.theme.appGreenPartial}, 0.5);
        &::placeholder {
          opacity: 0;
        }
      }
    }
    textarea {
      height: 120px;
      resize: none;
    }
  }
`

const ContactForm = props => {
  return (
    <Grid
      id={props.id}
      method="POST"
      data-netlify="true"
      netlify-honeypot="honeypot-field"
      name="portfolio-contact-form"
    >
      {/* input required by netlify for SSGs like gatsby */}
      <input type="hidden" name="form-name" value="portfolio-contact-form" />
      {/* TODO: make form elements have focus outline on tab only */}
      <div style={{ display: "none" }}>
        {/* hidden honeypot field meant to capture bots */}
        <input name="honeypot-field" />
      </div>
      <div>
        <input type="text" name="name" id="name" placeholder="Name" required />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
          spellCheck={true}
        />
      </div>
    </Grid>
  )
}

export default ContactForm
