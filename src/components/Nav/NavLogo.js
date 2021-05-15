import React from "react"
import styled from "styled-components"
// import components
import Icon from "../Icons/Icon"
import { InternalLink } from "../elements/CustomLink"

// **********
// component
// **********

const NavLogo = (props) => {
	return (
		<InternalLink href="landing" className="logo-link">
			<Container>
				<span className="logo-items first-name">Zachary</span>
				<span className="logo-items">
					<Icon className="logo" name="logo-nav" />
				</span>
				<span className="logo-items last-name">Williams</span>
			</Container>
		</InternalLink>
	)
}
export default React.memo(NavLogo)

// **********
// styles
// **********

const Container = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 7px;
	align-items: center;
	height: 80px;
	text-decoration: none;
	cursor: pointer;

	transition: transform 0.2s, opacity 0.2s;
	&:hover {
		opacity: 0.7;
		transform: scale(1.1);
	}
	.logo {
		height: 56px;
		width: 56px;
		/* removes space below image (aligns like letters)*/
		vertical-align: middle;
	}
	.first-name {
		display: none;
		color: ${(props) => props.theme.appGreen};
	}
	.last-name {
		display: none;
		color: ${(props) => props.theme.appBlue};
	}
	/* NavLogo tablet and bigger */
	@media (min-width: ${(props) => props.theme.tablet}) {
		.first-name,
		.last-name {
			display: inherit;
		}
	}
	@media (min-width: ${(props) => props.theme.desktop}) {
		grid-template-columns: auto;
		.logo-items {
			opacity: 0;
			.logo {
				height: 84px;
				width: 84px;
			}
		}
		.first-name,
		.last-name {
			display: none;
		}
	}
`
