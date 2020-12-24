/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2020-12-22 11:01:03
 * @LastEditors: wy
 * @LastEditTime: 2020-12-24 10:40:55
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// clean-webpack-plugin 新版本必须用结构的方式来引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: {
            import: './src/index.js',
            // dependOn: 'shared',
        },
        // print: {
        //     import: './src/print.js',
        //     dependOn: 'shared',
        // },
        // shared: 'lodash',
    },
    /*
        注意：webpack 5 最新版本 添加webpack-dev-server插件会报模块找不到问题
        fix issue link https://github.com/webpack/webpack-cli/issues/1948
    */ 
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(), // 接受的参数是一个对象
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        // NamedModulesPlugin模块在v4已经废弃，由optimization.namedModules代替
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        moduleIds: 'deterministic', // 保持vendors的ids在每次build完不变
        runtimeChunk: 'single', // 缓存优化策略，命中浏览器到长缓存机制
        splitChunks: { // 代码分割，提取第三方库到runtime，
            // chunks: 'all'
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
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