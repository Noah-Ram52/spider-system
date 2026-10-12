import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/spider-system/",
  plugins: [react()],
  server: {
    port: 3000,
  },
})
