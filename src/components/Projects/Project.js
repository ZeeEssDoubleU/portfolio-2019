import React from "react"
import styled from "styled-components"

// styled components
const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  align-items: end;
  height: 40px;
  padding: 0 25px 4px;
  border-bottom: 1px solid;
  border-image: linear-gradient(
      to left,
      rgba(${props => props.theme.appGreenPartial}, 0.5),
      rgba(${props => props.theme.appBluePartial}, 0.5)
    )
    1;
  mask-image: linear-gradient(to right, black 55%, transparent 100%);
  font-family: American Typewriter;
  font-size: 12px;
  transition: color 0.2s;
  cursor: pointer;
  /* hover effect */
  .project-title {
    transition: transform 0.2s !important;
    transform: translateX(-20px);
  }
  .project-expand {
    opacity: 0;
    transition: opacity 0.2s !important;
  }
  &:hover {
    color: ${props => props.theme.appGreen} !important;
    .project-title {
      transform: translateX(0px) !important;
    }
    .project-expand {
      opacity: 1 !important;
      transition: opacity 0.4s !important;
    }
  }
`

const Project = props => {
  return (
    <ProjectDiv>
      <div className="project-expand">+</div>
      <div className="project-title">{props.children}</div>
    </ProjectDiv>
  )
}

export default Project
