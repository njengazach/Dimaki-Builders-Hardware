import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  // Must match your repo name exactly
  base: '/Dimaki-Builders-Hardware/',

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
