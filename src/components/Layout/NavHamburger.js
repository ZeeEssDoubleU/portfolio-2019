import React from "react"
import styled from "styled-components"

// styled components
const hamVars = {
  layerSpacing: 6,
  layerHeight: 2,
  layerWidth: 25,
  layerRadius: 4,
}
const Container = styled.button`
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    display: none;
  }
`
const Inner = styled.div`
  position: relative;
  width: ${hamVars.layerWidth}px;
  height: ${2 * hamVars.layerSpacing + 3 * hamVars.layerHeight}px;
  transition: transform 0.2s, opacity 0.2s !important;
  will-change: transform;
  &:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
`
const Shape = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: ${hamVars.layerHeight}px;
  background: ${props => props.theme.appBlueGreen};
  border: none;
  border-radius: ${hamVars.layerRadius}px;
`
const Top = styled(Shape)`
  top: 0;
  transition: transform 0.2s, top 0.2s 0.2s;
  &.is-active {
    top: calc(50% - ${hamVars.layerHeight / 2}px);
    transform: rotate(45deg);
    transition: top 0.2s, transform 0.2s 0.2s;
  }
`
const Middle = styled(Shape)`
  top: calc(50% - ${hamVars.layerHeight / 2}px);
  transition: opacity 0s 0.2s;
  &.is-active {
    opacity: 0;
  }
`
const Bottom = styled(Shape)`
  top: calc(100% - ${hamVars.layerHeight}px);
  transition: transform 0.2s, top 0.2s 0.2s;
  &.is-active {
    top: calc(50% - ${hamVars.layerHeight / 2}px);
    transform: rotate(-45deg);
    transition: top 0.2s, transform 0.2s 0.2s;
  }
`

const NavHamburger = props => {
  return (
    <Container
      className="nav-hamburger"
      onClick={() => props.setMenuExpanded(!props.menuExpanded)}
    >
      <Inner>
        {/* bars of hamburger */}
        <Top className={"shapes top" + props.menuState}></Top>
        <Middle className={"shapes middle" + props.menuState}></Middle>
        <Bottom className={"shapes bottom" + props.menuState}></Bottom>
      </Inner>
    </Container>
  )
}

export default NavHamburger
