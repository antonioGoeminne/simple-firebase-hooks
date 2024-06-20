import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'simple-firebase-hooks'
    },
    sourcemap: true,
    minify: true,
    target: 'es6',
    rollupOptions: {
      external: ['react', 'react-dom', 'firebase'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          firebase: 'Firebase'
        }
      }
    }
  },
  plugins: [react(), dts({ include: 'src', exclude: '**/*.test.ts' })]
})
