import React from "react"
import styled from "styled-components"
// import components
import Icon from "../Icons/Icon"
import ProjectInfo from "./ProjectInfo"

// styled components
const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 40px;
  padding: 24px 0 4px;
  font-size: 16px;
  transition: color 0.2s;
  .project-title {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  .project-description {
    grid-row: 2/3;
    grid-column: 1/2;
    font-size: 12px;
    color: darkgrey;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .project-ellipsis {
    grid-row: 1/3;
    grid-column: 2/3;
    align-self: center;
    justify-self: end;
    color: darkgrey;
    cursor: pointer;
  }
  &.active {
    .project-title {
      color: ${props => props.theme.appGreen};
    }
  }
`
const Border = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px solid;
  border-image-source: linear-gradient(
    to left,
    rgba(${props => props.theme.appGreenPartial}, 0.5),
    rgba(${props => props.theme.appBluePartial}, 0.5)
  );
  border-image-slice: 1;
  border-image-width: 0 0 1px 0;
  mask-image: linear-gradient(to right, black 55%, transparent 100%);
  z-index: -1;
`

const Project = props => {
  return (
    <Container className={props.className}>
      <div className="project-title">{props.title}</div>
      <div className="project-description">{props.description}</div>
      <Icon
        className="project-ellipsis"
        name="ellipsis"
        onClick={() => props.toggleClass(props.index)}
      />
      <ProjectInfo
        className={props.className}
        toggleClass={props.toggleClass}
        title={props.title}
        description={props.description}
        link={props.link}
        tech={props.tech}
      />
      <Border></Border>
    </Container>
  )
}

export default Project
