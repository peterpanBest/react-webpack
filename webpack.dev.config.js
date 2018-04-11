const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [ 
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },
    devServer: {
        port: 8088,
        hot: true,//这个得开启，不然无法实现不影响state的热更新
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: 'localhost',
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