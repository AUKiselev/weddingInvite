import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: "vue3",
      autoInstall: true,
      customCollections: {
        wedding: FileSystemIconLoader(".src/assets/img/icons/"),
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/assets/css/_variables.sass"`,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
