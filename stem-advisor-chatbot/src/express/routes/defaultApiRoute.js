import express from "express"
import cookie_parser from "cookie-parser"
const defaultApiRoute = new express.Router()
defaultApiRoute.use((req,res,next) => {
  console.log("used")
  //default route middleware
  next()
})
defaultApiRoute.post("/",(req,res,next)=> {
  console.log(req.cookies)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify("This is a response"))
})
export default defaultApiRoute