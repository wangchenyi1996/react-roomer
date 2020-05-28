import { ADD_COUNT,MINUS_COUNT } from '../actionTypes'

// 引入深拷贝
import { deepClone } from '@/config/utils'

const defaultState={
    count:0
}

export default function roomer(state = defaultState,action){
    //深度拷贝state
    let newState = deepClone(state) 
    switch(action.type){
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