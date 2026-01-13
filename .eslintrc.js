module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'google',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Google style guide specific overrides for React
    'require-jsdoc': 'off', // React components don't need JSDoc
    'valid-jsdoc': 'off',
    'max-len': ['error', {code: 100, ignoreUrls: true, ignoreStrings: true}],
    'no-invalid-this': 'off', // React class components use 'this'
    'react/prop-types': 'warn', // Warn on missing prop-types
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
  },
};
