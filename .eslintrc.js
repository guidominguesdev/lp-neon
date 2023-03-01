module.exports = {
  extends: [
    'standard',
    'plugin:prettier/recommended',
  ],

  plugins: [
    'babel',
    'prettier',
    'import',
  ],

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
  },
}
