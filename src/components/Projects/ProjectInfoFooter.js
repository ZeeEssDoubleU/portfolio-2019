// @ts-nocheck
import React from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"

// ***COMPONENT***
const ProjectInfoFooter = props => {
  return (
    <Container>
      <Link to="/" aria-label={`close ${props.title} project info panel`}>
        <button>Close</button>
      </Link>
    </Container>
  )
}
export default ProjectInfoFooter

// ***STYLES***
const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  display: grid;
  grid-template-rows: 70px;
  justify-content: center;
  align-content: center;
  button {
    border: none;

    color: ${props => props.theme.appTextWhiteL};
    font-size: 20px;
    background: black;
    cursor: pointer;
  }
`
