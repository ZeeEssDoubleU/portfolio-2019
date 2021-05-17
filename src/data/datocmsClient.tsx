import { GraphQLClient } from "graphql-request"
import axios from "axios"

// env vars
const token = process.env.DATOCMS_API_TOKEN

// ************
// graphql client
// ************

// datocms details
const endpoint = `https://graphql.datocms.com/`

// init shopify graphql client
export const datocmsGraphQLClient = new GraphQLClient(endpoint)

datocmsGraphQLClient.setHeaders({
	authorization: token,
	Accept: "application/json",
} as HeadersInit) // ! for TS warning

// ************
// axios client
// ************

export const datocmsAxiosClient = axios.create({
	baseURL: `https://graphql.datocms.com/`,
	headers: {
		authorization: `Bearer ${token}`,
	},
})

export async function getDatocmsData(query) {
	const { data } = await datocmsAxiosClient({
		method: "POST",
		data: { query },
	})

	// console.log("data:", data) // ? debug
	return data
}
