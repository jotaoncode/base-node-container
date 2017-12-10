var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  entry: "./src/index.js",
  devServer: {
    stats: {
      colors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
      path: path.join(__dirname, 'dist'),
      filename: "index.js"
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
