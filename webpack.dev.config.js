const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const devConfig = {
  devtool: "inline-source-map",
  entry: {
    app: ["react-hot-loader/patch", path.join(__dirname, "src/index.js")]
  },
  output: {
    /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      // {
      //     test: /\.(css|scss)$/,
      //     use: ["style-loader", "css-loader", "postcss-loader"]
      // },
      // {
      //     test: /\.css$/,
      //     include: [/src/],
      //     resourceQuery: /^\?raw$/,
      //     use: ExtractTextPlugin.extract({
      //         fallback: "style-loader",
      //         use: ["css-loader", "postcss-loader"]
      //     })
      // },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: ["css-hot-loader"].concat(
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  localIdentName: "[local]--[hash:base64:5]"
                }
              },
              {
                loader: "postcss-loader"
              }
            ]
          })
        )
      },
      {
        test: /\.css$/,
        exclude: [/src/],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/index.html")
    }),
    new ExtractTextPlugin({
      // filename: '[name].[contenthash:5].css',
      filename: "app.css",
      allChunks: true
    })
  ],
  devServer: {
    port: 8099,
    hot: true, //这个得开启，不然无法实现不影响state的热更新
    clientLogLevel: "none", //控制台的打包信息清空
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    host: "localhost",
    proxy: {
      "/api/*": "http://localhost:8090/$1"
    }
  }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);