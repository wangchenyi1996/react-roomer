import { ADD_COUNT } from '../actionTypes'

const defaultState={
    count:0
}

export  function todoList2(state = defaultState,action){
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    switch(action.type){
        case ADD_COUNT :
            newState.count = action.value
            return newState
        default:
            return state
    }
} 