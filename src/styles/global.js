// @ts-nocheck
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
      html, body {
         font-family: Avenir;
         background: black;
         /* handles scroll behavior when app menu is open */
         overflow-x: hidden;
         overflow-y: ${props =>
           props.menuExpanded || props.modal ? "hidden" : "auto"};
         &.using-mouse :focus {
            outline: none !important;
         }
      }
`
