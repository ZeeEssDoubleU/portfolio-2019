import { useRef } from "react"
import styled from "styled-components"
// import utils
// // function pushes contact data for Firebase & Firestore
// import { pushInquiry } from "../../utils/firebase"

// **********
// component
// **********

const ContactForm = (props) => {
	// refs to push contact data to Firebase & Firestore
	const inputName = useRef()
	const inputEmail = useRef()
	const inputSubject = useRef()
	const inputMessage = useRef()

	return (
		<Grid
			id="contact-form"
			name="contact-form"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="honeypot-field"
			// // logic to push contact data to Firebase & Firestore
			// onSubmit={event => {
			//   event.preventDefault()
			//   pushInquiry(
			//     inputName.current,
			//     inputEmail.current,
			//     inputSubject.current,
			//     inputMessage.current
			//   )
			// }}
		>
			{/* input required by netlify for SSGs like gatsby */}
			<input type="hidden" name="form-name" value="contact-form" />
			{/* hidden honeypot field meant to capture bots */}
			<input name="honeypot-field" style={{ display: "none" }} />
			<div className="form-div">
				<input
					className="form-field"
					type="text"
					name="name"
					id="name"
					aria-label="name"
					placeholder="Name"
					ref={inputName}
					required
				/>
			</div>
			<div className="form-div">
				<input
					className="form-field"
					type="email"
					name="email"
					id="email"
					aria-label="email"
					placeholder="Email"
					ref={inputEmail}
					required
				/>
			</div>
			<div className="form-div">
				<input
					className="form-field"
					type="text"
					name="subject"
					id="subject"
					aria-label="subject"
					placeholder="Subject"
					ref={inputSubject}
					required
				/>
			</div>
			<div className="form-div">
				<textarea
					className="form-field form-textarea"
					name="message"
					id="message"
					aria-label="message"
					placeholder="Message"
					ref={inputMessage}
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

// **********
// styles
// **********

const Grid = styled.form`
	display: grid;
	grid-row-gap: 20px;
	.form-field {
		width: 100%;
		background: linear-gradient(
			to left,
			hsla(${({ theme }) => theme.color.app_green_hsl}, 0.2),
			hsla(${({ theme }) => theme.color.app_blue_hsl}, 0.2)
		);
		color: ${({ theme }) => theme.color.app_green};
		font-size: 16px;
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
			color: ${({ theme }) => theme.color.app_green};
			opacity: 0.6;
		}
		&:focus {
			transform: scale(1.02);
			box-shadow: 0 0 0 1px
				hsla(${({ theme }) => theme.color.app_green_hsl}, 0.5);
			&::placeholder {
				opacity: 0;
			}
		}
	}
`
