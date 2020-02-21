const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[chunkhash].js',
        publicPath: '/dist'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 1349
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}

module.exports = config;