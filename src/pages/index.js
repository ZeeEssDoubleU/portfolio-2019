import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
// import styles
import "../styles/reset.css"
import { theme } from "../styles/theme"
// import components
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// import store
import { StoreProvider } from "../store/useStore"

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
      <SEO />
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <Layout />
        </StoreProvider>
      </ThemeProvider>
    </>
  )
}

export default App
