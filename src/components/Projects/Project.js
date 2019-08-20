import React, { useState } from "react"
import styled from "styled-components"

// styled components
const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  grid-row-gap: 20px;
  padding: 24px 25px 4px;
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
  .project-title {
    color: ${props => (props.isActive ? props.theme.appGreen : "inherit")};
    transition: transform 0.2s !important;
    transform: ${props =>
      props.isActive ? "translateX(0px)" : "translateX(-20px)"};
  }
  .project-expand {
    color: ${props => (props.isActive ? props.theme.appGreen : "inherit")};
    opacity: ${props => (props.isActive ? 1 : 0)};
    transition: opacity 0.2s !important;
  }
  .project-info {
    display: ${props => (props.isActive ? "block" : "none")};
    grid-column: 1 / end;
    a {
      text-decoration: none;
    }
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
  const [isActive, setActive] = useState(false)
  const activeClass = isActive ? " active" : ""

  // array to display tech stack below in render
  const techArray = []
  props.tech.forEach((tech, index) => {
    techArray.push(<li key={index}>{tech}</li>)
  })

  return (
    <ProjectDiv
      onClick={() => setActive(!isActive)}
      className={activeClass}
      isActive={isActive}
    >
      <div className="project-expand">{isActive ? "-" : "+"}</div>
      <div className="project-title">{props.name}</div>
      <div className={"project-info"}>
        <p>{props.description}</p>
        Dev Tools
        <ul>{techArray}</ul>
        <a href={props.link} target="_blank">
          VIEW PROJECT
        </a>
      </div>
    </ProjectDiv>
  )
}

export default Project
