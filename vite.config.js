import { defineConfig } from "vite";

// A plain static site. Relative paths so it works from any folder.
export default defineConfig({
  base: "./",
  build: { outDir: "dist", emptyOutDir: true },
});
