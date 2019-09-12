import React from "react"
import styled from "styled-components"
// import { scrollToAnim } from "../../utils/scrollToAnim"
import { TweenLite, ScrollToPlugin, Power2 } from "gsap/all"

// import components
import Icon from "../Icons/Icon"

const Container = styled.a`
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
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    .first-name,
    .last-name {
      display: inherit;
    }
  }
`

const NavLogo = props => {
  return (
    <Container
      onClick={() => {
        props.setMenuExpanded(false)

        TweenLite.to(window, duration, {
          scrollTo: { y: 0, offsetY: 0 },
          ease: Power2.easeOut,
        })
      }}
    >
      <span className="logo-items first-name">Zachary</span>
      <span className="logo-items">
        <Icon className="logo" name="logo-nav" />
      </span>
      <span className="logo-items last-name">Williams</span>
    </Container>
  )
}

export default NavLogo
