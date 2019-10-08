// @ts-nocheck
import React from "react"
import styled from "styled-components"
// import store
import { useStore } from "../../store/useStore"
// import components
import Link from "../elements/Link"

const Container = styled.div`
  display: ${props => (props.menuExpanded ? "grid" : "none")};
  grid-area: ${props => (props.menuExpanded ? "2/1 / 3/3" : "inherit")};
  grid-row-gap: 60px;
  justify-items: center;
  .menu-link {
    font-size: ${props => (props.menuExpanded ? "1.5em" : "inherit")};
    color: ${props => props.theme.appBlue};
    text-decoration: none;
    cursor: pointer;
    
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
    .menu-link {
      opacity: 0;
      &.menu-home {
        display: inherit;
      }
    }
  }
`

const NavMenu = props => {
  const { state } = useStore()

  // TODO: add active state to menu items when section in view
  return (
    <Container menuExpanded={state.menuExpanded}>
      <Link className="menu-link menu-home" href="landing">
        Home
      </Link>
      <Link className="menu-link" href="about">
        About
      </Link>
      <Link className="menu-link" href="projects">
        Projects
      </Link>
      <Link className="menu-link" href="contact">
        Contact
      </Link>
    </Container>
  )
}

export default React.memo(NavMenu)
