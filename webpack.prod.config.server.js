/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const externals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require("webpack");

const path = `${__dirname}`;

module.exports = {
  entry: ['@babel/polyfill', './src/server/server.js'],
  output: {
    path: __dirname,
    filename: 'server.js',
  },
  target: 'node',
  externals: [externals({})],
  plugins: [
    new CleanWebpackPlugin(`${path}/build/server.js`),
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
          },
          {
            loader: 'css-loader',
            options: { 
              importLoaders: 1 
            }
          },
          {
            loader: 'postcss-loader',
          }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 5000, emitFile: false },
        }
      }
    ]
  }
};