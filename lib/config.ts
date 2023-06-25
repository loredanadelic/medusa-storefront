import Medusa from "@medusajs/medusa-js"
import { QueryClient } from "@tanstack/react-query"

const API_URL = process.env.API_URL || "http://localhost:9000"


const queryClient = new QueryClient()

const medusaClient = new Medusa({ baseUrl: API_URL, maxRetries: 3 })

export { API_URL, queryClient, medusaClient }
