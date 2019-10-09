// @ts-nocheck
import React from "react"
import styled from "styled-components"
// import util
import { usePortalAnim } from "../../utils/animations"

const ProjectInfoFooter = props => {
  const tl_portal = usePortalAnim()

  return (
    <Container>
      <button
        aria-label={`close ${props.title} project info panel`}
        onClick={() => {
          tl_portal.current.reverse()
        }}
      >
        Close
      </button>
    </Container>
  )
}
export default ProjectInfoFooter

// styled components
const Container = styled.div`
  display: grid;
  grid-template-rows: 70px;
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  button {
    color: ${props => props.theme.appTextWhiteL};
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
  }
`
