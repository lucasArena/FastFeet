module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "prettier",
    "import",
    "react-hooks",
  ],
  rules: {
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "import/prefer-default-export": "off",
    "react/jsx-one-expression-per-line": "off",
    "global/require": "off",
    "react-native/no-raw-text": "off",
    "camelcase": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off", 
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    'import/resolver': {
        'babel-plugin-root-import': {
            rootPathSuffix: 'src'
        }
    }
  }
};
