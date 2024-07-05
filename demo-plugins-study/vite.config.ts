import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // 自动导入  ref 等api 映射
    // https://github.com/unplugin/unplugin-auto-import/tree/main
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        // presets
        "vue",
        "vue-router",
      ],
      dts: "./src/typings/auto-imports.d.ts",
    }),

    vueDevTools(),
  ],
});
