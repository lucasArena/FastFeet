module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'import',
    'react-hooks'
  ],
  rules: {
    "react/forbid-prop-types": "off",
    "camelcase" : "off",
    "react/jsx-props-no-spreading": "off",
    'prettier/prettier' : 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', 'jsx']}],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['tron']}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': 'off'
  },
};
