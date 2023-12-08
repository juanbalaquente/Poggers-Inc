import { defineConfig } from 'vite'
import dns from 'dns'
import react from '@vitejs/plugin-react'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 3000
  }
})
