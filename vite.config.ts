import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  base: '/Dimaki-Builders-Hardware/',

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  define: {
    // Hard-code the key directly into the build (works for static hosting)
    'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify('AIzaSyBUl13obxiHKv1Cq1X1S61IM_G7sDT_nFU')
  }
})
