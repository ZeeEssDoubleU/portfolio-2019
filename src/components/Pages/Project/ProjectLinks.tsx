import styled from "styled-components"
// import components
import { Wrapper } from "../../elements/StyledButton"
import { ExternalLink } from "../../elements/CustomLink"

// **********
// component
// **********

export default function ProjectLinks({ title, projectLink, codeLink }) {
	return (
		<Container>
			<ExternalLink
				href={projectLink}
				aria-label={`external link to ${title} project`}
			>
				<ViewProject>view project</ViewProject>
			</ExternalLink>
			<ExternalLink
				href={codeLink}
				aria-label={`external link to ${title}'s Github repository`}
			>
				<ViewCode>view code</ViewCode>
			</ExternalLink>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	display: grid;
`
// Wrapper styled-component pulled from Button component style
const ViewProject = styled(Wrapper)`
	width: 150px;
	border: 1px solid hsla(${({ theme }) => theme.color.app_blue_hsl}, 0.3);
	border-radius: 10px 10px 0 0;
	transition: color 0.2s, border-color 0.2s;
	&:hover {
		border: 1px solid hsla(${({ theme }) => theme.color.app_green_hsl}, 0.3);
	}
`
const ViewCode = styled(Wrapper)`
	width: 150px;
	border: 1px solid hsla(${({ theme }) => theme.color.app_blue_hsl}, 0.3);
	border-radius: 0 0 10px 10px;
	transition: color 0.2s, border-color 0.2s;
	&:hover {
		border: 1px solid hsla(${({ theme }) => theme.color.app_green_hsl}, 0.3);
	}
`
