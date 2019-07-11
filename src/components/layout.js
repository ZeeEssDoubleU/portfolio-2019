import React, { useState } from "react"
import styled from "styled-components"
// import styles
import "../styles/style.scss"
import GlobalStyle from "../styles/global"
// import icons

// styled components
const Nav = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  background: ${props =>
    `linear-gradient(to bottom, ${props.theme.appBgColor}, ${
      props.theme.headerBgColor
    })`};
  color: white;
  box-shadow: ${props => props.theme.sectionShadow};
  border-bottom: 1px solid ${props => props.theme.techBorderColor};
`
const Wrapper = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 35px;
  display: flex;
  align-items: center;
`
const Logo = styled.h2`
  flex-grow: 1;
`
const Menu = styled.ul`
  display: flex;
  list-style: none;
  height: 18px;
  li {
    margin-left: 30px;
    /* hamburger imported from npm.  Go to node_modules/hamburgers/_sass/hamburgers/hamburgers.scss to edit layout */
    .hamburger,
    .hamburger-box {
      height: 18px;
    }
  }
  @media (max-width: 768px) {
    .expanded {
      display: none;
    }
  }
  @media (min-width: 769px) {
    .collapsed {
      display: none;
    }
  }
`

// exported component
const Layout = props => {
  const [menuExpanded, toggleMenu] = useState(false)
  const menuState = menuExpanded ? " is-active" : ""

  return (
    <>
      <GlobalStyle />
      {/* <Nav role="navigation" aria-label="main navigation">
        <Wrapper className={menuState}>
          <Logo>Zachary Williams</Logo>
          <Menu>
            <li className="expanded">About</li>
            <li className="expanded">Projects</li>
            <li className="expanded">Tech</li>
            <li className="expanded">Contact</li>
            <li className="collapsed">
              // hamburger imported from npm.  Go to node_modules/hamburgers/_sass/hamburgers/hamburgers.scss to edit layout
              <button
                className={"hamburger hamburger--spin" + menuState}
                type="button"
                onClick={() => toggleMenu(!menuExpanded)}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>{" "}
            </li>
          </Menu>
        </Wrapper>
      </Nav> */}
      {props.children}
    </>
  )
}
export default Layout
