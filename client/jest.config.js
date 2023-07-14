const jestConfig = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  projects: ['<rootDir>'],
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  transformIgnorePatterns: ['node_modules/(?!(@mui)/)'],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  moduleDirectories: ["node_modules", 'src'],
  testMatch: ['*.test.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  }
}

export default jestConfig;
