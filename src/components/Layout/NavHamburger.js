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
  const top = useRef(null)
  const middle = useRef(null)
  const bottom = useRef(null)
  const tl = useRef(null)
  // use useRef to detect first render
  const isFirstRender = useRef(true)

  // componentDidMount.  Assign new timeline to tl
  useEffect(() => {
    tl.current = new TimelineMax({ paused: true })
      .to([top.current, bottom.current], 0.2, { y: "0%" }, 0)
      .to(middle.current, 0, { autoAlpha: 0 }, 0.2)
      .to(top.current, 0.2, { transform: "rotate(45deg)" }, 0.2)
      .to(bottom.current, 0.2, { transform: "rotate(-45deg)" }, 0.2)
  }, [])

  // componentDidUpdate.  Play/reverse timeline
  useEffect(() => {
    // prevent hamburger from animating on first render
    if (isFirstRender.current === true) {
      isFirstRender.current = false
    } else {
      props.menuExpanded === true ? tl.current.play() : tl.current.reverse()
    }
  }, [props.menuExpanded])

  return (
    <Container
      className="nav-hamburger"
      onClick={() => props.setMenuExpanded(!props.menuExpanded)}
    >
      <Inner>
        {/* bars of hamburger */}
        <Top ref={top} className={"top" + props.menuState}></Top>
        <Middle ref={middle} className={"middle" + props.menuState}></Middle>
        <Bottom ref={bottom} className={"bottom" + props.menuState}></Bottom>
      </Inner>
    </Container>
  )
}

export default NavHamburger
