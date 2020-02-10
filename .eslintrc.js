module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    eqeqeq: 2,
    indent: ['error', 'tab'],
    'no-var': 2,
    'prefer-const': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
        varsIgnorePattern: '[iI]gnored'
      }
    ],
    'no-alert': 2,
    'no-trailing-spaces': 2,
    radix: 2,
  }
}
