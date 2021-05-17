import { ReactElement } from "react"
// import styles
import { ResetStyle } from "./reset"
import { GlobalStyle } from "./global"
import { ThemeProvider } from "./theme"
// import types
import { Provider_I } from "../@types"

// ************
// provider
// ************

export function StyleProvider({ children }: Provider_I): ReactElement {
	return (
		<ThemeProvider>
			<ResetStyle />
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

// ************
// exports
// ************

export * from "./theme"
export * from "./elements"
