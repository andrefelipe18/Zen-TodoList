import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    alias: {
      '@/': new URL('./', import.meta.url).pathname, 
    }
  },
  plugins: [
    vue()
  ],
  
})