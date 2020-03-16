// @ts-nocheck
import React from "react"
import styled from "styled-components"
// import components
import { Background } from "./elements/Background"
// import store
import { useStore } from "../store/useStore"

// ***COMPONENT***
const Landing = React.forwardRef((props, ref) => {
  const { state } = useStore()

  return (
    // ref forwarded from parent
    <Section ref={ref} id="landing">
      {/* background relocates to layout.js when NOT mobile */}
      {state.isMobile && <Background />}
    </Section>
  )
})
export default React.memo(Landing)

// ***STYLES***
const Section = styled.section`
  height: 100vh;
  width: 100%;
`
