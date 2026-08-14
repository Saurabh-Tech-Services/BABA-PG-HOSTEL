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
        // Use the vercel preset when deploying — nitro auto-detects Vercel CI,
        // but being explicit avoids surprises. For local dev this is ignored.
        preset: process.env.VERCEL ? "vercel" : "node-server",
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
