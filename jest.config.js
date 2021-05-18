module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  roots: ['src'],
  moduleDirectories: ['node_modules', 'src'],
  unmockedModulePathPatterns: ['react'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    'fixture.(jsx?|tsx?)',
    '.storybook',
    'index.(js|ts)',
  ],
  coverageThreshold: {
    global: {
      statements: 83,
      branches: 66,
      functions: 69,
      lines: 84,
    },
  },
  coverageReporters: ['lcov', 'text', 'text-summary'],
  moduleFileExtensions: ['js', 'json', 'node', 'ts', 'tsx'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/(dist|docs|node_modules|.cache)/',
    '.storybook',
  ],
  globals: {
    __TEST__: true,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    'src/(.*)': '<rootDir>/src/$1',
    '^~.storybook(.*)$': '<rootDir>/.storybook$1',
    '^~(.*)$': '<rootDir>/src$1',
  },
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
