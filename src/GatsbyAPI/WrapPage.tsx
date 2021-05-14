import React, { ReactElement } from "react"
// import components
import Layout from "../components/Layout"
// import types
import { WrapElementWithProps_I } from "../@types"

// ************
// component
// ************

export default function WrapPage({
	element,
	props,
}: WrapElementWithProps_I): ReactElement {
	return <Layout {...props}>{element}</Layout>
}
