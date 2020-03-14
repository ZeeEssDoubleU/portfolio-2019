import React, { useEffect } from "react"
// import store
import { useStore, setPathname, setPrevPathname } from "../../store/useStore"

// ***WRAP PAGE***
export default ({ element }) => <Layout>{element}</Layout>

// ***COMPONENT***
// used in wrap page component above
const Layout = ({ children }) => {
  console.log("children", children)

  return <>{children}</>
}
