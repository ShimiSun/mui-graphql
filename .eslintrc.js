module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  globals: {
    React: 'writable',
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
  plugins: ['react'],
  rules: {
    'indent': 'off',
    'react/react-in-jsx-scope': 'off',
    'object-curly-spacing': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
  },
};
