import { ReactElement } from "react"
// import providers
import { StyleProvider } from "../styles"
import StoreProvider from "../store/useStore"
import { ReactQueryProvider } from "../data/reactQueryClient"
// import components
import Layout from "../components/Layout"
// import types
import { AppProps } from "next/dist/next-server/lib/router/router"

// ************
// component
// ************

export default function _App({ Component, pageProps }: AppProps): ReactElement {
	return (
		<StyleProvider>
			<ReactQueryProvider {...{ pageProps }}>
				<StoreProvider {...pageProps}>
					{/* // TODO: reimplement layout */}
					<Layout {...pageProps}>
						<Component {...pageProps} />
					</Layout>
				</StoreProvider>
			</ReactQueryProvider>
		</StyleProvider>
	)
}
