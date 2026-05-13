import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replace(/\\/g, "/");
          const parts = normalized.split("/node_modules/");

          if (parts.length <= 1) {
            return;
          }

          const pkgPath = parts[parts.length - 1];
          const packageName = pkgPath.startsWith("@")
            ? pkgPath.split("/").slice(0, 2).join("/")
            : pkgPath.split("/")[0];

          if (packageName === "three") {
            return "three-core";
          }
          if (packageName === "@react-three/fiber") {
            return "r3f";
          }
          if (packageName === "@react-three/drei") {
            return "r3f-drei";
          }
          if (packageName === "framer-motion") {
            return "framer-motion";
          }
        },
      },
    },
    sourcemap: true,
    reportCompressedSize: false,
  },
});
