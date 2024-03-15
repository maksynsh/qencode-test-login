import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hooks': '/src/hooks',
      '@providers': '/src/providers',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@ui': '/src/ui',
      '@config': '/src/config',
      '@services': '/src/services',
      '@types': '/src/types',
    },
  },
})
