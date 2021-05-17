import styled from "styled-components"
import Image from "next/image"

// **********
// component
// **********

export default function ProjectHero({ title, image }) {
	return (
		<Container>
			<Hero
				layout="fill"
				objectFit="cover"
				objectPosition="center top"
				src={image.url}
				title={`${title} hero image`}
				alt={`preview image of ${title} project`}
			/>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vw;
	/* max-height: calc(100% - 70px); */
	background: black;

	@media (min-width: ${({ theme }) => theme.media.desktop}px) {
		width: 30vw;
		height: 30vw;
		margin: 0 auto;
	}
`
const Hero = styled(Image)`
	// TODO: change vw to % when images are added
	mask-image: linear-gradient(
		to bottom,
		transparent 0%,
		black,
		transparent 100%
	);
`
