import React, { useContext } from 'react'
import { AppContext } from './Context'

const Messages = () => {
    const { userinfo, state, dispatch } = useContext(AppContext)
    // console.log( userinfo, state, dispatch )
     // 修改count
    const editCount = () => {
        dispatch({ type: 'countUp', value: 3 })
    }
    // 减小
    const subCount = () => {
        dispatch({ type: 'subCount', value: 1 })
    }

    return (
        <div style={{ backgroundColor: 'red',color:'#fff' }}>
            <h1 style={{ paddingTop: 10,marginBottom:20}}>Messages组件</h1>
            <h2 style={{ marginBottom:15 }}>父组件 count 值-----{ state.count }</h2>
            <button style={{height:30,width:100,margin: '15 0'}} onClick={ editCount }> 修改count </button>
            <button style={{height:30,width:100,margin: '15 0'}} onClick={ subCount }> 减小count </button>
            <div style={{ margin:10, padding:10 }}>
                <span>姓名--{userinfo.username}</span>
                <span>年龄--{userinfo.age}</span>
            </div>
        </div>
    )
}

export default Messages