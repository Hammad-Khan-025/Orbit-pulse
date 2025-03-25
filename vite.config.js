import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        glegoo: ['Glegoo', 'serif'], // Existing font
        malayalam: ['Anek Malayalam', 'sans-serif'], // Add Anek Malayalam here
      },
    },
  },
})
