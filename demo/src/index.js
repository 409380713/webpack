/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2020-12-22 10:45:21
 * @LastEditors: wy
 * @LastEditTime: 2020-12-22 11:43:52
 */
import _ from 'lodash'
import printMe from './print'

function component() {
    console.log(123)
    const div = document.createElement('div')
    const btn = document.createElement('button')
    div.innerHTML = _.join(['hello', 'webpack!'], ' ')

    btn.innerHTML = 'click me'
    btn.onclick = printMe
    
    div.appendChild(btn)
    
    return div
}
document.body.appendChild(component())