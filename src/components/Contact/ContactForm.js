import React from "react"
import styled, { withTheme } from "styled-components"

const Grid = styled.form`
  display: grid;
  grid-row-gap: 20px;
  margin: 30px 24px;
  div {
    & > * {
      width: 100%;
      background: linear-gradient(
        to left,
        rgba(${props => props.theme.appGreenPartial}, 0.2),
        rgba(${props => props.theme.appBluePartial}, 0.2)
      );
      color: ${props => props.theme.appGreen};
      font-size: 16px;
      font-family: inherit;
      padding: 12px 24px;
      border-style: none;
      border-radius: 5px;
      box-shadow: 4px 6px 6px 0 rgba(0, 0, 0, 0.5);
      transition: transform 0.2s;
      &::placeholder {
        color: ${props => props.theme.appGreen};
        opacity: 0.6;
      }
      &:focus {
        outline: none;
        transform: scale(1.02);
        box-shadow: 0 0 0 1px rgba(${props => props.theme.appGreenPartial}, 0.5);
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
      netlify
      netlify-honeypot="honeypot-field"
      name="portfolio contact form"
    >
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

export default withTheme(ContactForm)
