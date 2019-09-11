import React from "react"
import styled from "styled-components"

// import components
import NavLogo from "./NavLogo"
import NavMenu from "./NavMenu"

const NavBar = styled.div`
  overflow: hidden;
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
  transition: opacity 0.3s, height 0.4s;
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
    /* backdrop-filter: blur(5px); */
  }
  .nav-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 80px auto 80px;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 24px;
    .nav-hamburger {
      display: grid;
      align-items: center;
      justify-self: end;
      .hamburger-box {
        /* hover effect */
        transition: transform 0.2s !important;
        &:hover {
          transform: scale(1.2) !important;
        }
      }
      /* .nav-hamburger */
      @media (min-width: ${props => props.theme.tablet + "px"}) {
        display: none;
      }
    }
    .nav-center {
      display: ${props => (props.menuExpanded ? "grid" : "none")};
    }
  }
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    height: 80px;
  }
`

const Nav = props => {
  return (
    <NavBar showNav={props.showNav} menuExpanded={props.menuExpanded}>
      <div className="nav-grid">
        <NavLogo href="#" setMenuExpanded={props.setMenuExpanded} />
        {/* TODO: Need to move hamburger from node_modules to local file tree */}
        {/* TODO: hamburger imported from npm. Go to node_modules/hamburgers/_sass/hamburgers/hamburgers.scss to edit layout */}
        <button
          className={
            "nav-hamburger hamburger hamburger--spring" + props.menuState
          }
          type="button"
          onClick={() => props.setMenuExpanded(!props.menuExpanded)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>{" "}
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
