import express from "express"
import defaultApiRoute from "./routes/defaultApiRoute"
import cookie_parser from "cookie-parser"

const router = new express.Router()

//TODO: routes for storing queries, conversation uuids from cookies set in client, routes that proxy to other local dbs - pinecone etc
router.use(cookie_parser())
router.use("/api",defaultApiRoute)

export default router