import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { fileURLToPath } from "node:url";
import unfonts from "unplugin-fonts/vite";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: `${dirname}/src`,
      },
    ],
  },
  plugins: [
    react(),
    unfonts({
      custom: {
        families: [
          {
            name: "GeistSans",
            src: `./src/assets/fonts/Geist/webfonts/*.woff2`,
          },
          {
            name: "GeistMono",
            src: `./src/assets/fonts/GeistMono/webfonts/*.woff2`,
          },
        ],
      },
    }),
  ],
});
