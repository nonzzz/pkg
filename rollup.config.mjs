import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import { swc } from 'rollup-plugin-swc3'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      { dir: 'dist', format: 'esm', exports: 'named', entryFileNames: '[name].mjs' },
      { dir: 'dist', format: 'cjs', exports: 'named', entryFileNames: '[name].js' }
    ],
    plugins: [swc()]
  },
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.d.ts' },
    plugins: [dts()]
  }
])
