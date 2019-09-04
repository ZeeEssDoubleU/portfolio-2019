import React from "react"
import styled from "styled-components"
// import components
// TODO: Import icons for tech stack
// import Icon from "../Icons/Icon"

// styled components
const Modal = styled.div`
  /* project info originally hidden off screen and revealed when clicked */
  position: fixed;
  z-index: 999;
  top: 100%;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  transition: top 0.3s;
  .project-info {
    position: relative;
    height: calc(100% - 70px);
    width: 100%;
    padding: 30px 24px;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black 3%,
      black 97%,
      transparent 100%
    );
    .project-info-grid {
      display: grid;
      justify-items: center;
      grid-gap: 30px;
      .project-image {
        content: "";
        width: calc(0.5 * 100vw);
        height: calc(0.5 * 100vw);
        max-width: calc(0.3 * 100vh);
        max-height: calc(0.3 * 100vh);
        background: ${props => props.theme.appGreenBlue};
      }
      .project-info-header {
        text-align: center;
        .project-info-title {
          margin-bottom: 0;
        }
        .project-info-desc {
          color: darkgrey;
          margin-bottom: 20px;
        }
        a {
          .project-info-link {
            display: inline-block;
            padding: 10px;
            border: 2px solid ${props => props.theme.appGreen};
            border-radius: 10px;
            color: ${props => props.theme.appGreen};
            font-size: 14px;
            text-decoration: none;
          }
        }
      }
      .project-info-details {
        ul {
          display: grid;
          grid-row-gap: 15px;
          padding: 0;
          margin: 0;
          list-style: none;
          li {
            display: grid;
            grid-template-columns: 20px auto;
          }
        }
      }
    }
  }
  .project-info-footer {
    display: grid;
    grid-template-rows: 70px;
    justify-content: center;
    align-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    button {
      color: white;
      font-size: inherit;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
  &.active {
    top: 0;
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
    <Modal className={props.className}>
      <div className="project-info">
        <div className="project-info-grid">
          <div className="project-image"></div>
          <div className="project-info-header">
            <h1 className="project-info-title">{props.title}</h1>
            <div className="project-info-desc">{props.description}</div>
            <a
              href={`https://${props.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-info-link">view project</div>
            </a>
          </div>
          <div className="project-info-details">
            <h3>Development Tools</h3>
            <ul>{techArray}</ul>
          </div>
        </div>
      </div>
      <div className="project-info-footer">
        <button onClick={() => props.toggleClass()}>Close</button>
      </div>
    </Modal>
  )
}

export default ProjectInfo
