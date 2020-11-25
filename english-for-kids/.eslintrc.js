module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "airbnb-base/legacy",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
