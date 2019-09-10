import React from "react"
import styled from "styled-components"

const Container = styled.div`
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
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
  }
`

const NavMenu = props => {
  return (
    <Container menuExpanded={props.menuExpanded}>
      <a
        className="menu-items menu-home"
        href="#"
        onClick={() => props.setMenuExpanded(false)}
      >
        Home
      </a>
      <a
        className="menu-items"
        href="#about"
        onClick={() => props.setMenuExpanded(false)}
      >
        About
      </a>
      <a
        className="menu-items"
        href="#projects"
        onClick={() => props.setMenuExpanded(false)}
      >
        Projects
      </a>
      <a
        className="menu-items"
        href="#contact"
        onClick={() => props.setMenuExpanded(false)}
      >
        Contact
      </a>
    </Container>
  )
}

export default NavMenu
