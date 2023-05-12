const jestConfig = {
  verbose: true,
  slowTestThreshold: 1,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: [
    "js",
    "ts",
    "css",
    "html",
    "json"
  ],
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  testMatch: ['**/*.test.js'],
}

export default jestConfig;
