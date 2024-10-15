// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";
//
//
// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHook from 'eslint-plugin-react-hooks'; //

import globals from 'globals';
// import tsEslint from 'typescript-eslint';


// export default defineFlatConfig([
export default [
  {
    ignores: [
      'dist',
      'node_modules',
    ],
  },
  js.configs.recommended,


  // React
  {
    files: ['src/*.jsx', "src/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'jsx-a11y': eslintPluginJsxA11y,
      react: eslintPluginReact,
    },
    rules: {
      'jsx-a11y/alt-text': 'warn', //альт для имг
      'jsx-a11y/anchor-ambiguous-text': 'warn',
      'jsx-a11y/anchor-has-content': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/autocomplete-valid': 'warn',// поле ввода
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/html-has-lang': 'warn',
      'jsx-a11y/iframe-has-title': 'warn',
      'jsx-a11y/img-redundant-alt': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/lang': 'warn',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-a11y/mouse-events-have-key-events': 'warn',
      'jsx-a11y/no-access-key': 'warn',
      'jsx-a11y/no-aria-hidden-on-focusable': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-distracting-elements': 'warn',// убрать страрые теги
      'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
      'jsx-a11y/no-noninteractive-tabindex': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'jsx-a11y/scope': 'warn',
      'jsx-a11y/tabindex-no-positive': 'warn',

      'react/button-has-type': 'warn',//у кнопки должен быть тип
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'], //закрытие одинарного тега
      'react/jsx-closing-tag-location': 'warn',// расположение закрывающего тега
      'react/jsx-equals-spacing': 'warn', //пробелы
      'react/jsx-fragments': 'warn',//создание фрагмента
      'react/jsx-key': 'warn',//по ключам массива/списка
      'react/jsx-no-duplicate-props': 'warn', // одинарность атрибутов
      'react/jsx-no-undef': 'warn',//возможный референс еррор
      'react/jsx-no-useless-fragment': 'warn',// убрать ненужные избыточные фрагменты
      'react/jsx-pascal-case': 'warn',// соблюдение кемалКейс
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",

      'react/no-array-index-key': 'warn',// ключом не может быть индекс элемента массива
      'react/no-danger': 'warn',// запрет опасных свойств
      'react/no-deprecated': 'warn',// нет устаревшим методам
      'react/no-find-dom-node': 'warn',
      'react/no-invalid-html-attribute': 'warn',
      'react/no-multi-comp': ['warn', {ignoreStateless: true}], //Объявление только одного компонента на файл улучшает читаемость и возможность повторного использования компонентов.
      'react/no-namespace': 'warn',
      'react/no-object-type-as-default-prop': 'warn',
      'react/no-render-return-value': 'warn',
      'react/no-string-refs': 'warn',
      'react/no-this-in-sfc': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/no-unknown-property': 'warn',
      'react/no-unstable-nested-components': 'warn',
      'react/prefer-stateless-function': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
      'react/style-prop-object': 'warn',
      'react/void-dom-elements-no-children': 'warn',
    },


    settings: {
      "react": {
        "version": "detect"
      }
    },
  },

  // All JS/TS
  {
    files: ['src/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'import/no-extraneous-dependencies': 'warn',//Запрещает импорт внешних модулей, которые не объявлены в package.json
      'import/no-self-import': 'warn',//Запретить модулю импортировать самого себя
      'import/no-unused-modules': 'warn',//нет-неиспользуемых-модулей
      'no-console': 'warn',// убрать консол.логи
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.jsx'],
      },
    },
  },

  // JS/MJS in root
  {
    files: ['*.js', '*.mjs'],
    ignores: ['src', 'electron'],
    rules: {
      'no-console': 'off',
    },
  },

  // Hooks
  {
    files: ['**/use*.*'],
    plugins: {
      'react-hooks': eslintPluginReactHook,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'unicorn/consistent-function-scoping': 'off',
    },
  },

  // Config files
  {
    files: ['**/*.config.*'],
    ignores: [
      "out/",
      "dist/",
      "**/*.d.ts",
      "web/**/*.js",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
  eslintConfigPrettier,
// ]);
];