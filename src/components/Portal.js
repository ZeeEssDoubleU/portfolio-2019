import React from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { theme } from "../styles/theme"

const Modal = styled.div`
  /* hidden out of way initially */
  position: fixed;
  z-index: 999;
  top: 100%;
  left: 0;
  /* use 100% vs 100vh because mobile browsers use % to read VISIBLE space */
  height: 100%;
  width: 100%;
  background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
`

const Portal = props => {
  return createPortal(
    <Modal className="portal-modal" theme={theme}>
      {props.children}
    </Modal>, // portal root
    document.querySelector("#portal")
  )
}

export default Portal
