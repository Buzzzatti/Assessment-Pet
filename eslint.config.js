import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',  // Подключение Prettier через рекомендованное расширение
      'eslint:recommended',
      'prettier' // Для отключения конфликтов с Prettier
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      prettier: 'eslint-plugin-prettier', // Подключаем плагин Prettier для интеграции с ESLint
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^redux', '^lodash', '^axios'],
            ['^@'],
            ['^assets', '^store'],
            ['^[./]'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'max-len': [
        'error',
        {
          code: 120,
          comments: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'try' },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
    },
  }
);