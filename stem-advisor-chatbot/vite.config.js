import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {express_start} from './src/express/express-start.js'

express_start()
export default defineConfig({
  server: {
    watch: null,
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5174",
        changeOrigin: true,
      }
    }
  },
  plugins: [
     react()]

})