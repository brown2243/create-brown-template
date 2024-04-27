module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    //
    "eslint-config-prettier",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    //
    "prettier",
    "@typescript-eslint",
    "react-hooks",
    "import",
  ],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "after",
          },
          {
            pattern: "@*/**",
            group: "external",
            position: "before",
          },
          {
            pattern: "src/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "@*/**", "/**", "src/**"],
        groups: ["builtin", "external", "internal", ["parent", "sibling", "index"], ["object", "type"]],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
