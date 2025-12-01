import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Asegúrate de que 'base' esté AQUÍ (opciones de Vite)
  base: '/', 
  
  plugins: [
    // Asegúrate de que react() esté llamado SIN argumentos
    react() 
  ],
})
