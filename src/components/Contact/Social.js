import React from "react"
import styled, { withTheme } from "styled-components"

// import components
import Icon from "../Icons/Icon"

// styled components
const Container = styled.div`
  display: flex;
  margin: 20px 34px;
  flex-wrap: wrap;
  justify-content: center;
`
const Border = styled.a`
  position: relative;
  background: linear-gradient(
    to left,
    hsla(${props => props.theme.appGreenPartial}, 0.5),
    hsla(${props => props.theme.appBluePartial}, 0.5)
  );
  padding: 1px;
  border-radius: 50%;
  margin: 10px 10px;
  filter: drop-shadow(2px 4px 6px black);
  cursor: pointer;
  /* hover effect */
  transition: transform 0.2s !important;
  &:hover,
  &:active {
    transform: scale(1.2) !important;
  }
  @media (min-width: ${props => props.theme.tablet}) {
    margin: 10px 20px;
  }
`
const Inner = styled.div`
  background: black;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  /* hover effect */
  .social-icon {
    position: absolute;
    /* center element */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 18px;
    width: 18px;
    color: ${props => props.theme.appGreen};
  }
`

const Social = props => {
  return (
    <Container>
      <Border tabIndex={0}>
        <Inner>
          <Icon name="github" className="social-icon" />
        </Inner>
      </Border>
      <Border tabIndex={0}>
        <Inner>
          <Icon name="linkedin" className="social-icon" />
        </Inner>
      </Border>
      <Border tabIndex={0}>
        <Inner>
          <Icon name="dribbble" className="social-icon" />
        </Inner>
      </Border>
      <Border tabIndex={0}>
        <Inner>
          <Icon name="twitter" className="social-icon" />
        </Inner>
      </Border>
      <Border tabIndex={0}>
        <Inner>
          <Icon name="email" className="social-icon" />
        </Inner>
      </Border>
    </Container>
  )
}

export default withTheme(Social)
