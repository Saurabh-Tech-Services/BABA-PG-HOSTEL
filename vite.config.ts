import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    // tanstackStart already bundles TanStackRouterVite + nitro internally —
    // do NOT add TanStackRouterVite separately or you get a rename race condition.
    tanstackStart({
      server: {
        entry: "src/server.ts",
        // "vercel" preset makes nitro output to .vercel/output/ (Build Output API v3)
        // which Vercel auto-detects — no outputDirectory needed in vercel.json.
        // For local dev, npm run dev uses Vite's dev server and ignores this.
        preset: "vercel",
      },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": import.meta.dirname + "/src",
    },
    tsconfigPaths: true,
  },
});
