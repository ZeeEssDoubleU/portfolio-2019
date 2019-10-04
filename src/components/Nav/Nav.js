// @ts-nocheck
import React, { useEffect } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
// import components
import NavLogo from "./NavLogo"
import NavHamburger from "./NavHamburger"
import NavMenu from "./NavMenu"
// import store
import { useStore } from "../../store/useStore"

const NavBar = styled.div`
  overflow: auto;
  will-change: transform !important;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100vw;
  height: ${props => (props.menuExpanded ? "100%" : "80px")};
  background: ${props => props.theme.appBgDark};
  border-bottom: solid 1px hsla(0, 0%, 8%, 1);
  transition: height 0.4s;
  /* showNav animation */
  opacity: ${props => (props.navVisible ? "1" : "0")};
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
  }
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    opacity: 1;
    width: 10vw;
    height: 100%;
    box-shadow: 0px 0px 10px 0px ${props => props.theme.appShadowWhite};
    transition: none;
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
  .nav-center {
    display: ${props => (props.menuExpanded ? "grid" : "none")};
  }
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    grid-template-columns: auto;
    grid-template-rows: 144px auto 144px;
    justify-content: center;
    grid-row-gap: 30px;
  }
`

const Nav = props => {
  const { state } = useStore()
  // disables body scroll when navmenu expanded
  useEffect(() => {
    const targetElem = document.querySelector(".nav-grid")
    state.menuExpanded
      ? disableBodyScroll(targetElem)
      : enableBodyScroll(targetElem)
  }, [state.menuExpanded])

  return (
    <NavBar
      className="nav-bar"
      navVisible={state.navVisible}
      menuExpanded={state.menuExpanded}
      tabIndex={-1}
    >
      <NavGrid>
        <NavLogo />
        <NavHamburger />
        <NavMenu />
        <div className="nav-center"></div>
      </NavGrid>
    </NavBar>
  )
}

export default React.memo(Nav)
