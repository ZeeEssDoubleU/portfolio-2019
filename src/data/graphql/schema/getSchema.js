import path from "path"
import fs from "fs"
import { GraphQLClient } from "graphql-request"
import { getIntrospectionQuery, printSchema, buildClientSchema } from "graphql"

// init shopify graphql client
export async function getSchema(client, endpoint, tokenKey, tokenValue) {
	const graphqlClient = new GraphQLClient(endpoint)
	graphqlClient.setHeaders({
		tokenKey: tokenValue,
		accept: "application/json",
	})

	const introspectionQuery = getIntrospectionQuery()

	try {
		const response = await graphqlClient.request(introspectionQuery)
		// console.log("response", response) // ? debug

		const schema = buildClientSchema(response)

		const [, filepath] = process.argv // ! grabs filepath from script call
		const outputFile = path.join(path.dirname(filepath), `${client}.graphql`)

		await fs.promises.writeFile(outputFile, printSchema(schema))
	} catch (error) {
		console.error(error)
	}
}
