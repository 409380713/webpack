/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2020-12-22 10:45:21
 * @LastEditors: wy
 * @LastEditTime: 2020-12-24 10:59:18
 */
import _ from 'lodash'

console.log('process.env.NODE_ENV---', process.env.NODE_ENV)
function component() {
    console.log(123232344424442)
    const div = document.createElement('div')
    const btn = document.createElement('button')
    div.innerHTML = _.join(['hello', 'webpack!'], ' ')

    btn.innerHTML = 'click me'
    // 懒加载
    btn.onclick = e => import(/* webpackChunkName "print" */ './print').then(module => {
        const print = module.default
        print()
    })
    
    div.appendChild(btn)
    
    return div
}
document.body.appendChild(component())