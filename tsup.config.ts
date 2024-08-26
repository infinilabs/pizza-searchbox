import { defineConfig, Options } from "tsup";
import { solidPlugin } from "esbuild-plugin-solid";
import { readFileSync } from "node:fs";

const VERSION = JSON.parse(readFileSync("package.json", "utf-8")).version;

export default defineConfig(
  (config) =>
    [
      {
        entry: ["src/index.tsx"],
        format: ["esm", "cjs"],
        dts: true,
        clean: !config.watch,
        minify: true,
        esbuildPlugins: [solidPlugin()],
        env: {
          VERSION,
        },
        loader: {
          ".wasm": "file",
        },
      },
      {
        entry: ["src/index.tsx"],
        format: ["iife"],
        clean: !config.watch,
        minify: true,
        esbuildPlugins: [solidPlugin()],
        env: {
          VERSION,
        },
        globalName: "__docsearch_infini__",
        platform: "browser",
        footer: {
          js: "if (!'__docsearch_infini__' in window) window.__docsearch_infini__ = __docsearch_infini__",
        },
        loader: {
          ".wasm": "file",
        },
      },
      {
        entry: ["src/index.solid.tsx"],
        format: "esm",
        dts: true,
        clean: !config.watch,
        minify: true,
        esbuildOptions: () => ({
          jsx: "preserve",
        }),
        outExtension: () => ({
          js: ".jsx",
        }),
        env: {
          VERSION,
        },
      },
      {
        entry: [
          "src/styles/index.css",
          "src/styles/variables.css",
          "src/styles/button.css",
          "src/styles/modal.css",
        ],
        clean: !config.watch,
        minify: true,
      },
    ] as Options[],
);
