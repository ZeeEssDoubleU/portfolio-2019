import fs from "fs"
import axios from "axios"
import "dotenv/config"

const token = process.env.DATOCMS_API_TOKEN

// write file to local filesystem
export async function downloadAsset(asset, fileName, filePath) {
	await fs.writeFile(filePath, asset, (err) => {
		if (err) console.log(err)
		else console.log(`*** ${fileName} icon was saved!`) // ? debug
	})
}

// axios call to datocms graphql endpoint
export async function getAssetByTitle(title) {
	const response = await axios({
		url: `https://graphql.datocms.com/`,
		method: "POST",
		headers: {
			authorization: `Bearer ${token}`,
		},
		data: {
			query: `
				{
					asset(filter: {title: {eq: "${title}"}}) {
						title
						image {
							url
						}
					}
				}
			`,
		},
	})

	const assetUrl = response.data.data.asset.image.url
	const { data: asset } = await axios.get(assetUrl)
	return asset
}

// fetch and save icon to local path
export default async function saveIcon(assetName, fileName, filePath) {
	try {
		const asset = await getAssetByTitle(assetName)
		downloadAsset(asset, fileName, filePath)

		return asset
	} catch (error) {
		console.error(error) // ? debug
	}
}
