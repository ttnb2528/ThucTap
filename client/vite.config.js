import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { babel } from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        [
          "module-resolver",
          {
            // root: ["./src"],
            alias: {
              "~": "./src",
            },
          },
        ],
      ],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
