import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      textShadow: {
        'outline': '0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff',
      }
    }
  },
  plugins: [react(),tailwindcss(),],
})
