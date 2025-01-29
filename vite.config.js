import path from "path"
import { fileURLToPath } from 'url'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2020', // Updated to ES2020 which supports BigInt
    sourcemap: true,  // Enable source maps for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          transformers: ['@huggingface/transformers']
        }
      }
    },
    chunkSizeWarningLimit: 2000, // Increase chunk size limit for ML models
  },
  optimizeDeps: {
    exclude: ['@huggingface/transformers'] // Prevent optimization of transformers.js
  }
});
