/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const externals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require("webpack");

const path = `${__dirname}/build`;

const startServerPlugin = new StartServerPlugin({ name: 'server.js' });

module.exports = {
  entry: ['@babel/polyfill', 'webpack/hot/poll?1000', './src/server/server.js'],
  output: {
    path,
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  watch: true,
  externals: [externals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  plugins: [
    new CleanWebpackPlugin(`${path}/server.js`),
    startServerPlugin,
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {   
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { 
              sourceMap: true,
              importLoaders: 1 
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 5000 },
        }
      }
    ]
  }
};