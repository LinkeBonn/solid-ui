import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  build:
      {
        lib:
            {
              entry: resolve(__dirname, "src/index.ts"),
              name: "Solid-UI",
              fileName: "solid-ui",
            },
        rollupOptions:
            {
              external: ["vue"],
              output:
                  {
                    globals:
                        {
                          vue: "Vue",
                        },
                  },
            },
      },
})
