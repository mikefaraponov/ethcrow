'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DEV = 'development';
const NODE_ENV = process.env.NODE_ENV || DEV;
const IS_NOT_DEV = NODE_ENV !== DEV;
const IS_DEV = NODE_ENV === DEV;
const IS_PROD = NODE_ENV === 'production';
const IS_VM = process.env.IS_VM || 'false';
const RPC_URL = 'https://' +
  'us-central1-hackathon-ethcrow.cloudfunctions.net/subscribe';
const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: IS_DEV,
});

module.exports = {
  entry: './src/js/index.js',
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'target'),
  },
  watch: IS_DEV,
  devtool: IS_DEV ? 'cheap-inline-module-source-map' : false,
  watchOptions: IS_VM === 'true' ? null : {
    aggregateTimeout: 300,
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: [
              'transform-object-rest-spread',
              'transform-decorators-legacy',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [
              {
                loader: 'css-loader?minimize=true',
              },
              {
                loader: 'sass-loader',
              },
            ],
            fallback: 'style-loader',
        }),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader',
        },{
          loader: 'img-loader?enabled=' + IS_NOT_DEV,
        }],
        include: [/node_modules/],
      },
      {
        test: /\.(jpe?g|png)$/,
        use: [{
          loader: 'file-loader',
        },{
          loader: 'img-loader?enabled=' + IS_NOT_DEV,
        }],
      },
      {
        test: /\.svg$/,
        use: [{
         loader: 'url-loader',
        },{
          loader: 'img-loader?enabled=' + IS_NOT_DEV,
        }],
        include: [/resources/],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.RPC_URL': JSON.stringify(RPC_URL),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types',
      Promise: 'bluebird',
      'window.Promise': 'bluebird',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/resources/html/index.ejs'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    extractSass,
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['src/js', 'src/resources', 'node_modules'],
  },
};
