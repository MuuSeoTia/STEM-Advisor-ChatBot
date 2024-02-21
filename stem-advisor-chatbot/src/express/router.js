import express from "express"
import defaultApiRoute from "./routes/defaultApiRoute"

const router = new express.Router()


//TODO: routes for storing queries, conversation uuids from cookies set in client, routes that proxy to other local dbs - pinecone etc
router.use("/api",defaultApiRoute)

export default router