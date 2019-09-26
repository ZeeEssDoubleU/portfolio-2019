import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   * {
      box-sizing: border-box;
      html, body {
         margin: 0 !important;
         padding: 0 !important;
         font-family: Avenir;
         background: black;
         /* handles scroll behavior when app menu is open */
         overflow: ${props =>
           props.menuExpanded || Number.isInteger(props.activeIndex)
             ? "hidden"
             : "auto"};
         button {
            font-family: inherit;
         }
         &.using-mouse :focus {
            outline: none !important;
         }
         /* // hidden out of way initially */
         #portal {
            position: fixed;
            z-index: 999;
            top: 100vh;
            left: 0;
            /* use 100% vs 100vh because mobile browsers use % to read VISIBLE space */
            height: 100%;
            width: 100vw;
            background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
         }
      }
   }
`
export const Section = styled.section`
  position: relative;
  z-index: 10;
  display: grid;
  justify-items: center;
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    margin: 48px auto;
  }
`
export const Layout = styled.div`
  display: grid;
  align-items: start;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 24px;
  overflow: auto;
  @media (min-width: ${props => props.theme.tablet + "px"}) {
    border-top: 10px inset ${props => props.theme.appGreen};
    height: auto;
    width: calc(100% - 24px * 2);
    align-items: middle;
    padding: 48px;
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.9);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px ${props => props.theme.appShadowWhite};
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
