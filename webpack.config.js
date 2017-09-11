'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DEVELOPMENT = 'development';
const NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;
const IS_VM = process.env.IS_VM || 'false';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAzfhQF7-xPfl6-13iTc0G1HZ0k4wJsrdU",
  authDomain: "hackathon-ethcrow.firebaseapp.com",
  databaseURL: "https://hackathon-ethcrow.firebaseio.com",
  projectId: "hackathon-ethcrow",
  storageBucket: "hackathon-ethcrow.appspot.com",
  messagingSenderId: "148747448186"
};

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: './src/js/index.js',
	output: {
	  filename: 'bundle.js',
	  path: path.resolve(__dirname, 'target'),
	},
	watch: NODE_ENV === 'development',
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
						presets: ['es2015', 'react'],
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
            use: [{
			        loader: 'css-loader?minimize=true',
			      }, {
                loader: "sass-loader"
            }],
            fallback: "style-loader"
        })
	    },
	    {
	    	test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	    	use: {
	    		loader: "url-loader?limit=10000&mimetype=application/font-woff",
	    	},
	    },
      {
      	test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      	use: {
      		loader: "file-loader",
      	},
      },
      {
        test: /\.svg$/,
	      use: {
	      	loader: 'file-loader',
	      },
      	include: [/node_modules/],
	    },
      {
        test: /\.(jpe?g|png)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.svg$/,
	      use: {
	      	loader: 'url-loader',
	      },
      	include: [/resources/],
	    },
		],
	},
	plugins: [
	  new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
	    'process.env.FIREBASE_CONFIG': JSON.stringify(FIREBASE_CONFIG),
	  }),
	  new webpack.ProvidePlugin({
	  	React: 'react',
	  	PropTypes: 'prop-types',
	  	Promise: "imports-loader?this=>global!exports-loader?global.Promise!bluebird",
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
		  }
		}),
	  extractSass,
	],
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		modules: ['src/js', 'src/resources', 'node_modules']
	},
}
