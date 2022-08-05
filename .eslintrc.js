module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/react"
  ],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': ['off'],
    'object-shorthand': ['warn', 'never'],
  },
};