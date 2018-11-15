const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 8000
  },
  module: {
    rules: [{ test: /\.jsx?$/, use: 'babel-loader' }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./template.html'
    })
  ]
}
