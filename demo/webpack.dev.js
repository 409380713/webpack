/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2020-12-24 10:39:49
 * @LastEditors: wy
 * @LastEditTime: 2020-12-24 10:42:27
 */
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
 module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: '8899',
        contentBase: './dist',
        compress: true,
        hot: true
    },
 })
