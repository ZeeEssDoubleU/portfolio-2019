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
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* TODO: Make responsive.  Remove max-width */
  max-width: 1400px;
  padding: 30px 0;
  overflow: hidden;
  margin: 20px auto;
  @media (min-width: ${props => props.theme.desktop}) {
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 10px;
  }
`
const Grid = styled.div`
  display: grid;
  align-items: end;
  margin: 30px 24px;
`
const Projects = props => {
  // gql query for project data
  const data = useStaticQuery(graphql`
    # new query using gatsby-source-contentful
    {
      allContentfulProject {
        edges {
          node {
            id
            title
            description {
              id
              internal {
                content
              }
            }
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
    data.allContentfulProject.edges.length <= showMoreIndex ? true : false

  // array to display projects below in render
  const projectArray = data.allContentfulProject.edges
    .slice(0, showMoreIndex)
    .map((edge, index) => {
      const project = edge.node
      return (
        <Project
          key={index}
          index={index}
          title={project.title}
          description={project.description.internal.content}
          tech={project.tech}
          link={project.link}
          toggleClass={result => setActiveIndex(result)}
          className={activeIndex === index ? "active" : ""}
        ></Project>
      )
    })

  return (
    <>
      <GlobalStyle activeIndex={activeIndex} />
      <Section>
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
      </Section>
    </>
  )
}

export default Projects
