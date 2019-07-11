import React from "react"
import styled, { ThemeProvider } from "styled-components"

// import styles
import { theme } from "../styles/theme"

// import components
import Layout from "../components/Layout"
import Landing from "../components/Landing"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

// styled components

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}
