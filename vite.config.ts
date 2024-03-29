import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from  "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {// 关键代码
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    },
   },
  build: {
    lib: {
      entry: resolve(__dirname, './src/components/index.tsx'),
        name: 'common-components',
        fileName: 'common-components'
    },
    target: "es2015",
    cssTarget: "chrome61",
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
        output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React'
        },
        // format: 'cjs'
      }
    },
  }
  
})
