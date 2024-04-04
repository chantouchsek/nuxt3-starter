import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': 'off',
  },
}).override('nuxt/stylistic', {
  rules: {
    '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true }],
  },
})
