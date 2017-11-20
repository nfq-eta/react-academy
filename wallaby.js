module.exports = function (wallaby) {
    return {
        files: [
            'client/**/*.js',
            'client/**/*.json',
            'client/**/*.scss',
            '!client/**/*.test.js',
            '!client/index.js',
        ],

        tests: ['client/**/*.test.js'],

        compilers: {
            '**/*.js': wallaby.compilers.babel(),
        },

        env: {
            type: 'node',
        },

        testFramework: 'jest',
        reportConsoleErrorAsError: true,

        setup(wallaby) {
            const jestConfig = require('./package.json').jest;
            jestConfig.testEnvironment = 'jsdom';
            wallaby.testFramework.configure(jestConfig);
        },
    };

};
