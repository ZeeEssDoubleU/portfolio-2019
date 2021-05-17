import styled from "styled-components"

// ************
// styled elements
// ************

export const Section = styled.section`
	position: relative;
	display: grid;
	/* height: 100%; */
	width: 100%;
	max-width: ${({ theme }) => theme.spacing.inset_width};
	padding: 24px;
	overflow: hidden;
	@media (min-width: ${({ theme }) => theme.media.tablet}px) {
		height: auto;
		width: calc(100% - 24px * 2);
		padding: 48px;
		border-top: 10px inset ${({ theme }) => theme.color.app_green};
		margin: 0 auto 48px;

		background: hsla(${({ theme }) => theme.color.app_dark_hsl}, 0.9);
		border-radius: 10px;
		box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.shadow_white};
	}
`
export const Header = styled.div`
	width: 100%;
	padding-bottom: 8px;
	border-bottom: 1px solid ${({ theme }) => theme.color.app_green};
	margin: 24px 0;

	justify-self: start;
	font-family: Avenir;
	font-weight: 300;
	font-size: 24px;
	color: ${({ theme }) => theme.color.app_green};
`
export const Body = styled.div`
	display: grid;
	padding: 24px 0;
`
