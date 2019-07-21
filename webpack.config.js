const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/dist',
        compress: true,
        port: 9000,
        stats: 'errors-only'
    }
    // devtool: 'inline-source-map'
};
