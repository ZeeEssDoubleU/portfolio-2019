import React from "react"
import { ThemeProvider } from "styled-components"
import { StoreProvider } from "../../store/useStore"
// import styles
import ResetStyle from "../../styles/reset"
import GlobalStyle from "../../styles/global"
import { theme } from "../../styles/theme"

// ***WRAP ROOT***
export default ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <ResetStyle />
        <GlobalStyle />
        {element}
      </StoreProvider>
    </ThemeProvider>
  )
}
