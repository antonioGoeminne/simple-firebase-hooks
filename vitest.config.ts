import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './tests/setup',
      environment: 'jsdom',
      coverage: {
        exclude: [
          'commitlint.config.cjs',
          '.eslintrc.cjs',
          'src/App.tsx',
          'src/main.tsx',
          'tests/firebase.ts'
        ],
        thresholds: {
          lines: 30,
          functions: 30,
          branches: 30,
          statements: 30
        }
      }
    }
  })
)
