import React from "react"
import styled from "styled-components"

// import components
import Icon from "./Icon"

// styled components
const LandingSection = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  justify-items: center;
  align-items: center;
  align-content: center;
  /* svg icons down in component */
  .logo {
    width: calc(0.7 * 100vw);
    max-width: calc(0.3 * 100vh);
  }
  .down-arrow {
    position: absolute;
    width: 30px;
    top: calc(100vh - 40px);
    left: calc(50vw - 30px / 2);
  }
`

const Landing = () => {
  return (
    <LandingSection>
      <Icon name="logo" className="logo" />
      <Icon name="down arrow" className="down-arrow" />
    </LandingSection>
  )
}

export default Landing
