import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { TimelineLite } from "gsap"
// import store
import { useStore } from "../../store/useStore"

// styled components
// variables for quick customization of hamburger
const hamVars = {}
hamVars.layerHeight = 2
hamVars.layerSpacing = 3 * hamVars.layerHeight
hamVars.layerWidth = 25
hamVars.layerRadius = 4

const Container = styled.button`
  padding: 0;
  background: none;
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
  const { state, dispatch } = useStore()
  const toggleMenu = payload => dispatch({ type: "toggleMenu", payload })

  const top = useRef(null)
  const middle = useRef(null)
  const bottom = useRef(null)
  const tl = useRef(null)

  // componentDidMount.  Assign new timeline to tl
  // prevents re-initialization of timeline on re-renders
  useEffect(() => {
    tl.current = new TimelineLite({ paused: true })
      .to([top.current, bottom.current], 0.2, { y: 0 }, 0)
      .to(middle.current, 0.01, { autoAlpha: 0 }, 0.2)
      .to(top.current, 0.2, { rotation: 45 }, 0.2)
      .to(bottom.current, 0.2, { rotation: -45 }, 0.2)
  }, [])

  // componentDidUpdate.  Play/reverse timeline
  useEffect(() => {
    state.menuExpanded === true ? tl.current.play() : tl.current.reverse()
  }, [state.menuExpanded])

  // // DEBUG
  // console.log("timeline", tl)

  return (
    <Container
      className="nav-hamburger"
      onClick={() => toggleMenu(!state.menuExpanded)}
    >
      <Inner>
        {/* bars of hamburger */}
        <Top ref={top} />
        <Middle ref={middle} />
        <Bottom ref={bottom} />
      </Inner>
    </Container>
  )
}

export default React.memo(NavHamburger)
