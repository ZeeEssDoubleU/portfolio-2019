import { GraphQLClient } from "graphql-request"
import axios from "axios"

// datocms details
export const datocmsToken = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN
export const datocmsEndpoint = `https://graphql.datocms.com/`

// ************
// graphql client
// ************

// init shopify graphql client
export const datocmsGraphQLClient = new GraphQLClient(datocmsEndpoint)

datocmsGraphQLClient.setHeaders({
	authorization: datocmsToken,
	Accept: "application/json",
} as HeadersInit) // ! for TS warning

// ************
// axios client
// ************

export const datocmsAxiosClient = axios.create({
	baseURL: `https://graphql.datocms.com/`,
	headers: {
		authorization: `Bearer ${datocmsToken}`,
	},
})

export async function getDatocmsData(query) {
	const { data } = await datocmsAxiosClient({
		method: "POST",
		data: { query },
	})

	return data
}
