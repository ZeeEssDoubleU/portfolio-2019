import React from "react"
import styled, { withTheme } from "styled-components"

// import components
import Icon from "../Icons/Icon"
import { ExternalLink } from "./CustomLink"

// styled components
const Container = styled.div`
  display: flex;
  margin: 20px auto;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: center;
  .social-link {
    position: relative;
    background: linear-gradient(
      to left,
      hsla(${props => props.theme.appGreenPartial}, 0.5),
      hsla(${props => props.theme.appBluePartial}, 0.5)
    );
    padding: 1px;
    border-radius: 50%;
    margin: 10px 10px;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover,
    &:active {
      transform: scale(1.2);
    }
    @media (min-width: ${props => props.theme.tablet + "px"}) {
      margin: 10px 20px;
    }
  }
`

const Inner = styled.div`
  background: ${props => props.theme.appBgDark};
  height: 38px;
  width: 38px;
  border-radius: 50%;
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
      <ExternalLink
        external
        className="social-link"
        tabIndex={0}
        aria-label="github profile"
        href="https://github.com/ZeeEssDoubleU"
      >
        <Inner>
          <Icon name="github" className="social-icon" />
        </Inner>
      </ExternalLink>
      <ExternalLink
        external
        className="social-link"
        tabIndex={0}
        aria-label="linkedin profile"
        href="https://www.linkedin.com"
      >
        <Inner>
          <Icon name="linkedin" className="social-icon" />
        </Inner>
      </ExternalLink>
      <ExternalLink
        external
        className="social-link"
        tabIndex={0}
        aria-label="dribbble profile"
        href="https://dribbble.com/ZeeEssDoubleU"
      >
        <Inner>
          <Icon name="dribbble" className="social-icon" />
        </Inner>
      </ExternalLink>
      <ExternalLink
        external
        className="social-link"
        tabIndex={0}
        aria-label="email"
        href="mailto: zak.williams2287@gmail.com"
      >
        <Inner>
          <Icon name="email" className="social-icon" />
        </Inner>
      </ExternalLink>
    </Container>
  )
}

export default withTheme(Social)
