import path from "path"
import fs from "fs"
import { GraphQLClient } from "graphql-request"
import { getIntrospectionQuery, printSchema, buildClientSchema } from "graphql"
import "dotenv/config"

// TODO: make these script variables
// env vars
const shopName = process.env.GATSBY_SHOPIFY_SHOP_NAME
const storefrontToken = process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN
const apiVersion = process.env.GATSBY_SHOPIFY_API_VERSION

// TODO: make these script variables
// shop details
const shopUrl = `${shopName}.myshopify.com`
const endpoint = `https://${shopUrl}/api/${apiVersion}/graphql.json`

// init shopify graphql client
const client = new GraphQLClient(endpoint)
client.setHeaders({
	// TODO: make these script variables
	"X-Shopify-Storefront-Access-Token": storefrontToken,
	accept: "application/json",
})

async function main() {
	const introspectionQuery = getIntrospectionQuery()

	try {
		const response = await client.request(introspectionQuery)
		// console.log("response", response) // ? debug

		const schema = buildClientSchema(response)

		const [, filepath] = process.argv // ! grabs filepath from script call
		const outputFile = path.join(path.dirname(filepath), "index.graphql")

		await fs.promises.writeFile(outputFile, printSchema(schema))
	} catch (error) {
		console.error(error)
	}
}

main()
