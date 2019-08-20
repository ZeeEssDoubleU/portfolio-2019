import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

// import components
import SidePanel from "../Layout/SidePanel"
import Project from "./Project"

// styled components
const ProjectsSection = styled.section`
  color: white;
  background: black;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 30px 0;
`
const ProjectsGrid = styled.div`
  display: grid;
  align-items: end;
  margin: 30px 34px;
`

const Projects = () => {
  // gql query for project data
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            project
            description
            tech
            link
          }
        }
      }
    }
  `)

  // display show more button if all projects aren't shown
  // display show less button if more than 5 projects are shown
  // display nothing if there are less than 5 projects
  const isHidden = data.allProjectsJson.edges.length <= 5 ? true : false

  // array to display projects below in render
  const projectArray = []
  data.allProjectsJson.edges.forEach(project =>
    projectArray.push(
      <Project
        key={project.node.id}
        name={project.node.project}
        description={project.node.description}
        tech={project.node.tech}
        link={project.node.link}
      ></Project>
    )
  )

  return (
    <ProjectsSection id="projects">
      <SidePanel header>projects</SidePanel>
      <ProjectsGrid>{projectArray}</ProjectsGrid>
      <SidePanel button icon="plus" hidden={isHidden}>
        show more
      </SidePanel>
    </ProjectsSection>
  )
}

export default Projects
