const path = require('path');
const webpack = require('webpack');

module.exports = {

    /*入口*/
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ], 
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    devServer: {
        port: 8082,
        host: "localhost",
        hot: true,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        proxy: {
            target: "http://localhost:8082",
            secure: false
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}