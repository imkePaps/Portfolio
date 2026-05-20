import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import sitemap from "vite-plugin-sitemap";
import { projects } from "./src/data/projects";

export default defineConfig({
  plugins: [react(),
     sitemap({
      hostname: "https://imkepaps.com",
      dynamicRoutes: projects.map(
        (project) =>
          `/projects/${project.slug}`
      ),
    }),
  ],
  
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
