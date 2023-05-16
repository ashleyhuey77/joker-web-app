module.exports = {
  presets: [
    ['@babel/preset-env', {targets: { esmodules: false, node: "current"}}
    ],
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
  plugins: [['@babel/plugin-transform-runtime', {'regenerator': true}],
  ['transform-es2015-modules-commonjs']]
};

