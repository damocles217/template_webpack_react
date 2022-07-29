import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	rootDir: './',
	verbose: true,
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['./jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	moduleNameMapper: {
		// Maps every Css/Sass module
		'^@src/(.*)$': '<rootDir>/src/$1',
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	globals: {
		'ts-jest': {
			babelConfig: false,
			tsconfig: './tsconfig.spec.json',
		},
	},
};

export default config;
