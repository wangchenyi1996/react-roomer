import axios from 'axios'

import {GET_USERINFO, GET_USER_LIST } from '../actionTypes'


export const getListAction  = (data)=>({
    type:GET_USER_LIST,
    data
})

export const getUserInfoAction  = (data)=>({
    type:GET_USERINFO,
    data
})

// 异步方式获取数据
export const getUserList = () =>{
    return dispatch =>{
        axios.get('http://rap2.taobao.org:38080/app/mock/255831/api/getUserList').then((res)=>{
            const action = getListAction(res.data.userlist)
            dispatch(action)
        })
    }
}

