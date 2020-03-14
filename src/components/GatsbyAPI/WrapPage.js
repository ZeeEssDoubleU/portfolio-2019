import React, { useEffect } from "react"
// import store
import { useStore, setPathname, setPrevPathname } from "../../store/useStore"

// ***WRAP PAGE***
export default ({ element }) => <Functions>{element}</Functions>

// ***COMPONENT***
// used in wrap page component above
const Functions = ({ children }) => {
  const { dispatch } = useStore()
  const { pathname } = children.props.location

  useEffect(() => {
    sessionStorage.setItem("current_path", pathname)
    setPathname(dispatch, pathname)
    return () => {
      sessionStorage.setItem("current_path", pathname)
      setPrevPathname(dispatch, pathname)
    }
  }, [pathname])

  return children
}
