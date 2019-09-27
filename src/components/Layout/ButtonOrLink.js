import React from "react"
import styled from "styled-components"

// import components
import Icon from "../Icons/Icon"

// styled components
export const Wrapper = styled.div`
  justify-self: end;
  height: 65px;
  color: ${props => props.theme.appBlue};
  font-size: 18px;
  text-decoration: none;
  background: hsla(${props => props.theme.appBgDarkPartial}, 0.5);
  padding: 20px 24px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 ${props => props.theme.appShadowWhite};
  cursor: pointer;
  /* hover effect */
  transition: color 0.3s !important;
  .action-grid {
    display: grid;
    grid-template-columns: auto 0;
    align-items: center;
    .action-text {
      margin-right: 0;
      transition: margin-right 0.3s !important;
    }
    .action-icon {
      justify-self: end;
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.2s !important;
    }
  }
  &:hover {
    color: ${props => props.theme.appGreen} !important;
    .action-text {
      margin-right: 25px;
    }
    .action-icon {
      opacity: 1 !important;
      transition: opacity 0.2s 0.2s !important;
    }
  }
`

const ButtonOrLink = props => (
  <Wrapper
    as={props.link ? "a" : "button"}
    type={props.type}
    form={props.form}
    href={props.href}
    target={props.target}
    rel={props.rel}
    onClick={props.onClick}
  >
    <div className="action-grid">
      <div className="action-text">{props.children}</div>
      <Icon name={props.icon} className="action-icon" />
    </div>
  </Wrapper>
)

export default ButtonOrLink
