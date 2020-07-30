module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'standard-jsx',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  // 全域變數，設置為 false 表示他不允許重新賦值
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    /* React Best Practice */
    // 禁止 inline function 於 JSX 中 (可避免無意義的重新建立 Function & 造成渲染)
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    'react/no-did-update-set-state': 'error', // 避免造成重複渲染
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',

    /* Coding Style */
    semi: ['error', 'never'], // 結尾分號
    'linebreak-style': 0, // 作業系統 LF & CRLF 差異
    'jsx-quotes': ['warn', 'prefer-single'],
    'array-bracket-spacing': 'warn',
    'no-trailing-spaces': 'warn',
    'import/order': 'warn',
    'eol-last': 'warn',
    quotes: 'warn',
    'comma-dangle': 'warn',
    'operator-linebreak': 'warn',
    'arrow-body-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',

    /* Dev Only */
    'no-unused-vars': 'off', // 允許保留未用到的變數
    'no-console': 'off',
    'no-alert': 'off',

    /* Next Config */
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
  },
}
