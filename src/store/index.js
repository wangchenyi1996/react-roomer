import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'  
import reducer from './reducer' 

// 创建数据存储仓库
// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())    
// export default store     


// 使用 redux-thunk方式
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store   //暴露出去