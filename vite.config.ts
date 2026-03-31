import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // keep this if you already have it

export default defineConfig({
  plugins: [react()],
  base: '/Dimaki-Builders-Hardware/',     // ← This is the most important line
})
