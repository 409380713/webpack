/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2020-12-22 11:01:03
 * @LastEditors: wy
 * @LastEditTime: 2020-12-22 16:19:45
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// clean-webpack-plugin 新版本必须用结构的方式来引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    devtool: 'inline-source-map', // source-map
    /*
        注意：webpack 5 最新版本 添加webpack-dev-server插件会报模块找不到问题
        fix issue link https://github.com/webpack/webpack-cli/issues/1948
    */ 
    devServer: {
        port: '8899',
        contentBase: './dist',
        compress: true,
        hot: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(), // 接受的参数是一个对象
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        // TODO: NamedModulesPlugin模块在v4已经废弃，由optimization.namedModules代替，待修改
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    /**
     *  loader
     *  test: 需要处理的文件
     *  use: 处理文件所用到的loader
     */
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(png|svg|jpg|gif)$/,
    //             use:[
    //                 'file-loader'
    //             ]
    //         }
    //     ]
    // }
}