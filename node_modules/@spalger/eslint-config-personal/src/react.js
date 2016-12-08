module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('./base')
  ],
  rules: {
    'react/require-extension': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.spec.js'
        ]
      }
    ]
  }
}
