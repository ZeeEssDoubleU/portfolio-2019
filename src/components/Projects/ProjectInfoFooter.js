// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
// import util
import { useAnim_modalFromBottom } from "../../utils/animations"

// ***COMPONENT***
const ProjectInfoFooter = props => {
  const tl_modal = useAnim_modalFromBottom()

  return (
    <Container>
      <Link
        to="/"
        aria-label={`close ${props.title} project info panel`}
        onClick={event => {
          event.preventDefault()
          tl_modal.current.reverse()
          setTimeout(() => navigate("/"), 300)
        }}
      >
        <button>Close</button>
      </Link>
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
