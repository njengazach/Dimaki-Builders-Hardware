import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  // This is the key fix for GitHub Pages
  base: '/Dimaki-Builders-Hardware/',

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
