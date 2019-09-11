import React from "react"
import styled from "styled-components"
import { TimelineMax } from "gsap"
// import components
import { Wrapper } from "../Layout/ButtonOrLink"
// TODO: Import icons for tech stack
// import Icon from "../Icons/Icon"

// styled components
const Modal = styled.div`
  /* project info originally hidden off screen and revealed when clicked */
  /* modal positioned relative to #portal */
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.appTextWhiteL};
  background: hsla(${props => props.theme.appBgDarkPartial}, 0.6);
  backdrop-filter: blur(5px);
  .project-info {
    /* use vh instead of % because fixed modal */
    height: calc(100vh - 70px);
    width: 100%;
    padding: 30px 24px;
    overflow: auto;
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
          color: ${props => props.theme.appTextWhiteM};
          margin-bottom: 20px;
        }
      }
      .project-info-details {
        ul {
          display: grid;
          grid-row-gap: 15px;
          padding: 0;
          margin: 0;
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
  .project-info-footer {
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
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`
// Wrapper styled-component pulled from ButtonOrLink component style
const ButtonOrLink = styled(Wrapper)`
  display: inline-block;
  margin-right: 0;
  border: 1px solid hsla(${props => props.theme.appBluePartial}, 0.3);
  transition: color 0.2s, border-color 0.2s !important;
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

  const tl = new TimelineMax()

  return (
    <Modal>
      <div className="project-info">
        <div className="project-info-grid">
          <div className="project-image"></div>
          <div className="project-info-header">
            <h1 className="project-info-title">{props.title}</h1>
            <div className="project-info-desc">{props.description}</div>
            <ButtonOrLink
              link
              as="a"
              href={`https://${props.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              view project
            </ButtonOrLink>
          </div>
          <div className="project-info-details">
            <h3>Development Tools</h3>
            <ul>{techArray}</ul>
          </div>
        </div>
      </div>
      <div className="project-info-footer">
        <button
          onClick={() => {
            // timeout set equal to portal gsap animation
            setTimeout(() => props.toggleClass(), 300)
            tl.to("#portal", 0.3, { transform: "translateY(0)" })
          }}
        >
          Close
        </button>
      </div>
    </Modal>
  )
}

export default ProjectInfo
