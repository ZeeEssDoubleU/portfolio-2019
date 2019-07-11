import React from "react"
import styled from "styled-components"

// styled components
const PanelDiv = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.columns ? `repeat(${props.columns}, auto)` : 1};
  grid-gap: ${props => (props.columns ? "10px 14px" : null)};
  justify-self: ${props => (props.justifySelf ? props.justifySelf : null)};
  position: ${props => (props.position ? props.position : null)};
  color: white;
  font-family: ${props => (props.fontFam ? props.fontFam : null)};
  font-size: ${props => (props.fontSize ? props.fontSize : null)};
  background: ${props => (props.background ? "rgba(0, 0, 0, 0.6)" : null)};
  box-shadow: ${props =>
    props.background ? "4px 6px 6px 0 rgba(0, 0, 0, 0.5)" : null};
  border-radius: ${props =>
    props.justifySelf === "start" ? "0 15px 15px 0" : "15px 0 0 15px"};
  padding: 20px 34px;
`

const SidePanel = props => {
  return (
    <PanelDiv
      columns={props.columns}
      action={props.action}
      fontFam={props.fontFam}
      fontSize={props.fontSize}
      justifySelf={props.justifySelf}
      background={props.background}
    >
      {props.children}
    </PanelDiv>
  )
}

export default SidePanel
