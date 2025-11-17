/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly STORYBOOK: string
  readonly VITE_OPENAI_API_KEY: string
  readonly VITE_GITHUB_PAGES: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
