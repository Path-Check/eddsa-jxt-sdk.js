const path = require('path');

module.exports = {
  mode: "production",
  entry: "./lib/main.js",
  devtool: "source-map",
  output: {
    filename: 'eddsa-jxt-sdk.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'EDDSA_JXT',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false
  }
};