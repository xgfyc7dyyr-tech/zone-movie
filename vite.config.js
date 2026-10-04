import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/zone-movie/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        movie: resolve(__dirname, 'movie-single.html'),
        series: resolve(__dirname, 'series-single.html'), // برای صفحه سریال‌ها
      },
    },
  },
})