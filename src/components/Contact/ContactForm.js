import React from "react"
import styled from "styled-components"

const Grid = styled.form`
  display: grid;
  grid-row-gap: 20px;
  margin: 30px 24px;
  .form-label {
    position: absolute;
    top: 0;
    left: -500vh;
  }
  .form-field {
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
    transition: transform 0.2s, box-shadow 0.2s;
    &.form-textarea {
      height: 120px;
      resize: none;
    }
    &:required {
      box-shadow: none;
    }
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
      {/* hidden honeypot field meant to capture bots */}
      <input
        className="form-field"
        name="honeypot-field"
        style={{ display: "none" }}
      />
      <div className="form-div">
        <label className="form-label" for="name">
          Name
        </label>
        <input
          className="form-field"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
      </div>
      <div className="form-div">
        <label className="form-label" for="email">
          Email
        </label>
        <input
          className="form-field"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-div">
        <label className="form-label" for="subject">
          Subject
        </label>
        <input
          className="form-field"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="form-div">
        <label className="form-label" for="message">
          Message
        </label>
        <textarea
          className="form-field form-textarea"
          name="message"
          id="message"
          placeholder="Message"
          required
          spellCheck={true}
          // TODO: May need to revise in future in case Grammarly needed
          data-gramm_editor="false"
        />
      </div>
    </Grid>
  )
}

export default ContactForm
