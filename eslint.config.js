import nuxt from './.nuxt/eslint.config.mjs'

export default [
  ...nuxt,
  {
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
]
