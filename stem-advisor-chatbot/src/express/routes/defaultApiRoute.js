import express from "express"
const defaultApiRoute = new express.Router()

defaultApiRoute.use((req,res,next) => {
  //default route middleware
  next()
})
defaultApiRoute.post((req,res,next)=> {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).end(JSON.stringify("This is a response"))
})
export default defaultApiRoute