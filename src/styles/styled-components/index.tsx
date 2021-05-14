import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
// import types
import { Provider_I } from "../../@types"

// ************
// module declaration
// ************

// merge theme (below) to DefaultTheme
declare module "styled-components" {
	type ThemeType = typeof theme
	export interface DefaultTheme extends ThemeType {}
}

// ************
// provider
// ************

export default function SCProvider({ children }: Provider_I) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

// ************
// exports
// ************

export { theme } from "./theme"
