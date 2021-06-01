const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[j]sx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/, 
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
              ],
            },
            {
              test: /\.(svg|png|gif|jpg|ico)$/,
              use: {
                  loader: 'file-loader',
              }
          }
        ],
    },
    resolve: {
        extensions: ['*', '.jsx', '.js'],
    },
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "dist"),
      filename: "bundled.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/',
        hotOnly: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.png",
        filename: "./index.html",
    }),
    ],
    devtool: 'eval-source-map',
}
