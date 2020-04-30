/**
 *
 * Requiring plugins needed for developing
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/client/index.js',
    devServer: {
        port: 8080,
        proxy: [
            {
                context: ["/text", "/url", "/hashtag"],
                target: "http://localhost:8000"
            }
        ]
    },
    output: {
        libraryTarget: "var",
        library: 'Client'
    },
    //using loaders for js files and css files
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
        ]
    },
    //using plugins to generate an index.html file in dist with a script tag with path reference in main.js file
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
};