module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],
  }
}
