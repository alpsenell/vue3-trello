import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src")}
    ]
  },

  server: {
    host: true
  }
})
