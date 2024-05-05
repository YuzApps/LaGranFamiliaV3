// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'import/no-named-as-default': 'off',
      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: ['default'],
        },
      ],
    },
  }
)
