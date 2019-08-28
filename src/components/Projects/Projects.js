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
            title
            description
            tech
            link
          }
        }
      }
    }
  `)

  const [activeIndex, setActiveIndex] = useState()
  const [showMoreIndex, setShowMoreIndex] = useState(5)

  // display 'show more' button if all projects aren't shown
  // display nothing if all project are shown
  const isHidden =
    data.allProjectsJson.edges.length <= showMoreIndex ? true : false

  // array to display projects below in render
  const projectArray = data.allProjectsJson.edges
    .slice(0, showMoreIndex)
    .map((project, index) => (
      <Project
        key={index}
        index={index}
        title={project.node.title}
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
          <SidePanel
            button
            icon="plus"
            hidden={isHidden}
            onClick={() => setShowMoreIndex(showMoreIndex + 5)}
          >
            show more
          </SidePanel>
        </Layout>
      </Section>
    </>
  )
}

export default Projects
