/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2020-12-24 10:39:49
 * @LastEditors: wy
 * @LastEditTime: 2020-12-24 10:42:52
 */
const { merge } = require('webpack-merge')
const base = require('./webpack.base')
 module.exports = merge(base, {
    mode: 'production'
 })
