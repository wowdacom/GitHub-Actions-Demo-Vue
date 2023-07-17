import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import process from "process";

const version = +new Date();

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV !== "production" ? "./" : "/curious-mind-site/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    manifest: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: `assets/[name]_${version}.js`,
        chunkFileNames: `assets/[name]_${version}.js`,
        assetFileNames: `assets/index_${version}.[ext]`,
      },
    },
  },
});
