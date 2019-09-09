import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
// import styles
import { theme } from "../styles/theme"
// import components
import Layout from "../components/Layout/Layout"
import Landing from "../components/Landing"
import About from "../components/About"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

// create context
export const NavContext = React.createContext({})

// TODO: FIX PROJECT INFO MODAL ANIMATION
// TODO: FIX MENU ICON TO DISPLAY PROPERLY IN PROD

const App = () => {
  const [showNav, setShowNav] = useState(false)
  // show nav if landing section not visible
  const toggleNav = landingInView => {
    setShowNav(!landingInView)
  }

  // // debug
  // console.log("Show nav?", showNav)

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
      <NavContext.Provider value={{ showNav, toggleNav }}>
        <Layout>
          <Landing />
          <About />
          <Projects />
          <Contact />
        </Layout>
      </NavContext.Provider>
    </ThemeProvider>
  )
}

export default App
