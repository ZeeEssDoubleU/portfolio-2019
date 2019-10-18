import React from "react"
import { ThemeProvider } from "styled-components"
import { StoreProvider } from "../../store/useStore"
// import styles
import { theme } from "../../styles/theme"

export default ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>{element}</StoreProvider>
    </ThemeProvider>
  )
}
