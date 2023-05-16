const jestConfig = {
  verbose: true,
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  transformIgnorePatterns: ['node_modules/(?!(@mui)/)'],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  }
}

export default jestConfig;
