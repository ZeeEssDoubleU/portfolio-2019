// @ts-nocheck
import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
// import styles
import { theme } from "../styles/theme"
import GlobalStyle from "../styles/global"
//import component
import ProjectInfo from "../components/Projects/ProjectInfo"

export default ({ data }) => {
  const project = data.datoCmsProject

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProjectInfo
        title={project.title}
        description={project.description}
        link={project.link}
        tech={project.tech}
      />
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    datoCmsProject(slug: { eq: $slug }) {
      title
      description
      tech
      link
      slug
    }
  }
`
