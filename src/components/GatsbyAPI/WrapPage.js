import React from "react"
// import components
import Layout from "../Layout"

// **********
// component
// **********

export default ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
