import React, { useEffect } from "react"
// import components
import Layout from "../components/Layout"
import SEO from "../components/SEO"

// ***COMPONENT***
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
      <Layout />
    </>
  )
}

export default App
