import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
   * {
      box-sizing: border-box;
      html, body {
         margin: 0;
         padding: 0;
         background: black;
         font-family: Avenir;
         /* handles scroll behavior when app menu is open */
         height: ${props => (props.menuExpanded ? "100vh" : "inherit")};
         overflow: ${props => (props.menuExpanded ? "hidden" : "inherit")};
         button {
            font-family: inherit;
         }
         &.using-mouse :focus {
            outline: none;
         }
      }
   }
`
