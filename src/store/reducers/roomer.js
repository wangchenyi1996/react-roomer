/*
 * @Description: roomer 模块
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-25 09:02:07
 * @LastEditors: 王强
 * @LastEditTime: 2020-05-29 14:41:38
 */ 
import { ADD_COUNT,MINUS_COUNT,HOME_SWIPER_LIST,FIND_HOME_ROOM_LIST } from '../actionTypes'

// 引入深拷贝
import { deepClone } from '@/config/utils'

const defaultState={
    count:0,
    swiperList:[],
    findHomeRoomList:[]
}

export default function roomer(state = defaultState,action){
    //深度拷贝state
    let newState = deepClone(state) 
    switch(action.type){
        // 首页轮播图
        case HOME_SWIPER_LIST:
            newState.swiperList = action.value
            return newState
        // 找房页面- 房屋列表
        case FIND_HOME_ROOM_LIST:
            newState.findHomeRoomList = action.value
            return newState
        case ADD_COUNT :
            newState.count += action.value
            return newState
        case MINUS_COUNT :
            newState.count -= action.value
            return newState
        default:
            return state
    }
} 