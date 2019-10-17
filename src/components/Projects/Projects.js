// @ts-nocheck
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import components
import StyledButton from "../elements/StyledButton"
import Project from "./Project"
// import styles
import {
  Section,
  Layout,
  Header,
  Body,
  DesktopWrapper,
} from "../../styles/elements"

// ***COMPONENT***
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
          tech={project.tech}
          link={project.link}
          slug={project.slug}
        ></Project>
      )
    })

  return (
    <>
      <Section id="projects">
        <DesktopWrapper>
          <Layout>
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
          </Layout>
        </DesktopWrapper>
      </Section>
    </>
  )
}
export default React.memo(Projects)

// ***QUERY***
const query = graphql`
  {
    allDatoCmsProject(sort: { fields: order, order: DESC }) {
      edges {
        node {
          title
          description
          tech
          link
          slug
        }
      }
    }
  }
`
