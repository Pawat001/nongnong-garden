import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // TODO: Copilot ช่วยตั้งค่า server proxy
  // 1. เพิ่ม configuration 'server'
  // 2. ข้างใน server, เพิ่ม 'proxy' object
  // 3. ตั้งค่า proxy สำหรับ path ที่ขึ้นต้นด้วย '/api'
  // 4. ให้ 'target' ชี้ไปที่ backend ของเรา คือ 'http://localhost:3000'
  // 5. ตั้งค่า 'changeOrigin' เป็น true
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
