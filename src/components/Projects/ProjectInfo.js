// @ts-nocheck
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
// import styles
import GlobalStyle from "../../styles/global"
// import components
import { Wrapper } from "../elements/StyledButton"
import { ExternalLink } from "../elements/CustomLink"
import Footer from "./ProjectInfoFooter"
// TODO: Import icons for tech stack
// import Icon from "../Icons/Icon"

// ***COMPONENT***
const ProjectInfo = props => {
  // targetRef pointed at Container below
  const targetRef = useRef(null)
  useEffect(() => {
    // assigned ref to variable at advice of react warning
    const targetElem = targetRef.current
    // body scroll disabled when component (modal) mounted
    disableBodyScroll(targetElem)
    return () => enableBodyScroll(targetElem)
  }, [])

  // array to display tech stack below in render
  const techArray = props.tech.map((tech, index) => (
    <li key={index}>
      <span>+</span>
      {tech}
    </li>
  ))

  // array to display tech stack below in render
  const featuresArray = props.features.map((feature, index) => (
    <li key={index}>
      <span>&#10003;</span>
      {feature}
    </li>
  ))

  return (
    <ModalRoutingContext.Consumer>
      {/* Modal state read from ModalRoutingContext.Consumer to disable body scroll when modal is open */}
      {modal => (
        <Modal className="project-info-modal">
          <GlobalStyle modal={modal} />
          <Thumbnail
            title={`${props.title} thumbnail`}
            fluid={{ ...props.image.fluid }}
            alt={`preview image of ${props.title} project`}
          />
          <Container className="project-info" ref={targetRef}>
            <Grid>
              <Header>
                <h1 className="project-info-title">{props.title}</h1>
                <div className="project-info-desc">{props.description}</div>
              </Header>
              <Links>
                <ExternalLink
                  href={props.projectLink}
                  aria-label={`external link to ${props.title} project`}
                >
                  <ViewProject>view project</ViewProject>
                </ExternalLink>
                <ExternalLink
                  href={props.codeLink}
                  aria-label={`external link to ${props.title}'s Github repository`}
                >
                  <ViewCode>view code</ViewCode>
                </ExternalLink>
              </Links>
              <div className="project-info-desc">{props.moreInfo}</div>
              <div className="project-info-list">
                <h3>Features</h3>
                <ul>{featuresArray}</ul>
              </div>
              <div className="project-info-list">
                <h3>Development Tools</h3>
                <ul>{techArray}</ul>
              </div>
            </Grid>
          </Container>
          <Footer title={props.title} />
        </Modal>
      )}
    </ModalRoutingContext.Consumer>
  )
}
export default ProjectInfo

// ***STYLES***
const Modal = styled.div`
  /* project info originally hidden off screen and revealed when clicked */
  position: fixed;
  z-index: 999;
  top: 100%;
  left: 0;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.appTextWhiteM};
  background: black;
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    padding-top: 24px;
  }
`
const Thumbnail = styled(Img)`
  /* TODO: change vw to % when images are added */
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vw;
  img {
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      black,
      transparent 100%
    );
    object-fit: cover;
    object-position: 0% 0% !important;
    transform-origin: 0% 0%;
  }
  background: black;
  border: none;
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    width: 30vw;
    height: 30vw;
    margin: 0 auto;
  }
`
const Container = styled.div`
  position: absolute;
  top: 0;
  height: calc(100% - 70px);
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 3%,
    black 97%,
    transparent 100%
  );
  h1,
  h3,
  h4 {
    color: ${props => props.theme.appTextWhiteL};
  }
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    left: 50%;
    transform: translateX(-50%);
  }
`
const Grid = styled.div`
  position: absolute;
  top: 60vw;
  display: grid;
  width: 100%;
  justify-items: center;
  grid-gap: 32px;
  text-align: center;
  padding: 96px 24px 24px;
  background: linear-gradient(to bottom, transparent 0, black 216px);
  .project-info-desc {
    white-space: pre-wrap;
  }
  .project-info-list {
    ul {
      width: fit-content;
      padding: 0;
      margin: 8px auto 0;
      li {
        display: grid;
        text-align: left;
        grid-template-columns: 20px auto;
      }
    }
  }
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    top: 30vw;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 24px 24px;
    background: linear-gradient(to bottom, transparent 0, black 72px);
  }
`
const Header = styled.div`
  .project-info-title {
    margin: 0.5em 0 8px;
  }
`
const Links = styled.div`
  display: grid;
`
// Wrapper styled-component pulled from Button component style
const ViewProject = styled(Wrapper)`
  width: 150px;
  border: 1px solid hsla(${props => props.theme.appBluePartial}, 0.3);
  border-radius: 10px 10px 0 0;
  transition: color 0.2s, border-color 0.2s;
  &:hover {
    border: 1px solid hsla(${props => props.theme.appGreenPartial}, 0.3);
  }
`
const ViewCode = styled(Wrapper)`
  width: 150px;
  border: 1px solid hsla(${props => props.theme.appBluePartial}, 0.3);
  border-radius: 0 0 10px 10px;
  transition: color 0.2s, border-color 0.2s;
  &:hover {
    border: 1px solid hsla(${props => props.theme.appGreenPartial}, 0.3);
  }
`
