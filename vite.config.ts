/*
 * @Author: zhangyang
 * @Date: 2022-10-19 10:48:36
 * @LastEditTime: 2024-04-18 08:10:04
 * @Description:
 */
/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { version } from './package.json'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['umd', 'es', 'cjs'],
      fileName: format => `index.${format}.js`,
      name: 'YoungReporter',
    },
    minify: true,
    sourcemap: false,
    target: ['chrome58'],
    cssTarget: ['chrome58'],
  },

  define: {
    __VERSION__: JSON.stringify(version),
  },
})
