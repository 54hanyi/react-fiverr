import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-fiverr/',
  plugins: [react()],
  server: { // 將 port 指定為 3000
    port: 3000,
  }
})
