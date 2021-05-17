import { useEffect } from "react"
// import components
import Home from "../components/Pages/Home"
// import queries
import { prefetchQuery_serverSide } from "../data/reactQueryClient"
import { getHomeData } from "../data/queries"

// **********
// component
// **********

export default function HomePage({ data }) {
	// let the document know when mouse is being used
	useEffect(() => {
		document.body.addEventListener("mousedown", () => {
			document.body.classList.add("using-mouse")
		})
		document.body.addEventListener("keydown", () => {
			document.body.classList.remove("using-mouse")
		})
	}, [])

	return <Home {...data} />
}

// ************
// get props
// ************

export async function getStaticProps() {
	const { data } = await getHomeData()

	return {
		props: {
			data,
			dehydratedState: await prefetchQuery_serverSide(
				"homeData",
				getHomeData,
			),
		},
	}
}
