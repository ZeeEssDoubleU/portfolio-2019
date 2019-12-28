// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
// import util
import { useModalAnim } from "../../utils/animations"

// ***COMPONENT***
const ProjectInfoFooter = props => {
  const tl_modal = useModalAnim()

  return (
    <Container>
      <button
        aria-label={`close ${props.title} project info panel`}
        onClick={() => {
          tl_modal.current.reverse()
          setTimeout(() => {
            navigate("/", {
              state: {
                modal: false,
                noScroll: true,
              },
            })
          }, 300)
        }}
      >
        Close
      </button>
    </Container>
  )
}
export default ProjectInfoFooter

// ***STYLES***
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
    background: black;
    border: none;
    cursor: pointer;
  }
`
