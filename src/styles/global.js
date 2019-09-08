import { createGlobalStyle } from "styled-components"

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
            outline: none;
         }
      }
   }
`
