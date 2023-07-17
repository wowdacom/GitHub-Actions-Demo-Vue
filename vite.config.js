import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const version = +new Date();

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV !== "production" ? "./" : "/GitHub-Actions-Demo-Vue/",
  plugins: [vue()],
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
