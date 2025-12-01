// vite.config.js (CÓDIGO CORREGIDO)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 1. Opciones de Vite (como 'base')
  // La propiedad 'base' va AQUÍ, dentro de defineConfig.
  base: '/', 
  
  // 2. Plugins
  plugins: [
    // La función react() se llama SIN argumentos (o solo con opciones del plugin).
    // NO se le pasa el objeto de configuración de Vite.
    react() 
  ],
})
