module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "@swxtz/eslint-config/react"
  ],

  "react/react-in-jsx-scope": "off",
};
