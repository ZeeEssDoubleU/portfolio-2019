import React from "react"
import styled from "styled-components"

// import components
import SidePanel from "./SidePanel"
import Project from "./Project"
// import elements
import { Action } from "../elements/Action"
import { SectionHeader } from "../elements/SectionHeader"

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
  grid-auto-rows: 40px;
  align-items: end;
  margin: 30px 34px;
`

const Projects = () => {
  return (
    <ProjectsSection>
      <SidePanel justifySelf="start">
        <SectionHeader>projects</SectionHeader>
      </SidePanel>
      <ProjectsGrid>
        <Project>WatchStuff</Project>
        <Project>Github Issue Tracker</Project>
        <Project>Portfolio</Project>
        <Project>DevConnector</Project>
        <Project>Charizard</Project>
      </ProjectsGrid>
      <SidePanel justifySelf="end">
        <Action>show more +</Action>
      </SidePanel>
    </ProjectsSection>
  )
}

export default Projects
