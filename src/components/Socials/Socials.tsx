import { ReactElement } from "react"
import styled from "styled-components"
// import components
import Social from "./Social"

// **********
// component
// **********

export default function Socials(): ReactElement {
	return (
		<Container>
			<Social
				name="github"
				ariaLabel="github profile"
				href="https://github.com/ZeeEssDoubleU"
			/>
			<Social
				name="linkedin"
				ariaLabel="linkedin profile"
				href="https://www.linkedin.com/in/ZacharyScottWilliams"
			/>
			<Social
				name="dribbble"
				ariaLabel="dribbble profile"
				href="https://dribbble.com/ZeeEssDoubleU"
			/>
			<Social
				name="email"
				ariaLabel="email"
				href="mailto: zak.williams2287@gmail.com"
			/>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	display: flex;
	margin: 20px auto;
	height: fit-content;
	flex-wrap: wrap;
	justify-content: center;
	& > * {
		position: relative;
		background: linear-gradient(
			to left,
			hsla(${({ theme }) => theme.color.app_green_hsl}, 0.5),
			hsla(${({ theme }) => theme.color.app_blue_hsl}, 0.5)
		);
		padding: 1px;
		border-radius: 50%;
		margin: 10px 10px;
		cursor: pointer;
		transition: transform 0.2s;
		&:hover,
		&:active {
			transform: scale(1.2);
		}
		@media (min-width: ${({ theme }) => theme.media.tablet}px) {
			margin: 10px 20px;
		}
	}
`
