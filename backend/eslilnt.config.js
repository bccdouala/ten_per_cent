module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Use recommended TypeScript rules
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier
  ],
  rules: {
    "prettier/prettier": "error", // Show prettier issues as ESLint errors
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
