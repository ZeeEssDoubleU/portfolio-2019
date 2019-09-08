import React, { useState, useContext, useEffect } from "react"
import styled, { ThemeContext } from "styled-components"
import { TimelineMax } from "gsap"
// import styles
import "../../styles/style.scss"
import GlobalStyle from "../../styles/global"
// import context
import { NavContext } from "../../pages/index"
// import components
import Icon from "../Icons/Icon"

// styled components
const Nav = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${props => (props.menuExpanded ? "100vh" : "80px")};
  background: hsla(${props => props.theme.appBgDarkPartial}, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: solid 1px hsla(0, 0%, 8%, 1);
  box-shadow: 0px 6px 6px 0 hsla(0, 0%, 0%, 0.5);
  z-index: 99;
  /* showNav animation */
  transition: opacity 0.3s, height 0.4s;
  opacity: ${props => (props.showNav ? "1" : "0")};
  .nav-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 80px auto 80px;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    /* TODO: Make responsive.  Remove max-width */
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
      @media (min-width: ${props => props.theme.tablet}) {
        display: none;
      }
    }
    .nav-center {
      display: ${props => (props.menuExpanded ? "grid" : "none")};
    }
  }
  @media (min-width: ${props => props.theme.tablet}) {
    height: 80px;
  }
`
const NavLogo = styled.a`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 7px;
  align-items: center;
  height: 80px;
  text-decoration: none;
  cursor: pointer;
  /* hover effect */
  transition: transform 0.2s !important;
  &:hover {
    transform: scale(1.1) !important;
  }
  .logo {
    height: 56px;
    width: 56px;
    /* removes space below image (aligns like letters)*/
    vertical-align: middle;
  }
  .first-name {
    display: none;
    color: ${props => props.theme.appGreen};
  }
  .last-name {
    display: none;
    color: ${props => props.theme.appBlue};
  }
  /* NavLogo tablet and bigger */
  @media (min-width: ${props => props.theme.tablet}) {
    .first-name,
    .last-name {
      display: inherit;
    }
  }
`
const NavMenu = styled.div`
  display: ${props => (props.menuExpanded ? "grid" : "none")};
  grid-area: ${props => (props.menuExpanded ? "2/1 / 3/3" : "inherit")};
  grid-row-gap: 60px;
  justify-items: center;
  .menu-items {
    font-size: ${props => (props.menuExpanded ? "1.5em" : "inherit")};
    color: ${props => props.theme.appBlue};
    text-decoration: none;
    cursor: pointer;
    /* hover effect */
    transition: color 0.2s !important;
    &:hover {
      color: ${props => props.theme.appGreen} !important;
    }
    &.menu-home {
      display: ${props => (props.menuExpanded ? "inherit" : "none")};
    }
  }
  /* NavMenu tablet and bigger */
  @media (min-width: ${props => props.theme.tablet}) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
  }
`

// exported component
const Layout = props => {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const menuState = menuExpanded ? " is-active" : ""
  const showNav = useContext(NavContext).showNav
  // grab context from theme for use in component
  const themeContext = useContext(ThemeContext)
  const windowMobileCheck = () => {
    // check if window is defined.  If not, set windowMobile true
    if (typeof window !== "undefined") {
      return window.innerWidth < themeContext.tablet
    }
  }
  const [windowMobile, setWindowMobile] = useState(windowMobileCheck())

  // // debug
  // console.log("Menu Expanded?", menuExpanded)
  // console.log("Window mobile?", windowMobileCheck())

  // set window size state
  // shrink mobile menu down to nav bar when screen increases in size
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (windowMobileCheck()) {
        setWindowMobile(true)
      } else {
        setWindowMobile(false)
        setMenuExpanded(false)
      }
    })
  }, [windowMobileCheck()])

  // create new timeline instance
  const tl = new TimelineMax()
  // gsap animation - mobile menu.  Triggers on menuExpanded
  useEffect(() => {
    menuExpanded
      ? tl.staggerFromTo(
          ".menu-items",
          0.5,
          { autoAlpha: 0, x: -40 },
          { autoAlpha: 1, x: 0 },
          0.1,
          0.3
        )
      : tl.set(".menu-items", { autoAlpha: 0, x: -40, immediateRender: true })
  }, [menuExpanded])
  // gsap animation - nav header.  Triggers on showNav and windowMobile
  useEffect(() => {
    showNav
      ? tl
          .staggerFromTo(
            ".logo-items",
            0.5,
            { autoAlpha: 0, x: 0, y: -40 },
            { autoAlpha: 1, x: 0, y: 0 },
            0.1,
            0
          )
          .fromTo(
            ".nav-hamburger",
            0.5,
            { autoAlpha: 0, x: 0, y: -40 },
            { autoAlpha: 1, x: 0, y: 0 },
            0
          )
          .staggerFromTo(
            ".menu-items",
            0.5,
            { autoAlpha: 0, x: 0, y: -40 },
            { autoAlpha: 1, x: 0, y: 0 },
            0.1,
            0
          )
      : tl
          .set(".logo-items", {
            autoAlpha: 0,
            x: 0,
            y: -40,
            immediateRender: true,
          })
          .set(".nav-hamburger", {
            autoAlpha: 0,
            x: 0,
            y: -40,
            immediateRender: true,
          })
          .set(".menu-items", {
            autoAlpha: 0,
            x: 0,
            y: -40,
            immediateRender: true,
          })
  }, [showNav, windowMobile])

  return (
    <>
      <GlobalStyle menuExpanded={menuExpanded} />
      <Nav
        role="navigation"
        aria-label="main navigation"
        showNav={showNav}
        menuExpanded={menuExpanded}
      >
        <div className="nav-grid">
          <NavLogo href="#" onClick={() => setMenuExpanded(false)}>
            <span className="logo-items first-name">Zachary</span>
            <span className="logo-items">
              <Icon className="logo" name="logo-nav" />
            </span>
            <span className="logo-items last-name">Williams</span>
          </NavLogo>
          {/* TODO: Need to move hamburger from node_modules to local file tree */}
          {/* TODO: hamburger imported from npm. Go to node_modules/hamburgers/_sass/hamburgers/hamburgers.scss to edit layout */}
          <button
            className={"nav-hamburger hamburger hamburger--spring" + menuState}
            type="button"
            onClick={() => setMenuExpanded(!menuExpanded)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>{" "}
          <NavMenu menuExpanded={menuExpanded}>
            <a
              className="menu-items menu-home"
              href="#"
              onClick={() => setMenuExpanded(false)}
            >
              Home
            </a>
            <a
              className="menu-items"
              href="#about"
              onClick={() => setMenuExpanded(false)}
            >
              About
            </a>
            <a
              className="menu-items"
              href="#projects"
              onClick={() => setMenuExpanded(false)}
            >
              Projects
            </a>
            <a
              className="menu-items"
              href="#contact"
              onClick={() => setMenuExpanded(false)}
            >
              Contact
            </a>
          </NavMenu>
          <div className="nav-center"></div>
        </div>
      </Nav>
      {props.children}
    </>
  )
}
export default Layout
