// 引入深拷贝
import { deepClone } from '@/config/utils'

import { GET_USERINFO,GET_USER_LIST } from '../actionTypes'

const defaultState = {
    userInfo:{
        // id:3,name:'五五',age:28
    },
    userlist:[
        // {id:1,name:'张三',age:18},
        // {id:2,name:'李四',age:28},
    ]
} 

export default function user(state = defaultState,action){
    //深度拷贝state
    let newState = deepClone(state)
    switch(action.type){
        case GET_USER_LIST :
            newState.userlist = action.data
            return newState
        case GET_USERINFO :
            newState.userInfo = action.data
            return newState
        default:
            return state
    }
    
} 