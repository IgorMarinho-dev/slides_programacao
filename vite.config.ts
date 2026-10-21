import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// No GitHub Actions, GITHUB_REPOSITORY vem como "usuario/nome-do-repo"
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = repo && !repo.endsWith(".github.io") ? `/${repo}/` : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});