import express from "express"
import readline from 'node:readline';


export function express_start() {

  console.log("express")
  let app = express()

  //stupid way of making sure the server closes before vite restart
  const rl = readline.createInterface({ input: process.stdin });
  rl.once('line', (e)=>{
    if(e=="r") server.close()
    rl.close()
  })

  app.post('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify("This is a response"))
  })
  app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify("This is a response"))
  });


  let server = app.listen(5174)
  
}



export default express_start
