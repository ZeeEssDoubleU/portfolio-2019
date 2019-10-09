import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-modal-routing"
// import components
import Icon from "../Icons/Icon"

// styled components
const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 40px;
  font-size: 16px;
  color: ${props => props.theme.appTextWhiteL};
  padding: 4px 0;
  margin-top: 20px;
  transition: color 0.2s;
  .project-title {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  .project-description {
    grid-row: 2/3;
    grid-column: 1/2;
    font-size: 14px;
    color: ${props => props.theme.appTextWhiteM};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .project-ellipsis {
    grid-row: 1/3;
    grid-column: 2/3;
    align-self: center;
    justify-self: end;
    font-size: 18px;
    color: ${props => props.theme.appTextWhiteM};
    cursor: pointer;
  }
  &.active {
    color: ${props => props.theme.appGreen};
  }
`

const Project = props => {
  return (
    <Container className={props.className}>
      <div className="project-title">{props.title}</div>
      <div className="project-description">{props.description}</div>
      <Link to={`/project/${props.slug}`} asModal>
        <Icon
          className="project-ellipsis"
          name="ellipsis"
          aria-label={`show ${props.title} project info panel`}
        />
      </Link>
    </Container>
  )
}

export default Project
