const jestConfig = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  testMatch: ['*.test.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  }
}

export default jestConfig;
