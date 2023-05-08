import * as path from "path";
import { defineConfig, type UserConfig } from "vite";

export default defineConfig(
  (): UserConfig => ({
    base: "/",
    resolve: {
      mainFields: ["browser", "module", "main"],
      alias: [{ find: "$", replacement: path.resolve(__dirname, "src") }],
      extensions: [".js", ".ts", ".json"],
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: true,
      write: true,
    },
    worker: {
      format: "es",
    },
  }),
);
