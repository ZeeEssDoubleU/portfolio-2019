import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
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

// styled components
const Container = styled.div`
  /* TODO: Make responsive.  Remove max-width */
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(122deg, #323232 0%, #000000 70%);
  background-attachment: fixed;
`

const App = () => {
  const [showNav, setShowNav] = useState(false)
  // show nav if landing section not visible
  const toggleNav = landingInView => {
    setShowNav(!landingInView)
  }

  // debug
  console.log("Show nav?", showNav)

  // let the document know when mouse is being used
  document.body.addEventListener("mousedown", () => {
    document.body.classList.add("using-mouse")
  })
  document.body.addEventListener("keydown", () => {
    document.body.classList.remove("using-mouse")
  })

  return (
    <ThemeProvider theme={theme}>
      <NavContext.Provider value={{ showNav, toggleNav }}>
        <Container>
          <Layout>
            <Landing />
            <About />
            <Projects />
            <Contact />
          </Layout>
        </Container>
      </NavContext.Provider>
    </ThemeProvider>
  )
}

export default App
