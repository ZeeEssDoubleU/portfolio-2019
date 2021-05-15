import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
      html, body {
         font-family: Avenir;
         background: black;
         /* handles scroll behavior when app menu is open */
         overflow-x: hidden;
         overflow-y: ${({ menuExpanded, modal }) =>
				menuExpanded || modal ? "hidden" : "auto"};
         &.using-mouse :focus {
            outline: none !important;
         }
      }
`
