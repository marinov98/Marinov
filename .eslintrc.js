module.exports = {
    globals: {
        __PATH_PREFIX__: true,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    extends: 'react-app',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    rules: {
        'no-debugger': 1,
        'no-console': 'off',
        'no-unused-vars': [
            1,
            {
                ignoreRestSiblings: true
            }
        ],
        semi: ['error', 'always'],
        plugins: ['prettier']
    }
};
