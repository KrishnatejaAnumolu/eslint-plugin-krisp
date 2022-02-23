module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    serviceworker: true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript-prettier",
    "plugin:import/typescript",
    "plugin:jsx-a11y/strict",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "plugin:sonarjs/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  overrides: [
    {
      files: [
        "**/helpers.ts",
        "**/helpers.tsx",
        "src/helpers/**",
        "src/redux/**/actions.ts",
      ],
      rules: {
        "max-lines-per-function": ["error", 50],
      },
    },
    {
      files: ["**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
      rules: {
        "max-lines-per-function": "off",
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "krisp"],
  rules: {
    "@typescript-eslint/no-use-before-define": ["error"],
    "function-paren-newline": 0,
    "import/extensions": [
      "error",
      {
        json: "always",
        svg: "always",
        ts: "never",
      },
    ],
    "import/no-absolute-path": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "max-lines-per-function": "off",
    "multiline-comment-style": ["error", "starred-block"],
    "no-nested-ternary": "error",
    "no-throw-literal": 0,
    "no-unneeded-ternary": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-use-before-define": "off",
    "no-useless-computed-key": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": [
      2,
      {
        custom: "ignore",
        explicitSpread: "enforce",
        html: "enforce",
      },
    ],
    "react/no-direct-mutation-state": "error",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": 0,
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "krisp/no-styled-prefix": "warn",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: "src",
      },
    },
  },
};
