import { ADD_COUNT,MINUS_COUNT } from '../actionTypes'

export const addCounter = (value) =>{
    return {
        type:ADD_COUNT,
        value
    }
}

export const minCounter = (value) =>{
    return {
        type:MINUS_COUNT,
        value
    }
}
