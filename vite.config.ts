import * as path from "path";
import { defineConfig, type UserConfig } from "vite";

const REPO_NAME = "MWICombatSimulator";

export default defineConfig(
  ({ isPreview, command }): UserConfig => ({
    base: isPreview || command === "build" ? `/${REPO_NAME}/` : "/",
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
