import React, { useEffect } from "react"
// import components
import Layout from "../Layout"

// ***COMPONENT***
export default ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
