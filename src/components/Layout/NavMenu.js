// @ts-nocheck
import React, { useCallback } from "react"
import styled from "styled-components"
import { scrollToAnim } from "../../utils/scrollToAnim"
// import store
import { useStore } from "../../store/useStore"

const Container = styled.div`
  display: ${props => (props.menuExpandedState ? "grid" : "none")};
  grid-area: ${props => (props.menuExpandedState ? "2/1 / 3/3" : "inherit")};
  grid-row-gap: 60px;
  justify-items: center;
  .menu-items {
    font-size: ${props => (props.menuExpandedState ? "1.5em" : "inherit")};
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
      display: ${props => (props.menuExpandedState ? "inherit" : "none")};
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
  const { state, dispatch } = useStore()
  const toggleMenu = useCallback(
    payload => dispatch({ type: "toggleMenu", payload }),
    [dispatch]
  )

  // TODO: add active state to menu items when section in view
  return (
    <Container menuExpandedState={state.menuExpanded}>
      <a
        className="menu-items menu-home"
        href="#landing"
        onClick={e => {
          e.preventDefault()
          toggleMenu(false)
          scrollToAnim(state.menuExpanded, "#landing")
        }}
      >
        Home
      </a>
      <a
        className="menu-items"
        href="#about"
        onClick={e => {
          e.preventDefault()
          toggleMenu(false)
          scrollToAnim(state.menuExpanded, "#about")
        }}
      >
        About
      </a>
      <a
        className="menu-items"
        href="#projects"
        onClick={e => {
          e.preventDefault()
          toggleMenu(false)
          scrollToAnim(state.menuExpanded, "#projects")
        }}
      >
        Projects
      </a>
      <a
        className="menu-items"
        href="#contact"
        onClick={e => {
          e.preventDefault()
          toggleMenu(false)
          scrollToAnim(state.menuExpanded, "#contact")
        }}
      >
        Contact
      </a>
    </Container>
  )
}

export default React.memo(NavMenu)
