const path = require('path');
const webpack = require('webpack');
// const CircularDependencyPlugin = require('circular-dependency-plugin')
// const core_path = path.resolve(__dirname, './../../../source_framework/static/js/modules/');
// const module_path = path.resolve(__dirname, './../../../source_framework/static/js/source/');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // mode: 'development',
    entry: {
        main: [
            './src/App.js'
        ]
    },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
    // devtool: 'inline-source-map'
};
