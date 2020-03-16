import styled from "styled-components"

export const Layout = styled.section`
  position: relative;
  display: grid;
  /* height: 100%; */
  width: 100%;
  max-width: ${props => props.theme.insetWidth};
  padding: 24px;
  overflow: hidden;
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    height: auto;
    width: calc(100% - 24px * 2);
    padding: 48px;
    border-top: 10px inset ${props => props.theme.appGreen};
    margin: 0 auto 48px;

    background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px ${props => props.theme.appShadowWhite};
  }
`
export const Header = styled.div`
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.appGreen};
  margin: 24px 0;

  justify-self: start;
  font-family: Avenir;
  font-weight: 300;
  font-size: 24px;
  color: ${props => props.theme.appGreen};
`
export const Body = styled.div`
  display: grid;
  padding: 24px 0;
`
