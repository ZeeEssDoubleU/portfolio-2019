// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { scrollToAnim } from "../../utils/scrollToAnim"
// import store
import { useStore, onToggleMenu } from "../../store/useStore"

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
    transition: color 0.2s;
    &:hover,
    &:active {
      color: ${props => props.theme.appGreen};
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
  /* NavMenu tablet and bigger */
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    display: grid;
    grid-area: 2/1 / 3/2;
    grid-template-columns: auto;
    align-self: start;
    .menu-items {
      opacity: 0;
      &.menu-home {
        display: inherit;
      }
    }
  }
`

const NavMenu = props => {
  const { state, dispatch } = useStore()

  // TODO: add active state to menu items when section in view
  return (
    <Container menuExpanded={state.menuExpanded}>
      <a
        className="menu-items menu-home"
        href="#landing"
        aria-label="scroll to home section"
        onClick={e => {
          e.preventDefault()
          onToggleMenu(dispatch, false)
          scrollToAnim(state.menuExpanded, "#landing")
        }}
      >
        Home
      </a>
      <a
        className="menu-items"
        href="#about"
        aria-label="scroll to about section"
        onClick={e => {
          e.preventDefault()
          onToggleMenu(dispatch, false)
          scrollToAnim(state.menuExpanded, "#about")
        }}
      >
        About
      </a>
      <a
        className="menu-items"
        href="#projects"
        aria-label="scroll to projects section"
        onClick={e => {
          e.preventDefault()
          onToggleMenu(dispatch, false)
          scrollToAnim(state.menuExpanded, "#projects")
        }}
      >
        Projects
      </a>
      <a
        className="menu-items"
        href="#contact"
        aria-label="scroll to contact section"
        onClick={e => {
          e.preventDefault()
          onToggleMenu(dispatch, false)
          scrollToAnim(state.menuExpanded, "#contact")
        }}
      >
        Contact
      </a>
    </Container>
  )
}

export default React.memo(NavMenu)
