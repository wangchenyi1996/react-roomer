import { CHANGINPUT, CHANGINPUTWORK,ADDITEM,DELETEITEM,GET_LIST } from './actionTypes'

//默认数据
const defaultState = {
    count:0,
    inputValue : 'Write Something',
    works:'Write Working',
    list:[
        // '早上4点起床，锻炼身体',
        // '中午下班游泳一小时'
    ]
}  

export default (state = defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    switch(action.type){
        case CHANGINPUT :
            newState.inputValue = action.value
            return newState
        
        case CHANGINPUTWORK :
            newState.works = action.value
            return newState

        case ADDITEM :
            newState.list.push(newState.inputValue)  //push新的内容到列表中去
            newState.inputValue = ''
            return newState
        case DELETEITEM :
            newState.list.splice(action.index,1)
            return newState

        case GET_LIST :
            newState.list = action.data//复制性的List数组进去
            return newState

        default:
            return state
    }

    
}