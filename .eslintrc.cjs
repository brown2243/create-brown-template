module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    //
    "@typescript-eslint",
    "import",
    "jsx-a11y",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    //
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    //
    "prettier",
    "eslint-config-prettier",
  ],
  settings: {
    react: {
      // version: "detect",
      version: "18.2",
    },
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "react/no-unknown-property": "off",
    "react/prop-types": "off",

    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "import/newline-after-import": "warn",
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
        pathGroupsExcludedImportTypes: ["react", "/**", "src/**"],
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
