import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Little_Me/', // 👈 REEMPLAZA ESTO exactamente con el nombre de tu repo en GitHub
})