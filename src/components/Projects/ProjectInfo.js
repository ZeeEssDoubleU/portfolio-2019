// @ts-nocheck
import React from "react"
import styled from "styled-components"
// import components
import { Wrapper } from "../elements/StyledButton"
import { ExternalLink } from "../elements/CustomLink"
import ProjectInfoFooter from "./ProjectInfoFooter"
// TODO: Import icons for tech stack
// import Icon from "../Icons/Icon"

// styled components
const Container = styled.div`
  /* project info originally hidden off screen and revealed when clicked */
  /* Container positioned relative to #portal */
  position: absolute;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.appTextWhiteL};
  .project-info {
    height: calc(100% - 70px);
    width: 100%;
    max-width: 1400px;
    padding: 30px 24px;
    margin: 0 auto;
    overflow: auto;
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 3%,
      black 97%,
      transparent 100%
    );
    -webkit-overflow-scrolling: touch;
    .project-info-grid {
      display: grid;
      justify-items: center;
      grid-gap: 30px;
      .project-image {
        /* TODO: change vw to % when images are added */
        width: 50vw;
        height: 50vw;
        max-width: 30vh;
        max-height: 30vh;
        background: ${props => props.theme.appGreenBlue};
      }
      .project-info-header {
        text-align: center;
        .project-info-title {
          margin: 0.5em 0 8px;
        }
        .project-info-desc {
          color: ${props => props.theme.appTextWhiteM};
          margin-bottom: 30px;
          white-space: pre-wrap;
        }
      }
      .project-info-details {
        h3 {
          margin: 1em 0;
        }
        ul {
          display: grid;
          grid-row-gap: 15px;
          padding-left: 0;
          list-style: none;
          color: ${props => props.theme.appTextWhiteM};
          li {
            display: grid;
            grid-template-columns: 20px auto;
          }
        }
      }
    }
  }
`
// Wrapper styled-component pulled from Button component style
const ProjectButton = styled(Wrapper)`
  border: 1px solid hsla(${props => props.theme.appBluePartial}, 0.3);
  transition: color 0.2s, border-color 0.2s;
  &:hover {
    border: 1px solid hsla(${props => props.theme.appGreenPartial}, 0.3);
  }
`

const ProjectInfo = props => {
  // array to display tech stack below in render
  const techArray = props.tech.map((tech, index) => (
    <li key={index}>
      <span>+</span>
      {tech}
    </li>
  ))

  return (
    <Container>
      <div className="project-info">
        <div className="project-info-grid">
          <div
            className="project-image"
            alt={`preview image of ${props.title} project`}
          ></div>
          <div className="project-info-header">
            <h1 className="project-info-title">{props.title}</h1>
            <div className="project-info-desc">{props.description}</div>
            <ExternalLink
              href={props.link}
              label={`external link to ${props.title} project`}
            >
              <ProjectButton>view project</ProjectButton>
            </ExternalLink>
          </div>
          <div className="project-info-details">
            <h3>Development Tools</h3>
            <ul>{techArray}</ul>
          </div>
        </div>
      </div>
      <ProjectInfoFooter title={props.title} toggleClass={props.toggleClass} />
    </Container>
  )
}

export default ProjectInfo
