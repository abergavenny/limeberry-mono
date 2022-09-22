import { resolve } from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueLimeberry",
      fileName: "index",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: 'named',
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})
