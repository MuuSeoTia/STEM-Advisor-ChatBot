import path from "path"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: null,
    port: 5173,
    proxy: {
      "/api": { target: "http://localhost:5174", changeOrigin: true }
    }
  }
})