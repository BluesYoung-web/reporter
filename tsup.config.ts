/*
 * @Author: zhangyang
 * @Date: 2023-01-05 16:13:27
 * @LastEditTime: 2024-04-17 19:01:29
 * @Description:
 */
import { defineConfig } from 'tsup'

export default defineConfig((_options) => {
  return {
    entry: ['src/index.ts'],
    dts: true,
    format: 'esm',
  }
})
