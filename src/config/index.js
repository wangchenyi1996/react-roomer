/*
与后台交互模块 （依赖已封装的ajax函数）
包含n个接口请求函数的模块，函数的返回值是promise对象
 */
import ajax from './ajax'
import {BASE_URL} from './env'    

export const getSwipers = () => ajax(BASE_URL + 'api/swiper')       //首页轮播图
export const getRooms = () => ajax(BASE_URL + 'api/roomList')       //房屋列表
// export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
