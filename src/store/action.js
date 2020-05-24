/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangqiang
 * @Date: 2020-04-24 19:40:56
 * @LastEditors: wangqiang
 * @LastEditTime: 2020-05-24 21:44:17
 * @FilePath: \Vued:\react_project\react-roomer\src\store\action.js
 */ 
import axios from 'axios'

import { CHANGINPUT, CHANGINPUTWORK,ADDITEM, DELETEITEM, GET_LIST, ADD_COUNT } from './actionTypes'

export const changInputAction = (value) =>{
    return {
        type:CHANGINPUT,
        value
    }
}
export const changWorkAction = (value) =>{
    return {
        type:CHANGINPUTWORK,
        value
    }
}
export const addItemAction = () =>{
    return {
        type:ADDITEM
    }
}
export const delItemAction = (index) =>{
    return {
        type:DELETEITEM,
        index
    }
}
export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})
// 异步方式
export const getTodoList = () =>{
    return dispatch =>{
        // console.log('dispatch:',dispatch);
        
        axios.post('http://rap2.taobao.org:38080/app/mock/234046/api/home_my_channel').then((res)=>{
            const list = []
            res.data.data.mylist.forEach ((item)=>{
                list.push(item.name1)
            })
            const action = getListAction(list)
            dispatch(action)

        })
    }
}


export const addCounter = (value) =>{
    return {
        type:ADD_COUNT,
        value
    }
}

