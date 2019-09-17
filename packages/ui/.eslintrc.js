module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-app',
    'prettier',
    'jest',
    'compat',
    'sonarjs',
    'optimize-regex',
  ],
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/prefer-interface': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-warning-comments': ["warn", { "terms": ["todo", "fixme"], "location": "anywhere" }],
    'optimize-regex/optimize-regex': 'warn',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off', // Conflicts with Prettier
    'react/prop-types': 'off', // Not needed when using TypeScript
    'sonarjs/no-duplicate-string': 'warn',
    'no-underscore-dangle': 'off' // Disabled in order to name export __tests__
    
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
