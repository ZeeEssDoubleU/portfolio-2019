// @ts-nocheck
import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
// import components
import StyledButton from "../elements/StyledButton"
import Project from "./Project"
// import styles
import { Layout, Header, Body } from "../../styles/elements"

// **********
// component
// **********

// TODO: need to include Projects states into global state
const Projects = props => {
  const { allDatoCmsProject } = useStaticQuery(query)
  const [showMoreIndex, setShowMoreIndex] = useState(5)

  // display 'show more' button if all projects aren't shown
  // display nothing if all project are shown
  const isHidden =
    allDatoCmsProject.edges.length <= showMoreIndex ? true : false

  // array to display projects below in render
  const projectArray = allDatoCmsProject.edges
    .slice(0, showMoreIndex)
    .map((edge, index) => {
      const project = edge.node
      return (
        <Project
          key={index}
          index={index}
          title={project.title}
          description={project.description}
          slug={project.slug}
        ></Project>
      )
    })

  return (
    <Section id="projects">
      <Header>projects</Header>
      <Body>{projectArray}</Body>
      {!isHidden && (
        <StyledButton
          icon="plus"
          hidden={isHidden}
          aria-label="show more projects"
          onClick={() => setShowMoreIndex(showMoreIndex + 5)}
        >
          show more
        </StyledButton>
      )}
    </Section>
  )
}
export default React.memo(Projects)

// ***STYLED***
const Section = styled(Layout)``

// **********
// query
// **********

const query = graphql`
  {
    allDatoCmsProject(sort: { fields: order, order: DESC }) {
      edges {
        node {
          title
          description
          slug
        }
      }
    }
  }
`
