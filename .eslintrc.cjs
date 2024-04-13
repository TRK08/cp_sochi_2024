/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-strongly-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    rules: {
        semi: [2, 'never'],
        indent: ['error', 4],
        'vue/multi-word-component-names': 'off',
    },
    parserOptions: {
        ecmaVersion: 'latest'
    }
}
