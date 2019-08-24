import React from "react"
import styled, { withTheme } from "styled-components"

// import components
import Icon from "../Layout/Icon"

// styled components
const Container = styled.div`
  display: flex;
  margin: 20px 34px;
  flex-wrap: wrap;
  justify-content: center;
`
const SocialLink = styled.a`
  position: relative;
  display: inline-block;
  background: linear-gradient(
    to left,
    rgba(${props => props.theme.appGreenPartial}, 0.5),
    rgba(${props => props.theme.appBluePartial}, 0.5)
  );
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px 10px;
  cursor: pointer;
  /* hover effect */
  transition: transform 0.2s !important;
  &:hover {
    transform: scale(1.2) !important;
  }
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    margin: 10px 20px;
  }
`
const InnerBorder = styled.div`
  position: absolute;
  /* center element */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  height: 38px;
  width: 38px;
  border-radius: 50%;
  /* hover effect */
  &:hover {
    height: 36px !important;
    width: 36px !important;
  }
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
      <SocialLink tabIndex="0">
        <InnerBorder>
          <Icon name="github" className="social-icon" />
        </InnerBorder>
      </SocialLink>
      <SocialLink tabIndex="0">
        <InnerBorder>
          <Icon name="linkedin" className="social-icon" />
        </InnerBorder>
      </SocialLink>
      <SocialLink tabIndex="0">
        <InnerBorder>
          <Icon name="dribbble" className="social-icon" />
        </InnerBorder>
      </SocialLink>
      <SocialLink tabIndex="0">
        <InnerBorder>
          <Icon name="twitter" className="social-icon" />
        </InnerBorder>
      </SocialLink>
      <SocialLink tabIndex="0">
        <InnerBorder>
          <Icon name="email" className="social-icon" />
        </InnerBorder>
      </SocialLink>
    </Container>
  )
}

export default withTheme(Social)
