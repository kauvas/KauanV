import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages serves this project from /KauanV/, not the domain root.
  base: "/KauanV/",
  plugins: [react()],
});
