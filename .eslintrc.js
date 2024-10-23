module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:sort/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'sort',
    'prettier',
    'testing-library',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'testing-library/no-node-access': 'off',
    'testing-library/no-render-in-lifecycle': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
