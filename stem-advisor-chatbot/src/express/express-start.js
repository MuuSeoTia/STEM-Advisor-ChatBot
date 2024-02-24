import express from "express"
import { EOPNOTSUPP } from "node:constants";
import readline from 'node:readline';
import router from "./router";

export function express_start() {

  console.log("express")
  let app = express()

  //stupid way of making sure the server closes before vite restart
  const rl = readline.createInterface({ input: process.stdin });
  rl.once('line', (e)=>{
    if(e=="r") server.close()
    rl.close()
  })

  app.use(router)

  //put calls to llm api under /api/.... route
  // app.post('/api', (req, res) => {
  //   res.setHeader('Content-Type', 'application/json')
  //   res.end(JSON.stringify("This is a response"))
  // })

//TODO: persist questions in db, integrate w llm api, etc etc, db schema as well



  let server = app.listen(5174)
  
}



export default express_start
