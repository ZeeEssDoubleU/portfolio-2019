import React from "react"
import styled from "styled-components"

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
  return (
    <ProjectsSection>
      <SidePanel header>projects</SidePanel>
      <ProjectsGrid>
        <Project>WatchStuff</Project>
        <Project>Github Issue Tracker</Project>
        <Project>Portfolio</Project>
        <Project>DevConnector</Project>
        <Project>Chartizard</Project>
      </ProjectsGrid>
      <SidePanel button icon="plus">
        show more
      </SidePanel>
    </ProjectsSection>
  )
}

export default Projects
