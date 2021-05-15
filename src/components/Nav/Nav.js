import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
// import components
import NavLogo from "./NavLogo"
// import NavHamburger from "./NavHamburger"
import NavMenu from "./NavMenu"
// import store / utils
import { useStore } from "../../store/useStore"
// TODO: fix nav show anim
// import { useAnim_showNav, useAnim_expandMenu } from "../../utils/animations"

// **********
// component
// **********

const Nav = (props) => {
	const { state } = useStore()
	// targetRef pointed at Container below
	const targetRef = useRef(null)
	useEffect(() => {
		// disables body scroll when navmenu expanded
		state.menuExpanded
			? disableBodyScroll(targetRef.current)
			: enableBodyScroll(targetRef.current)
	}, [state.menuExpanded])

	// navigation animations
	// useAnim_showNav(state)
	// useAnim_expandMenu(state)

	return (
		<Container
			className="nav-bar"
			navVisible={state.navVisible}
			menuExpanded={state.menuExpanded}
			tabIndex={-1}
			ref={targetRef}
		>
			<NavGrid>
				<NavLogo />
				{/* // TODO: fix nav hamburger */}
				{/* <NavHamburger /> */}
				<NavMenu />
			</NavGrid>
		</Container>
	)
}
export default React.memo(Nav)

// **********
// styles
// **********

const Container = styled.nav`
	will-change: transform;
	position: fixed;
	z-index: 1;
	top: 0;
	height: ${({ menuExpanded }) => (menuExpanded ? "100%" : "80px")};
	width: 100%;
	border-bottom: solid 1px hsla(0, 0%, 8%, 1);
	overflow: auto;

	background: ${({ theme }) => theme.color.app_dark};
	transition: height 0.3s;
	/* showNav animation */
	opacity: ${(props) => (props.navVisible ? "1" : "0")};
	@media (min-width: ${({ theme }) => theme.media.tablet}px) {
		background: hsla(${({ theme }) => theme.color.app_dark_hsl}, 0.9);
	}
	@media (min-width: ${({ theme }) => theme.media.desktop}px) {
		height: 100%;
		width: 10%;

		opacity: 1;
		box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.color.shadow_white};
	}
`
const NavGrid = styled.div`
	height: 100%;
	max-width: ${({ theme }) => theme.spacing.inset_width};
	padding: 0 24px;
	margin: 0 auto;

	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: 80px auto 80px;
	justify-content: space-between;
	align-items: center;

	-webkit-overflow-scrolling: touch;
	@media (min-width: ${({ theme }) => theme.media.desktop}px) {
		grid-template-columns: auto;
		grid-template-rows: 144px auto 144px;
		justify-content: center;
		grid-row-gap: 30px;
	}
`
