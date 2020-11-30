module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  roots: ['src'],
  moduleDirectories: ['node_modules', 'src'],
  unmockedModulePathPatterns: ['react'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 65,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    `<rootDir>/(dist|docs|node_modules|.cache)/`,
    `<rootDir>/src/compositions/ProductDetail/`,
  ],
  globals: {
    __TEST__: true,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    'src/(.*)': '<rootDir>/src/$1',
    '^~.storybook(.*)$': '<rootDir>/.storybook$1',
    '^~(.*)$': '<rootDir>/src$1',
  },
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
};
