// const HtmlWebPackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    target: 'node',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        transportMode: 'ws',
        hot: true
    },
    module: {
        rules: [
            {
                test: /d?\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /d?\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        // new HtmlWebPackPlugin({
        //     title: 'Test del titolo matto',
        //     template: './src/index.html'
        // }),
        new CompressionWebpackPlugin()
    ],
    externals: [nodeExternals()]
};
