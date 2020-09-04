import {
    getHomeSwiperList,
    getFindHomeRoomList
} from '@/config/'

import { ADD_COUNT,MINUS_COUNT,HOME_SWIPER_LIST,FIND_HOME_ROOM_LIST } from '../actionTypes'

// 下面2个action 测试使用
export const addCounter = (value) =>{
    return {
        type: ADD_COUNT,
        value
    }
}
export const minCounter = (value) =>{
    return {
        type: MINUS_COUNT,
        value
    }
}

// 获取首页轮播图列表
export const getHomeSwiperListAction = (value)=>{
    return {
        type: HOME_SWIPER_LIST,
        value
    }
}
// 异步获取轮播数据
export const asyncHomeSwiperListAction = ()=>{
    return async dispatch => {
        let result = await getHomeSwiperList()
        if(result.code===200){
            // console.log('轮播图列表：',result.swiperList)
            const action = getHomeSwiperListAction(result.swiperList)
            dispatch(action)
        }
    }
}


// 获取找房页面--房屋列表
export const getFindHomeRoom = (value)=>{
    return {
        type: FIND_HOME_ROOM_LIST,
        value
    }
}
// 异步获取房屋列表
export const asyncGetFindHomeRoomList = ()=>{
    return async dispatch => {
        let result = await getFindHomeRoomList()
        if(result.code===200){
            // console.log('房屋列表：',result.data)
            const action = getFindHomeRoom(result.data)
            dispatch(action)
        }
    }
}