import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ------------------------------------------------------------------
// 💡 IMPORTANT FIX: REPLACE 'YOUR_REPOSITORY_NAME'
// WITH THE ACTUAL NAME OF YOUR GITHUB REPOSITORY (e.g., 'my-react-app').
// THIS IS THE CAUSE OF THE BLANK PAGE.
// ------------------------------------------------------------------
const REPO_NAME = "digital-trust-initiative";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ------------------------------------------------------------------
  // 💡 BASE CONFIG ADDED FOR GITHUB PAGES DEPLOYMENT
  base: `/${REPO_NAME}/`,
  // ------------------------------------------------------------------
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-slot",
            "lucide-react",
          ],
          motion: ["framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
}));
