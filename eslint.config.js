import { globalIgnores } from 'eslint/config'
import baseConfig from '@trigen/eslint-config'
import bundlerConfig from '@trigen/eslint-config/bundler'
import reactConfig from '@trigen/eslint-config/react'
import tsTypeCheckedConfig from '@trigen/eslint-config/typescript-type-checked'
import testConfig from '@trigen/eslint-config/test'
import storybookConfig from '@trigen/eslint-config/storybook'
import env from '@trigen/eslint-config/env'

export default [
  globalIgnores(['**/dist/']),
  ...baseConfig,
  ...bundlerConfig,
  ...reactConfig,
  ...tsTypeCheckedConfig,
  ...testConfig,
  ...storybookConfig,
  env.browser,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
]
