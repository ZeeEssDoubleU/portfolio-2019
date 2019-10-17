// @ts-nocheck
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
// import components
import NavLogo from "./NavLogo"
import NavHamburger from "./NavHamburger"
import NavMenu from "./NavMenu"
// import store / utils
import { useStore } from "../../store/useStore"
import { useShowNavAnim, useMenuExpandAnim } from "../../utils/animations"

// ***COMPONENT***
const Nav = props => {
  const { state } = useStore()
  // targetRef pointed at NavBar below
  const targetRef = useRef(null)
  useEffect(() => {
    // disables body scroll when navmenu expanded
    state.menuExpanded
      ? disableBodyScroll(targetRef.current)
      : enableBodyScroll(targetRef.current)
  }, [state.menuExpanded])

  // navigation animations
  useShowNavAnim(state)
  useMenuExpandAnim(state)

  return (
    <NavBar
      className="nav-bar"
      navVisible={state.navVisible}
      menuExpanded={state.menuExpanded}
      tabIndex={-1}
      ref={targetRef}
    >
      <NavGrid>
        <NavLogo />
        <NavHamburger />
        <NavMenu />
      </NavGrid>
    </NavBar>
  )
}
export default React.memo(Nav)

// ***STYLES***
const NavBar = styled.nav`
  overflow: auto;
  will-change: transform;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  height: ${props => (props.menuExpanded ? "100%" : "80px")};
  background: ${props => props.theme.appBgDark};
  border-bottom: solid 1px hsla(0, 0%, 8%, 1);
  transition: height 0.3s;
  /* showNav animation */
  opacity: ${props => (props.navVisible ? "1" : "0")};
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
  }
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    opacity: 1;
    width: 10%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px ${props => props.theme.appShadowWhite};
  }
`
const NavGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 80px auto 80px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: ${props => props.theme.insetWidth};
  margin: 0 auto;
  padding: 0 24px;
  -webkit-overflow-scrolling: touch;
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    grid-template-columns: auto;
    grid-template-rows: 144px auto 144px;
    justify-content: center;
    grid-row-gap: 30px;
  }
`
