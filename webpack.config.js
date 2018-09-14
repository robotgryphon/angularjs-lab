"use strict";

// Modules
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var path = require("path");

/**
 * Config
 * Reference: http://webpack.github.io/docs/configuration.html
 * This is the object where all configuration gets set
 */
var config = {};

config.entry = "./source/app.ts";
config.output = {
  filename: "app.js",
  path: path.resolve(__dirname, "app")
};

// config.module = {
//   rules: [
//     {
//       test: /\.ts$/,
//       use: [{ loader: "ts-loader" }],
//       exclude: /node_modules/
//     },
//     {
//       test: /\.css$/,
//       use: ExtractTextPlugin.extract({
//         fallbackLoader: "style-loader",
//         loader: [
//           { loader: "css-loader", query: { sourceMap: true } },
//           { loader: "scss-loader" }
//         ]
//       })
//     },
//     {
//       test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
//       use: [{ loader: "file-loader" }]
//     }
//   ]
// };

config.plugins = [];
config.plugins.push(
  new HtmlWebpackPlugin({
    template: "./source/index.html",
    inject: false
  }),

  // Reference: https://github.com/webpack/extract-text-webpack-plugin
  // Extract css files
  // Disabled when in test mode or not in build mode
  new ExtractTextPlugin({
    filename: "css/[name].css",
    allChunks: true
  })
);

module.exports = config;
