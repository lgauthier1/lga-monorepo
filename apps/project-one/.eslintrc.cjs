module.exports = {
  extends: ['eslint-config'].map(require.resolve),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['cypress/**/*', 'dist', '.eslintrc.js', 'cypress.config.ts'],
}
