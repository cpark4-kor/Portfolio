import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * Relative base so built CSS/JS/assets resolve under GitHub Pages project URLs
 * (e.g. /Portfolio/) without CI needing the exact repo name or casing.
 */
export default defineConfig({
  base: "./",
  root: ".",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        project: resolve(__dirname, "project.html"),
      },
    },
  },
});
