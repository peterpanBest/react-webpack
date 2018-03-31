
const merge = require('webpack-merge');//抽取公共配置
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base4:5]!resolve-url!postcss', "postcss-loader"]
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]

};

module.exports = merge(commonConfig, publicConfig);