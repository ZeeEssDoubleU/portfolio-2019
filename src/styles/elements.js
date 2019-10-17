import styled from "styled-components"

export const Section = styled.section`
  position: relative;
`
// wrapper that aligns section layouts correctly for desktop sizes
export const DesktopWrapper = styled.div`
  @media (min-width: ${props => props.theme.desktop + "px"}) {
    margin-left: 10%;
  }
`
export const Layout = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  max-width: ${props => props.theme.insetWidth};
  padding: 24px;
  overflow: auto;
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    height: auto;
    width: calc(100% - 24px * 2);
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
    padding: 48px;
    border-top: 10px inset ${props => props.theme.appGreen};
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px ${props => props.theme.appShadowWhite};
    margin: 0 auto 48px;
  }
`
export const Header = styled.div`
  justify-self: start;
  width: 100%;
  font-family: Avenir;
  font-weight: 300;
  font-size: 24px;
  color: ${props => props.theme.appGreen};
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.appGreen};
  margin: 24px 0;
`
export const Body = styled.div`
  display: grid;
  padding: 24px 0;
`
