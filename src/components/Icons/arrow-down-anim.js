import React from "react"
import styled from "styled-components"

const Arrow = styled.div`
  position: relative;
  /* match initial height and width parameter */
  height: 20px;
  width: 20px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0.15rem;
    height: 100%;
    z-index: 100;
    background: white;
    border-radius: 10px;
    transition: transform 0.2s ease 0s;
  }
  &::before {
    left: calc(50% - 33%);
    transform: rotate(-45deg);
  }
  &::after {
    left: calc(50% + 33%);
    transform: rotate(45deg);
  }
  /* set this to any selector/class you like (:hover, :active, className, etc) */
  &:hover::before {
    transform: rotate(45deg);
  }
  &:hover::after {
    transform: rotate(-45deg);
  }
`

const SVG = props => {
  return <Arrow className={props.className} />
}

export default SVG
