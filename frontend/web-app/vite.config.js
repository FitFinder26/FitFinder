import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // Allow overriding the base path for GitHub Pages deployments (e.g., "/FitFinder/").
  // Default to the repo name when running in CI to avoid absolute-root asset 404s on gh-pages.
  base:
    process.env.VITE_BASE_PATH ??
    (process.env.GITHUB_ACTIONS ? "/FitFinder/" : "/"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared"),
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    port: 8080,
  },
});
