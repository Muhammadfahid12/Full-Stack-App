import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{ //server configuration.
    proxy:{
      '/api': 'http://localhost:3000', //request will always sent to the same server
    }
  },
  plugins: [react()],
})
