import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import path from "path";
import {viteStaticCopy} from "vite-plugin-static-copy";
import svgLoader from 'vite-svg-loader'

export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets/fonts/**/*',
                    dest: 'assets/fonts',
                }
            ],
        }),
        svgLoader()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
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
