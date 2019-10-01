// @ts-nocheck
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// import components
import ButtonOrLink from "../Layout/ButtonOrLink"
import Project from "./Project"
// import styles
import GlobalStyle, { Section, Layout, Header, Body } from "../../styles/global"

const Projects = props => {
  // gql query for project data
  const data = useStaticQuery(graphql`
    # new query using gatsby-source-contentful
    {
      allDatoCmsProject {
        edges {
          node {
            id
            title
            description
            tech
            link
            order
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
    data.allDatoCmsProject.edges.length <= showMoreIndex ? true : false

  // array to display projects below in render
  const projectArray = data.allDatoCmsProject.edges
    .slice(0, showMoreIndex)
    .map((edge, index) => {
      const project = edge.node
      return (
        <Project
          key={index}
          index={index}
          order={project.order}
          title={project.title}
          description={project.description}
          tech={project.tech}
          link={project.link}
          toggleClass={result => setActiveIndex(result)}
          className={activeIndex === index ? "active" : ""}
        ></Project>
      )
    })
    .sort((a, b) => {
      // sort in descending order based on order prop
      return b.props.order - a.props.order
    })

  // // debug
  // console.log("PROJECT ARRAY", projectArray)

  return (
    <>
      <GlobalStyle activeIndex={activeIndex} />
      <Section id="projects">
        <Layout>
          <Header>projects</Header>
          <Body>{projectArray}</Body>
          {!isHidden && (
            <ButtonOrLink
              button
              icon="plus"
              hidden={isHidden}
              onClick={() => setShowMoreIndex(showMoreIndex + 5)}
            >
              show more
            </ButtonOrLink>
          )}
        </Layout>
      </Section>
    </>
  )
}

export default Projects
