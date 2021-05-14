import React, { ReactElement } from "react"
// import providers
import SCProvider from "../styles/styled-components"
import StoreProvider from "../store/useStore"
// import styles
import ResetStyle from "../styles/reset"
import GlobalStyle from "../styles/global"
// import types
import { WrapElement_I } from "../@types"

// ************
// component
// ************

// component
export default function WrapRoot({ element }: WrapElement_I): ReactElement {
	return (
		<SCProvider>
			<StoreProvider>
				<ResetStyle />
				<GlobalStyle />
				{element}
			</StoreProvider>
		</SCProvider>
	)
}
