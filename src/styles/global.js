import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   * {
      box-sizing: border-box;
      html, body {
         margin: 0 !important;
         padding: 0 !important;
         background: ${props => props.theme.appBgDarkGrad};
         font-family: Avenir;
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
      }
   }
`
export const Section = styled.section`
  position: relative;
  z-index: 10;
  display: grid;
  max-width: 1400px;
  padding: 30px 0;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: ${props => props.theme.desktop}) {
    will-change: transform;
    background: hsla(${props => props.theme.appBgDarkPartial}, 0.4);
    margin: 20px auto;
    border-radius: 10px;
    filter: drop-shadow(2px 4px 6px black);
    backdrop-filter: blur(5px);
  }
`
export const Header = styled.div`
  justify-self: start;
  font-family: Avenir-Book;
  font-size: 24px;
  color: ${props => props.theme.appGreen};
  padding: 20px 24px;
  filter: drop-(2px 4px 6px black);
`
