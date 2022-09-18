import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

function resolve(dir: string) {
  return path.join(__dirname, "..", "..", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/zap/",
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "vue/dist/vue.esm-bundler.js",
      "balm-ui-plus": "balm-ui/dist/balm-ui-plus.esm.js",
      "balm-ui-css": "balm-ui/dist/balm-ui.css",
      "balm-ui-source": resolve("src/scripts"),
      "balm-ui-plus-source": resolve("src/scripts/plus.js"),
    },
  },
});
