/*
 * @Description: API 接口
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-25 11:00:28
 * @LastEditors: 王强
 * @LastEditTime: 2020-05-29 14:38:07
 */ 
/*
与后台交互模块 （依赖已封装的ajax函数）
包含n个接口请求函数的模块，函数的返回值是promise对象
 */
import ajax from './ajax'
import {BASE_URL} from './env'    

export const getHomeSwiperList = () => ajax(BASE_URL + 'api/swiper')       //首页轮播图
export const getFindHomeRoomList = () => ajax(BASE_URL + 'api/roomList')       //房屋列表
