import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
let langServe="google.com"

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":{
        target:`${langServe}`,
        configure: (proxy,options) => {
          proxy.on('proxyReq', function(proxyReq, req, res, options) {
            console.log("request")
            proxyReq.end("hello world")
          });
          proxy.on("error",function(error,req,res) {
            console.log("error")
          })
        }
      }

    }
  },
  plugins: [react()],
})



//"What kind of courses should I focus on as an engineering major?""
//:"Calc 1,Physics, CSC-120, other gen eds: Heere's a list of courses and descriptions"
