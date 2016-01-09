var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: [
    './src/index'
  ],
  quiet:true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel','eslint'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    } ]
  }
};
