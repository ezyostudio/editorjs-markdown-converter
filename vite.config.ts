import path from "path"
import { defineConfig } from "vite"
import pkg from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: /^~/, replacement: "" },
    ],
  },
  build: {
    lib: {
      name: pkg.name,
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {},
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})
