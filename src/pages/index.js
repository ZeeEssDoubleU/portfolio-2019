import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
// import styles
import { theme } from "../styles/theme"
// import components
import Layout from "../components/Layout/Layout"
import Landing from "../components/Landing"
import About from "../components/About"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zachary Williams Portfolio</title>
        <meta
          name="description"
          content="Zachary Williams' web development portfolio."
        />
        <meta
          name="theme-color"
          content="linear-gradient(153deg, #323232 0%, black 100vh)"
        />{" "}
      </Helmet>
      <ThemeProvider theme={theme}>
        <Layout>
          <Landing />
          <About />
          <Projects />
          <Contact />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
