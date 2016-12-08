var config = {
  parser: 'babel-eslint',
  plugins: [
    'eslint-plugin-babel'
  ],
  rules: {
    // overrides for airbnb config
    semi: [2, 'never'],
    'max-len': ['error', 120],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'class-methods-use-this': 'off',

    // import plugin is awesome sauce
    'import/no-internal-modules': 'error',
    'import/named': 'error',
    'import/prefer-default-export': 'off',

    // babel overrides
    'babel/generator-star-spacing': 'error',
    'babel/new-cap': 'error',
    'babel/array-bracket-spacing': ['error', 'always'],
    'babel/object-curly-spacing': ['error', 'always'],
    'babel/object-shorthand': 'error',
    'babel/arrow-parens': ['error', 'as-needed'],
  }
}

Object.keys(config.rules)
  .forEach(function (ruleName) {
    if (ruleName.indexOf('babel/') === 0) {
      config.rules[ruleName.slice(6)] = 'off'
    }
  })

module.exports = config
