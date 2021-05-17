import styled from "styled-components"
// TODO: convert to GatsbyImage
import Img from "gatsby-image"

// **********
// component
// **********

export default function ProjectHero({ title, image }) {
	return (
		<Image
			title={`${title} image`}
			fluid={{ ...image.fluid }}
			alt={`preview image of ${title} project`}
		/>
	)
}

// **********
// styles
// **********

const Image = styled(Img)`
	// TODO: change vw to % when images are added
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vw;
	max-height: calc(100% - 70px);
	img {
		mask-image: linear-gradient(
			to bottom,
			transparent 0%,
			black,
			transparent 100%
		);
		object-fit: cover;
		object-position: 0% 0% !important;
		transform-origin: 0% 0%;
	}
	background: black;
	border: none;
	@media (min-width: ${({ theme }) => theme.media.desktop}px) {
		width: 30vw;
		height: 30vw;
		margin: 0 auto;
	}
`
