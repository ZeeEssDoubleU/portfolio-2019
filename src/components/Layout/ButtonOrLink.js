import React from "react"
import styled from "styled-components"

// import components
import Icon from "../Icons/Icon"

// styled components
export const Wrapper = styled.div`
  display: ${props => (props.hidden ? "none" : "inherit")};
  justify-self: end;
  color: ${props => props.theme.appBlue};
  font-size: 18px;
  text-decoration: none;
  background: hsla(0, 0%, 0%, 0.5);
  padding: 20px 24px;
  margin-right: 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  /* hover effect */
  transition: color 0.2s !important;
  .action-grid {
    display: grid;
    grid-template-columns: auto 0;
    align-items: center;
    .action-icon {
      font-size: 14px;
      justify-self: end;
      opacity: 0;
    }
  }
  &:hover {
    color: ${props => props.theme.appGreen} !important;
    .action-grid {
      grid-template-columns: auto 25px;
    }
    .action-icon {
      opacity: 1 !important;
      transition: opacity 0.3s 0.1s !important;
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
    hidden={props.hidden}
  >
    <div className="action-grid">
      {props.children}
      <Icon name={props.icon} className="action-icon" />
    </div>
  </Wrapper>
)

export default ButtonOrLink
