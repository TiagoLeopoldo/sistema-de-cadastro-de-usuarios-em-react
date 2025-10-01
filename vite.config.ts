import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sistema-de-cadastro-de-usuarios-em-react/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
