import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/orderly/',
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext"
    },
    include: ['game'],
  },
  build: {
    target: 'esnext',
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
  }
})
