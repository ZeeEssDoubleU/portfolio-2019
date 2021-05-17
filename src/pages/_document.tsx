import Document, { Html, Head, Main, NextScript } from "next/document"
// import styles / theme
import { ServerStyleSheet as StyleSheet_sc } from "styled-components"
// import { theme } from "../styles"
// import metadata
// TODO: fix site metadata
// import site_metadata from "../site_metadata"

// ************
// component
// ************

export default class _Document extends Document {
	render() {
		return (
			<Html
			// lang={site_metadata.lang}
			>
				<Head>
					{/* PWA primary color */}
					{/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// ************
// get props
// ************

_Document.getInitialProps = async function (ctx) {
	const styleSheet_sc = new StyleSheet_sc()
	const originalRenderPage = ctx.renderPage

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) =>
					styleSheet_sc.collectStyles(<App {...props} />),
			})

		const initialProps = await Document.getInitialProps(ctx)

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{styleSheet_sc.getStyleElement()}
				</>
			),
		}
	} finally {
		styleSheet_sc.seal()
	}
}
