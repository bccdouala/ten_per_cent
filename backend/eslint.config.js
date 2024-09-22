// eslint.config.js
module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['**/*'], // apply this override to all files
      excludedFiles: [
        '**/*', // ignore everything
        '!src/**', // unignore src/ and its subdirectories (but not files)
        '!src/**/*.ts', // unignore .ts files inside src/ and its subdirectories
        '!prettier.config.js', // unignore root prettier.config.js
      ],
    },
  ],
};
