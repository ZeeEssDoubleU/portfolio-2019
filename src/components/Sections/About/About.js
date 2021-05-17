import styled from "styled-components"
import Image from "next/image"
// import components
import { InternalLink } from "../../elements/CustomLink"
import StyledButton from "../../elements/StyledButton"
import Icon from "../../Icons/Icon"
// import styles
import { Section, Header, Body } from "../../../styles/elements"
// import queries
import { useHomeData } from "../../../data/hooks"
import { useStore } from "../../../store/useStore"

// **********
// component
// **********

export default function About() {
	const {
		state: { isMobile },
	} = useStore()
	const { profileImage } = useHomeData()

	return (
		<Container id="about">
			<Header>about</Header>
			<Bio>
				<ImageWrapper>
					<ProfilePic
						layout="fill"
						objectFit="cover"
						objectPosition={isMobile ? "80% center" : "right center"}
						src={profileImage.url}
						title="selfie"
						alt="developer self portrait"
					/>
				</ImageWrapper>
				<div>
					<p className="bio-name">Zachary Williams</p>
					<p>
						<Highlight>
							<Icon name="map-marker" />
							{"  "}New York, NY, USA
						</Highlight>
					</p>
					<p>
						My name is Zachary Williams, or Zak for short. I’m a{" "}
						<Highlight>front-end developer</Highlight> based in New York
						CIty. I enjoy creating clean, intuitive web interfaces that
						provide a satisfying user experience.
					</p>
					<p>
						If you’re in need of a website, mobile or web application, or
						just want to say what’s up, give me a shout!
					</p>
				</div>
			</Bio>
			<InternalLink href="contact" className="link-contact-me">
				<StyledButton
					icon="email"
					onClick={() =>
						setTimeout(() => document.querySelector("#name").focus(), 700)
					}
				>
					contact me
				</StyledButton>
			</InternalLink>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled(Section)`
	.link-contact-me {
		justify-self: end;
	}
`
const Bio = styled(Body)`
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: auto;
	justify-items: center;
	color: white;
	font-size: 15px;
	line-height: 1.8;
	white-space: pre-wrap;
	.bio-name {
		font-size: 18px;
		font-weight: 500;
	}
	p {
		margin: 12px 0;
	}
	@media (min-width: ${({ theme }) => theme.media.tablet}px) {
		grid-template-rows: auto;
		grid-template-columns: auto auto;
		align-items: center;
	}
`
const ImageWrapper = styled.div`
	/* stretch image across background */
	position: relative;
	height: 240px;
	width: 100%;
	overflow: hidden;

	/* creates fade to black effect on background image */
	@media (min-width: ${({ theme }) => theme.media.tablet}px) {
		height: 240px;
		width: 240px;
		border-radius: 50%;
		margin-right: 36px;
	}
`
const ProfilePic = styled(Image)`
	/* creates fade to black effect on background image */
	mask-image: linear-gradient(
		to bottom,
		transparent -10%,
		black,
		transparent 110%
	);

	/* creates fade to black effect on background image */
	@media (min-width: ${({ theme }) => theme.media.tablet}px) {
		/* // TODO: consider a triangle clip pattern */
		mask-image: radial-gradient(black 30%, transparent 100%);
		border-radius: 50%;
		margin-right: 36px;
	}
`
const Highlight = styled.span`
	color: #50e3c2;
`
