import React, { useEffect } from "react"
import styled from "styled-components"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

// import components
import NavLogo from "./NavLogo"
import NavHamburger from "./NavHamburger"
import NavMenu from "./NavMenu"

const NavBar = styled.div`
  overflow: auto;
  will-change: transform !important;
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100vw;
  height: ${props => (props.menuExpanded ? "100vh" : "80px")};
  background: ${props => props.theme.appBgDark};
  border-bottom: solid 1px hsla(0, 0%, 8%, 1);
  /* showNav animation */
  opacity: ${props => (props.showNav ? "1" : "0")};
  transition: height 0.4s;
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    transition: opacity 0.3s, height 0.4s;
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
  }
  .nav-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 80px auto 80px;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    .nav-center {
      display: ${props => (props.menuExpanded ? "grid" : "none")};
    }
  }
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    height: 80px;
  }
`

const Nav = props => {
  // disables body scroll when navmenu expanded
  useEffect(() => {
    const targetElem = document.querySelector(".nav-grid")
    props.menuExpanded
      ? disableBodyScroll(targetElem)
      : enableBodyScroll(targetElem)
  }, [props.menuExpanded])

  return (
    <NavBar
      showNav={props.showNav}
      menuExpanded={props.menuExpanded}
      tabIndex={-1}
    >
      <div className="nav-grid">
        <NavLogo
          menuExpanded={props.menuExpanded}
          setMenuExpanded={props.setMenuExpanded}
        />
        <NavHamburger
          menuExpanded={props.menuExpanded}
          setMenuExpanded={props.setMenuExpanded}
          menuState={props.menuState}
        />
        <NavMenu
          menuExpanded={props.menuExpanded}
          setMenuExpanded={props.setMenuExpanded}
        />
        <div className="nav-center"></div>
      </div>
    </NavBar>
  )
}

export default Nav
