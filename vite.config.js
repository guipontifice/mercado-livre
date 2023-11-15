import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: './mercado-livre-clone-privateKey.key',
      cert: './mercado-livre-clone.crt'

    }
  },
  proxy: {
    '/api': {
      target: 'https://api.mercadolibre.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }
})
 