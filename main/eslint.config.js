import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
        plugins: { js },
        extends: ['js/recommended'],
        rules: {}
    },
    eslintPluginPrettier,
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended
]);
