module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "no-case-declarations": "off",
        "no-undef": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-extra-boolean-cast": "off",
        "no-constant-condition": "off"
    }
}