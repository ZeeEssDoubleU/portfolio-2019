import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

// import components
import SidePanel from "../Layout/SidePanel"
import Project from "./Project"
// import styles
import GlobalStyle from "../../styles/global"
// styled components
const Section = styled.section`
  color: white;
`
const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 30px 0;
  /* TODO: Make responsive.  Remove max-width */
  max-width: 1400px;
  margin: 0 auto;
`
const Grid = styled.div`
  display: grid;
  align-items: end;
  margin: 30px 24px;
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

  const [activeIndex, setActiveIndex] = useState()

  // TODO: Correct projects section to 'show more' correctly
  // display show more button if all projects aren't shown
  // display show less button if more than 5 projects are shown
  // display nothing if there are less than 5 projects
  const isHidden = data.allProjectsJson.edges.length <= 5 ? true : false

  // array to display projects below in render
  const projectArray = data.allProjectsJson.edges.map((project, index) => (
    <Project
      key={index}
      index={index}
      title={project.node.project}
      description={project.node.description}
      tech={project.node.tech}
      link={project.node.link}
      toggleClass={result => setActiveIndex(result)}
      className={activeIndex === index ? "active" : ""}
    ></Project>
  ))

  return (
    <>
      <GlobalStyle activeIndex={activeIndex} />
      <Section id="projects">
        <Layout>
          <SidePanel header>projects</SidePanel>
          <Grid>{projectArray}</Grid>
          <SidePanel button icon="plus" hidden={isHidden}>
            show more
          </SidePanel>
        </Layout>
      </Section>
    </>
  )
}

export default Projects
