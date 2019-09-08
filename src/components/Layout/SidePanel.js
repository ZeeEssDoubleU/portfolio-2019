import React from "react"
import styled from "styled-components"

// import components
import Icon from "../Icons/Icon"

// styled components
const Container = styled.div`
  display: ${props => (props.hidden ? "none" : "inherit")};
`
const PanelDiv = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.columns ? `repeat(${props.columns}, auto)` : 1};
  grid-gap: ${props => (props.columns ? "10px 14px" : "")};
  justify-self: start;
  color: white;
  font-family: ${props => props.fontFam};
  font-size: ${props => props.fontSize};
  padding: 20px 24px;
  background: hsla(0, 0%, 0%, 0.6);
  border-radius: 10px;
`
const PanelHeader = styled.div`
  display: grid;
  justify-self: start;
  font-family: Avenir-Book;
  font-size: 24px;
  color: ${props => props.theme.appGreen};
  padding: 20px 24px;
`
const PanelButton = styled.button`
  justify-self: end;
  color: ${props => props.theme.appBlue};
  font-size: 18px;
  padding: 20px 24px;
  margin-right: 24px;
  background: hsla(0, 0%, 0%, 0.6);
  /* backdrop-filter: blur(5px); */
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
const PanelLink = styled.a`
  justify-self: end;
  color: ${props => props.theme.appBlue};
  font-size: 18px;
  text-decoration: none;
  padding: 20px 24px;
  margin-right: 24px;
  background: hsla(0, 0%, 0%, 0.6);
  /* backdrop-filter: blur(5px); */
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

const SidePanel = props => {
  const panelType = () => {
    if (props.header) {
      return <PanelHeader>{props.children}</PanelHeader>
    } else if (props.button) {
      return (
        <PanelButton
          type={props.type}
          form={props.form}
          onClick={props.onClick}
        >
          <div className="action-grid">
            {props.children}
            <Icon name={props.icon} className="action-icon" />
          </div>
        </PanelButton>
      )
    } else if (props.link) {
      return (
        <PanelLink form={props.form} href={props.href}>
          <div className="action-grid">
            {props.children}
            <Icon name={props.icon} className="action-icon" />
          </div>
        </PanelLink>
      )
    } else {
      return (
        <PanelDiv
          columns={props.columns}
          fontFam={props.fontFam}
          fontSize={props.fontSize}
        >
          {props.children}
        </PanelDiv>
      )
    }
  }

  return <Container hidden={props.hidden}>{panelType()}</Container>
}

export default SidePanel
