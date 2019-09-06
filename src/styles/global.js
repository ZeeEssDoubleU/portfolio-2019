import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   * {
      box-sizing: border-box;
      html, body {
         margin: 0 !important;
         padding: 0 !important;
         background: ${props => props.theme.appBgDark};
         font-family: Avenir;
         /* handles scroll behavior when app menu is open */
         height: ${props =>
           props.menuExpanded || props.activeIndex ? "100vh" : "inherit"};
         overflow-y: ${props =>
           props.menuExpanded || props.activeIndex ? "hidden" : "inherit"};
         section {
            overflow-x: hidden;
         }
         button {
            font-family: inherit;
         }
         &.using-mouse :focus {
            outline: none;
         }
      }
   }
`
