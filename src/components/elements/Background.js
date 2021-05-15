import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// import components
import Icon from "../Icons/Icon"
import { InternalLink } from "./CustomLink"

// **********
// component
// **********
export function Background() {
	const {
		datoCmsAsset: { image },
	} = useStaticQuery(query)

	return (
		<Container bgSvgUrl={image.url}>
			<Icon name="logo-landing" className="logo" />
			<InternalLink
				href="about"
				cancelParam={() => window.scrollY <= window.innerHeight}
			>
				<Icon name="arrow-down" className="arrow-down" />
			</InternalLink>
		</Container>
	)
}

// **********
// styles
// **********

const Container = styled.div`
	height: 100%;
	width: 100%;
	background: black bottom/cover url(${({ bgSvgUrl }) => bgSvgUrl});
	/* svg icons down in component */
	.logo {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 70%;
		max-width: calc(0.4 * 100vh);
		max-height: 868px;
	}
	.arrow-down {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		width: 30px;

		cursor: pointer;
		transition: transform 0.2s;
		&:hover {
			transform: translateX(-50%) scale(1.2);
		}
	}
	@media (min-width: ${({ theme }) => theme.media.tablet}px) {
		position: fixed;
		will-change: transform;
		overflow: auto;
		height: 100vh;
	}
	@media (min-width: ${({ theme }) => theme.media.desktop}px) {
		width: 90%;
		margin-left: 10%;
	}
`

// **********
// query
// **********

const query = graphql`
	query Background {
		datoCmsAsset(title: { eq: "Background" }) {
			title
			image {
				url
			}
		}
	}
`
