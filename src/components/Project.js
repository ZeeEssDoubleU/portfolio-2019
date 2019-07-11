import React from "react"
import styled from "styled-components"

// styled components
const ProjectDiv = styled.div`
  padding: 0px 25px 4px;
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #50e3c2, #415efa) 1;
  mask-image: linear-gradient(to right, black 55%, transparent 100%);
  font-family: American Typewriter;
  font-size: 12px;
`

const Project = props => {
  return <ProjectDiv>{props.children}</ProjectDiv>
}

export default Project