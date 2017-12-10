var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  entry: "./src/index.js",
  output: {
      path: "./dist",
      filename: "bundle.js"
  },
  module: {
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
      }]
  },
  target: 'node'
};
webpack(webpackConfig, function (err, stats) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('application packed');
});
