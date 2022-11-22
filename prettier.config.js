module.exports = {
    endOfLine: 'lf',
    printWidth: 100,
    proseWrap: 'always',
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'all',
    overrides: [
        {
            files: '*.md',
            options: {
                printWidth: 80,
            },
        },
    ],
}
