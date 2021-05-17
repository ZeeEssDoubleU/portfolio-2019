import styled from "styled-components"
import Image from "next/image"
// import components
import StyledButton from "../../elements/StyledButton"
import Icon from "../../Icons/Icon"
import ContactForm from "./ContactForm"
import Socials from "../../Socials"
// import styles
import { Section, Header, Body } from "../../../styles/elements"
// import queries
import { useHomeData } from "../../../data/hooks"
// import store
import { useStore } from "../../../store/useStore"

// **********
// component
// **********

export default function Contact() {
	const {
		state: { isMobile },
	} = useStore()
	const { backgroundImage } = useHomeData()

	const currentDate = new Date().getFullYear()

	return (
		<Container tabIndex={-1} id="contact">
			{isMobile && (
				<Image
					layout="fill"
					objectFit="cover"
					src={backgroundImage.image.url}
				/>
			)}
			<Header>get in touch</Header>
			<Body>
				{/* // TODO: fields not working on mobile */}
				<ContactForm />
			</Body>
			{/* // TODO: fix button style */}
			<StyledButton
				icon="check"
				type="submit"
				form="contact-form"
				aria-label="submit contact form"
				justifySelf="end"
			>
				submit
			</StyledButton>
			<Socials />
			<Copyright>
				Zachary Williams{" "}
				<Icon name="copyright" className="icon-copyright" /> Copyright
				{" " + currentDate}
			</Copyright>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled(Section)``
const Copyright = styled.p`
	display: grid;
	grid-template-columns: auto auto auto;
	color: ${({ theme }) => theme.color.app_green};
	padding: 0 10px;
	margin: 10px auto;
	align-items: center;
	grid-gap: 4px;
	.icon-copyright {
		height: 18px;
		width: 18px;
	}
`
