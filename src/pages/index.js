import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
// import styles
import { theme } from "../styles/theme"
// import components
import Layout from "../components/Layout/Layout"
import Landing from "../components/Landing"
import About from "../components/About"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

// TODO: FIX PROJECT INFO MODAL ANIMATION
// TODO: FIX MENU ICON TO DISPLAY PROPERLY IN PROD

const App = () => {
  // let the document know when mouse is being used
  useEffect(() => {
    document.body.addEventListener("mousedown", () => {
      document.body.classList.add("using-mouse")
    })
    document.body.addEventListener("keydown", () => {
      document.body.classList.remove("using-mouse")
    })
  }, [])

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

export default App
