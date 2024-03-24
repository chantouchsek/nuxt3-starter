module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'no-invalid-position-at-import-rule': null,
  },
}
