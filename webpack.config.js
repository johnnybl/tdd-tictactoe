var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: [
        './src/index'
    ],
    quiet: true,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })],
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel', 'eslint']},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    }
};
