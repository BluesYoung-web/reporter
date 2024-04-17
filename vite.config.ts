/*
 * @Author: zhangyang
 * @Date: 2022-10-19 10:48:36
 * @LastEditTime: 2024-04-17 19:52:45
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
    sourcemap: true,
    target: ['chrome58'],
    cssTarget: ['chrome58'],
  },

  define: {
    __VERSION__: JSON.stringify(version),
  },
})
