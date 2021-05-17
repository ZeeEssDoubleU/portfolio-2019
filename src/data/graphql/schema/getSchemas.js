import "dotenv/config"

// ************
// datocms
// ************

import { getSchema } from "./getSchema"

const datocmsToken = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN
const datocmsEndpoint = `https://graphql.datocms.com/`

getSchema("datocms", datocmsEndpoint, "authorization", `Bearer ${datocmsToken}`)
