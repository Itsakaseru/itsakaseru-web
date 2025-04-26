// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin"

export default tseslint.config({
    languageOptions: {
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["public/**/*", ".react-router/**/*", "build/**/*"],
    plugins: {
        "@stylistic": stylistic
    },
    extends: [
        tseslint.configs.strict,
        tseslint.configs.stylistic,
        tseslint.configs.recommendedTypeChecked,
    ],
    rules: {
        // ESLint
        "@typescript-eslint/no-unused-vars": [ "warn" ],
        "@typescript-eslint/no-empty-function": [ "warn" ],
        "@typescript-eslint/only-throw-error": [ "off" ],
        // Stylistic: JavaScript/TypeScript
        "@stylistic/array-bracket-newline": [ "error", "consistent" ],
        "@stylistic/array-bracket-spacing": [ "error", "always", {
            "singleValue": false,
            "objectsInArrays": false,
            "arraysInArrays": false,
        }],
        "@stylistic/array-element-newline": [ "error", "consistent", {
            "multiline": true,
        }],
        "@stylistic/arrow-parens": [ "error", "always" ],
        "@stylistic/arrow-spacing": [ "error", { before: true, after: true } ],
        "@stylistic/block-spacing": [ "error", "always" ],
        "@stylistic/brace-style": [ "error", "stroustrup", { allowSingleLine: true } ],
        "@stylistic/comma-dangle": [ "error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
            "importAttributes": "always-multiline",
            "dynamicImports": "always-multiline",
        }],
        "@stylistic/comma-spacing": [ "error", { before: false, after: true } ],
        "@stylistic/comma-style": [ "error", "last" ],
        "@stylistic/computed-property-spacing": [ "error", "never" ],
        "@stylistic/curly-newline": [ "error", {
            "multiline": true,
            "consistent": true,
        }],
        "@stylistic/dot-location": [ "error", "property" ],
        "@stylistic/eol-last": [ "error", "always" ],
        "@stylistic/function-call-spacing": [ "error", "never" ],
        "@stylistic/function-paren-newline": [ "off" ],
        "@stylistic/generator-star-spacing": [ "error", "both" ],
        "@stylistic/implicit-arrow-linebreak": [ "off" ],
        "@stylistic/indent": [ "error", 2, {
            "SwitchCase": 1,
            "VariableDeclarator": "first",
            "CallExpression": { "arguments": "first" },
            "ArrayExpression": "first",
            "ObjectExpression": "first",
            "ImportDeclaration": "first",
            "flatTernaryExpressions": true,
            "offsetTernaryExpressions": true,
            "ignoreComments": false,
            "ignoredNodes": [
                "ConditionalExpression",
            ]
        }],
        "@stylistic/indent-binary-ops": [ "error", 2 ],
        "@stylistic/key-spacing": [ "error", {
            "singleLine": {
                "beforeColon": false,
                "afterColon": true,
            },
            "multiLine": {
                "beforeColon": false,
                "afterColon": true,
                "align": "value",
            },
        }],
        "@stylistic/keyword-spacing": [ "error", {
            before: true,
            after: true,
        }],
        "@stylistic/line-comment-position": [ "off" ],
        "@stylistic/linebreak-style": [ "error", "unix" ],
        "@stylistic/lines-around-comment": [ "off" ],
        "@stylistic/lines-between-class-members": [ "error", "always", {
            "exceptAfterOverload": true,
        }],
        "@stylistic/max-len": [ "error", {
            "code": 120,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true,
        }],
        "@stylistic/max-statements-per-line": [ "error", {
            "max": 2,
            "ignoredNodes": [
                "BreakStatement"
            ]
        }],
        "@stylistic/member-delimiter-style": [ "error", {
            "singleline": {
                "delimiter": "comma",
                "requireLast": true,
            },
            "multiline": {
                "delimiter": "comma",
                "requireLast": true,
            }
        }],
        "@stylistic/multiline-comment-style": [ "error", "bare-block" ],
        "@stylistic/multiline-ternary": [ "error", "always-multiline" ],
        "@stylistic/new-parens": [ "error", "always" ],
        "@stylistic/newline-per-chained-call": [ "error", { "ignoreChainWithDepth": 2 } ],
        "@stylistic/no-confusing-arrow": [ "error", {
            "allowParens": true,
            "onlyOneSimpleParam": true,
        }],
        "@stylistic/no-extra-parens": [ "error", "all", {
            "nestedBinaryExpressions": false,
        }],
        "@stylistic/no-extra-semi": [ "warn" ],
        "@stylistic/no-floating-decimal": [ "error" ],
        "@stylistic/no-mixed-operators": [ "error" ],
        "@stylistic/no-mixed-spaces-and-tabs": [ "error" ],
        "@stylistic/no-multi-spaces": [ "off" ],
        "@stylistic/no-multiple-empty-lines": [ "warn" ],
        "@stylistic/no-tabs": [ "off" ],
        "@stylistic/no-trailing-spaces": [ "error" ],
        "@stylistic/no-whitespace-before-property": [ "error" ],
        "@stylistic/nonblock-statement-body-position": [ "off" ],
        "@stylistic/object-curly-newline": [ "error", {
            "multiline": true,
        }],
        "@stylistic/object-curly-spacing": [ "error", "always" ],
        "@stylistic/object-property-newline": [ "off" ],
        "@stylistic/one-var-declaration-per-line": [ "off" ],
        "@stylistic/operator-linebreak": [ "error", "after" ],
        "@stylistic/padded-blocks": [ "error", "never" ],
        "@stylistic/padding-line-between-statements": [ "off" ],
        "@stylistic/quote-props": [ "error", "as-needed" ],
        "@stylistic/quotes": [ "error", "double" ],
        "@stylistic/rest-spread-spacing": [ "error", "never" ],
        "@stylistic/semi": [ "error", "always" ],
        "@stylistic/semi-spacing": [ "error", { before: false, after: true } ],
        "@stylistic/semi-style": [ "error", "last" ],
        "@stylistic/space-before-blocks": [ "error", "always" ],
        "@stylistic/space-before-function-paren": [ "error", "never" ],
        "@stylistic/space-in-parens": [ "error", "never" ],
        "@stylistic/space-infix-ops": [ "error", { int32Hint: false } ],
        "@stylistic/space-unary-ops": [ "error" ],
        "@stylistic/spaced-comment": [ "error", "always" ],
        "@stylistic/switch-colon-spacing": [ "error", { "after": true, "before": false } ],
        "@stylistic/template-curly-spacing": [ "error", "never" ],
        "@stylistic/type-annotation-spacing": [ "error", { "after": true, "before": false } ],
        "@stylistic/type-generic-spacing": [ "error" ],
        "@stylistic/type-named-tuple-spacing": [ "error" ],
        "@stylistic/wrap-iife": [ "error", "outside" ],
        "@stylistic/wrap-regex": [ "off" ],
        "@stylistic/yield-star-spacing": [ "error", "both" ],
        // Stylistic: JSX
        "@stylistic/jsx-child-element-spacing": [ "error" ],
        "@stylistic/jsx-closing-bracket-location": [ "error" ],
        "@stylistic/jsx-closing-tag-location": [ "error" ],
        "@stylistic/jsx-curly-brace-presence": [ "off" ],
        "@stylistic/jsx-curly-newline": [ "error", {
            "multiline": "consistent"
        }],
        "@stylistic/jsx-curly-spacing": [ "error", {
            "when": "always",
            "children": true,
            "spacing": {
                "objectLiterals": "never"
            }
        }],
        "@stylistic/jsx-equals-spacing": [ "error", "never" ],
        "@stylistic/jsx-first-prop-new-line": [ "error", "multiline" ],
        "@stylistic/jsx-function-call-newline": [ "error", "multiline" ],
        "@stylistic/jsx-indent": [ "error", 2 ],
        "@stylistic/jsx-indent-props": [ "error", 2 ],
        "@stylistic/jsx-max-props-per-line": [ "off" ],
        "@stylistic/jsx-newline": [ "off" ],
        "@stylistic/jsx-one-expression-per-line": [ "off" ],
        "@stylistic/jsx-pascal-case": [ "error", {
            "allowAllCaps": true,
            "allowNamespace": true,
            "ignore": []
        }],
        "@stylistic/jsx-props-no-multi-spaces": [ "error" ],
        "@stylistic/jsx-quotes": [ "error", "prefer-double" ],
        "@stylistic/jsx-self-closing-comp": [ "error" ],
        "@stylistic/jsx-sort-props": [ "off" ],
        "@stylistic/jsx-tag-spacing": [ "error", {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never",
            "beforeClosing": "never"
        }],
        "@stylistic/jsx-wrap-multilines": [ "off" ]
    }
});