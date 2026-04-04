import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
    {
        ignores: ["**/node_modules/**", "**/lib/**", "**/dist/**", "docs/**"],
    },
    {
        files: ["packages/**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            react: reactPlugin,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "no-duplicate-imports": "error",
            "no-var": "error",
            "prefer-rest-params": "off",
            "react/prop-types": "off",
            "react/display-name": "off"
        },
    },
];
