import { useRef } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { Hydrate, dehydrate } from "react-query/hydration"
import { ReactQueryDevtools } from "react-query/devtools"
// import experimentals
// TODO: lock react-query to patch version until these are non-experimental
// import { broadcastQueryClient } from "react-query/broadcastQueryClient-experimental"
import { Provider_I } from "../@types"

// ************
// provider
// ************

export function ReactQueryProvider({ children, pageProps }: Provider_I) {
	const queryClientRef = useRef()
	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient({
			defaultOptions: {
				queries: {
					cacheTime: 1000 * 60 * 60 * 24, // 24 hours
				},
			},
		})
	}
	// broadcastQueryClient({ queryClient, broadcastChannel: "portolio-queries" })

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

// ************
// provider
// ************

export async function prefetchQuery_serverSide(queryKey, queryFn) {
	// create for each page request. This ensures that data is not shared between users and requests
	// https://react-query.tanstack.com/guides/ssr
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(queryKey, queryFn)

	// Use dehydrate to dehydrate the query cache and pass it to the page via the dehydratedState prop. This is the same prop that the cache will be picked up from in your _app.js
	// https://react-query.tanstack.com/guides/ssr
	return dehydrate(queryClient)
}
