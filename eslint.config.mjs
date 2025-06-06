// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Vue-specific
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': ['error', 'always'],
    
    // JavaScript/TypeScript
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    
    // Nuxt-specific
    'nuxt/no-env-in-hooks': 'error',
    'nuxt/no-this-in-fetch-data': 'error'
  }
})
