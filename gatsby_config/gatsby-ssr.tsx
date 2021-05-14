import { RenderBodyArgs } from "gatsby"
import React from "react"
import WrapRoot from "../src/GatsbyAPI/WrapRoot"

// root element
export const wrapRootElement = WrapRoot

// render body
export function onRenderBody({ setHeadComponents }: RenderBodyArgs): void {
	const headComponents = [
		<link
			key="google_font_preconnect"
			rel="preconnect"
			href="https://fonts.googleapis.com"
		/>,
		<link
			key="datocms_preconnect"
			rel="preconnect"
			href="https://www.datocms-assets.com"
		/>,
	]

	setHeadComponents(headComponents)
}
