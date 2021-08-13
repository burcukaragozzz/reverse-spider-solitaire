// import { pathsToModuleNameMapper } from 'ts-jest/utils';
// import { compilerOptions } from '../../tsconfig.json';

// const paths = compilerOptions.paths ? compilerOptions.paths : {};

const config = {
    rootDir: '../',
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
    testPathIgnorePatterns: [
        '<rootDir>/.next/',
        '<rootDir>/node_modules/',
        '<rootDir>/cypress/',
        '<rootDir>/webdriverio/',
    ],
    moduleNameMapper: {
        // ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
};

export default config;
