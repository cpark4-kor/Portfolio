import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/** GitHub Pages project sites live under /repo-name/; user site repo is <user>.github.io at /. Set in CI via GITHUB_PAGES_BASE. */
const pagesBase = process.env.GITHUB_PAGES_BASE;
const base =
  pagesBase && pagesBase !== ""
    ? pagesBase.endsWith("/")
      ? pagesBase
      : `${pagesBase}/`
    : "/";

export default defineConfig({
  base,
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
