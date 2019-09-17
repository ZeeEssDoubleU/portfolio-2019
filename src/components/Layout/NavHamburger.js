import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { TimelineMax } from "gsap"

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
  top: calc(50% - ${hamVars.layerHeight / 2}px);
  transform: translateY(-400%);
`
const Middle = styled(Shape)`
  top: calc(50% - ${hamVars.layerHeight / 2}px);
`
const Bottom = styled(Shape)`
  top: calc(50% - ${hamVars.layerHeight / 2}px);
  transform: translateY(400%);
`

const NavHamburger = props => {
  const tl = new TimelineMax()
  // use useRef to detect first render
  const isFirstRender = useRef(true)

  useEffect(() => {
    // prevent hamburger from animating on first render
    if (isFirstRender.current === true) {
      isFirstRender.current = false
    } else {
      props.menuExpanded === true
        ? tl
            .to([".top", ".bottom"], 0.2, { y: "0%" }, 0)
            .to(".middle", 0, { autoAlpha: 0 }, 0.2)
            .to(".top", 0.2, { transform: "rotate(45deg)" }, 0.2)
            .to(".bottom", 0.2, { transform: "rotate(-45deg)" }, 0.2)
        : tl
            .to([".top", ".bottom"], 0.2, { transform: "rotate(0)" }, 0)
            .to(".bottom", 0.2, { transform: "rotate(0)" }, 0)
            .to(".middle", 0, { autoAlpha: 1 }, 0.2)
            .to(".top", 0.2, { y: "-400%" }, 0.2)
            .to(".bottom", 0.2, { y: "400%" }, 0.2)
    }
  }, [props.menuExpanded])

  return (
    <Container
      className="nav-hamburger"
      onClick={() => props.setMenuExpanded(!props.menuExpanded)}
    >
      <Inner>
        {/* bars of hamburger */}
        <Top className={"top" + props.menuState}></Top>
        <Middle className={"middle" + props.menuState}></Middle>
        <Bottom className={"bottom" + props.menuState}></Bottom>
      </Inner>
    </Container>
  )
}

export default NavHamburger
