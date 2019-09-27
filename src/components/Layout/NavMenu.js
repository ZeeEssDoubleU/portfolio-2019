// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { scrollToAnim } from "../../utils/scrollToAnim"

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
    &:hover,
    &:active {
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
        href="#landing"
        onClick={e => {
          e.preventDefault()
          props.setMenuExpanded(false)
          scrollToAnim(props.menuExpanded, "#landing")
        }}
      >
        Home
      </a>
      <a
        className="menu-items"
        href="#about"
        onClick={e => {
          e.preventDefault()
          props.setMenuExpanded(false)
          scrollToAnim(props.menuExpanded, "#about")
        }}
      >
        About
      </a>
      <a
        className="menu-items"
        href="#projects"
        onClick={e => {
          e.preventDefault()
          props.setMenuExpanded(false)
          scrollToAnim(props.menuExpanded, "#projects")
        }}
      >
        Projects
      </a>
      <a
        className="menu-items"
        href="#contact"
        onClick={e => {
          e.preventDefault()
          props.setMenuExpanded(false)
          scrollToAnim(props.menuExpanded, "#contact")
        }}
      >
        Contact
      </a>
    </Container>
  )
}

export default React.memo(NavMenu)
