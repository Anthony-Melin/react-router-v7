import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { reactRouter } from "@react-router/dev/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactRouter()],
})