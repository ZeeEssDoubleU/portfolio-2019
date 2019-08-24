import React from "react"
import styled from "styled-components"
// import components
import Icon from "../Layout/Icon"

// styled components
const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 40px;
  padding: 24px 0 4px;
  font-size: 16px;
  transition: color 0.2s;
  cursor: pointer;
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
  }
  /* project info originally hidden off screen and revealed when clicked */
  .project-info {
    position: fixed;
    z-index: 99;
    top: 100%;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    transition: top 0.3s;
    .project-info-container {
      position: relative;
      height: calc(100% - 80px);
      width: 100%;
      padding: 30px 24px;
      overflow-y: auto;
      .project-info-grid {
        display: grid;
        justify-items: center;
        grid-gap: 30px;
        .project-image {
          content: "";
          width: 50%;
          padding-top: 50%;
          height: 0;
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
      grid-template-rows: 80px;
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
      }
    }
  }
  &.active {
    .project-title {
      color: ${props => props.theme.appGreen};
    }
    .project-info {
      top: 0;
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
  // array to display tech stack below in render
  const techArray = []
  props.tech.forEach((tech, index) => {
    techArray.push(
      <li key={index}>
        <span>+</span>
        {tech}
      </li>
    )
  })

  return (
    <Container className={props.className}>
      <div className="project-title">{props.title}</div>
      <div className="project-description">{props.description}</div>
      <Icon
        className="project-ellipsis"
        name="ellipsis"
        onClick={() => props.toggleClass(props.index)}
      />
      <div className="project-info">
        <div className="project-info-container">
          <div className="project-info-grid">
            <div className="project-image"></div>
            <div className="project-info-header">
              <h1 className="project-info-title">{props.title}</h1>
              <div className="project-info-desc">{props.description}</div>
              <a href={props.link} target="_blank">
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
      </div>
      <Border></Border>
    </Container>
  )
}

export default Project
