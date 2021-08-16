/*
 * @Description: 类似于 vue中的事件总线，用于兄弟组件传值
  监听：  emitter.on('事件名称', 处理事件的回调函数);
  触发：  emitter.emit('事件名称', 处理事件的回调函数);
  移除：  emitter.removeListener('事件名称', 处理事件的回调函数);
 * @Version: 1.0
 * @Autor: wq
 * @Date: 2021-08-16 17:26:53
 * @LastEditors: wq
 * @LastEditTime: 2021-08-16 18:18:16
 */
import { EventEmitter } from 'events';

export default new EventEmitter();
