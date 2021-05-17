import { ReactElement, useEffect } from "react"
// import theme
import { ThemeProvider as SCThemeProvider } from "styled-components"
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

export function ThemeProvider({ children }: Provider_I): ReactElement {
	// remove server side styles
	// avoids duplicates when styles hydrate on client
	async function removeServerStyles() {
		const jssStyles = await document.querySelector("#jss-server-side")
		jssStyles?.parentNode.removeChild(jssStyles)
	}

	useEffect(() => {
		removeServerStyles()
	}, [])

	return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
}

// ************
// exports
// ************

export { theme } from "./theme"
