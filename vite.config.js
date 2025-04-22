import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src', // Ensure that the root directory is 'src'
  base: '/', // Define base URL for the project
  build: {
    outDir: '../dist', // Output build files to 'dist' outside the 'src' directory
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Split vendor libraries into a separate chunk
          }
        }
      }
    }
  }
});
