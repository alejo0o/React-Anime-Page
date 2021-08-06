module.exports = {
  clearMocks: true,
  verbose: true,
  coverageDirectory: '.coverage',
  testPathIgnorePatterns: ['<rootDir>/.dist/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/user-event',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
};
