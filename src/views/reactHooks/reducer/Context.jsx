import { createContext } from "react";

export const AppContext = createContext({});

export let initState = { count: 0 }

export const myReducer = (state, action) => {
    // console.log(action)
    switch (action.type) {
        case 'countUp':
            return {
                ...state,
                count: state.count + action.value
            }
        case 'subCount':
            return {
                ...state,
                count: state.count - action.value
            }
        default:
            return state
    }
}