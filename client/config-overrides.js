module.exports = {
  jest: function(config) {
    config.collectCoverageFrom = ['client/src/**/*.{js,jsx,ts,tsx}', '!client/src/**/*.d.ts'];
    config.testMatch = [
      '<rootDir>/client/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/client/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ];
    config.roots = ['<rootDir>/client/src'];
    return config;
  },

  // The paths config
  paths: function(paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'client/src/index.js');
    paths.appSrc = path.resolve(__dirname, 'client/src');
    return paths;
  },
};
