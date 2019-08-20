import React, { useState, useContext, useEffect } from "react"
import styled, { ThemeContext } from "styled-components"
import { TimelineMax } from "gsap"
// import styles
import "../../styles/style.scss"
import GlobalStyle from "../../styles/global"
// import context
import { NavContext } from "../../pages/index"
// import components
import Icon from "./Icon"

// styled components
const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  /* TODO: Make responsive.  Remove max-width */
  max-width: 1000px;
  height: ${props => (props.menuExpanded ? "100vh" : "80px")};
  background: black;
  border-bottom: 1px solid;
  border-image: linear-gradient(
      to right,
      rgba(${props => props.theme.appGreenPartial}, 0.5),
      rgba(${props => props.theme.appBluePartial}, 0.5)
    )
    1;
  box-shadow: 0px 6px 6px 0 rgba(0, 0, 0, 0.5);
  z-index: 99;
  /* showNav animation */
  transition: opacity 0.3s, height 0.3s;
  opacity: ${props => (props.showNav ? "1" : "0")};
  .nav-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 80px auto 80px;
    justify-content: space-between;
    align-items: center;
    height: ${props => (props.menuExpanded ? "100%" : "inherit")};
    max-width: 1400px;
    padding: 0 35px;
    margin: 0 auto;
    .nav-logo {
      display: grid;
      grid-template-columns: auto auto auto;
      align-items: center;
      height: 80px;
      text-decoration: none;
      cursor: pointer;
      /* hover effect */
      transition: transform 0.2s !important;
      &:hover {
        transform: scale(1.1) !important;
      }
      .logo-names {
        display: none;
      }
      .logo {
        height: 56px;
        /* removes space below image (aligns like letters)*/
        vertical-align: middle;
      }
      @media (min-width: ${props => props.theme.tablet + "px"}) {
        grid-template-columns: auto auto auto;
        grid-gap: 7px;
        .logo-names {
          display: inherit;
        }
        .first-name {
          color: ${props => props.theme.appGreen};
        }
        .last-name {
          color: ${props => props.theme.appBlue};
        }
      }
    }
    .nav-hamburger {
      display: grid;
      align-items: center;
      height: 80px;
      justify-self: end;
      .hamburger-box {
        /* hover effect */
        transition: transform 0.2s !important;
        &:hover {
          transform: scale(1.2) !important;
        }
      }
      @media (min-width: ${props => props.theme.tablet + "px"}) {
        display: none;
      }
    }
    .nav-menu {
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
      @media (min-width: ${props => props.theme.tablet + "px"}) {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 30px;
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

// exported component
const Layout = props => {
  const [menuExpanded, setMenuExpanded] = useState(false)
  const menuState = menuExpanded ? " is-active" : ""
  const showNav = useContext(NavContext).showNav
  // grab context from theme for use in component
  const themeContext = useContext(ThemeContext)
  const [screenMobile, setScreenMobile] = useState(
    window.innerWidth < themeContext.tablet
  )

  // shrink mobile menu down to nav bar when screen increases in size
  window.addEventListener("resize", () => {
    if (window.innerWidth >= themeContext.tablet && menuExpanded === true) {
      setMenuExpanded(false)
    }
    window.innerWidth < themeContext.tablet
      ? setScreenMobile(true)
      : setScreenMobile(false)
  })

  // create new timeline instance
  const tl = new TimelineMax()
  // gsap animation - mobile menu
  useEffect(() => {
    menuExpanded
      ? tl.staggerFromTo(
          ".menu-items",
          0.5,
          { autoAlpha: 0, x: -40 },
          { autoAlpha: 1, x: 0 },
          0.1,
          0
        )
      : tl.set(".menu-items", { autoAlpha: 0, x: -40 }, 0)
  }, [menuExpanded])
  // gsap animation - nav header
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
          .set(".logo-items", { autoAlpha: 0, x: 0, y: -40 }, 0)
          .set(".nav-hamburger", { autoAlpha: 0, x: 0, y: -40 }, 0)
          .set(".menu-items", { autoAlpha: 0, x: 0, y: -40 }, 0)
  }, [showNav, screenMobile])

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
          <a
            className="nav-logo"
            href="#"
            onClick={() => setMenuExpanded(false)}
          >
            <span className="logo-names first-name logo-items">Zachary</span>
            <span className="logo-items">
              <Icon className="logo" name="logo-nav" />
            </span>
            <span className="logo-names last-name logo-items">Williams</span>
          </a>
          {/* TODO: hamburger imported from npm. Go to node_modules/hamburgers/_sass/hamburgers/hamburgers.scss to edit layout */}
          {/* TODO: make hamburger have focus outline on tab only */}
          <button
            className={"nav-hamburger hamburger hamburger--spin" + menuState}
            type="button"
            onClick={() => setMenuExpanded(!menuExpanded)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>{" "}
          <div className="nav-menu">
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
          </div>
          <div className="nav-center"></div>
        </div>
      </Nav>
      {props.children}
    </>
  )
}
export default Layout
