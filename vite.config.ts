import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3-trello/',
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
