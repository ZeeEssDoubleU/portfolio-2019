import { Component, useEffect } from "react"
import { createPortal } from "react-dom"

const Portal = props => {
  // portal destination
  const portalRoot =
    typeof document !== "undefined" ? document.querySelector("#portal") : null
  // create modal element to append to portal
  const modal =
    typeof document !== "undefined" ? document.createElement("div") : null

  useEffect(() => {
    portalRoot.appendChild(modal)
    // unmount function
    return () => portalRoot.removeChild(modal)
  }, [])

  // create portal between children and modal
  // (modal appended to portal DOM node in useEffect above)
  return modal ? createPortal(props.children, modal) : null
}

export default Portal
