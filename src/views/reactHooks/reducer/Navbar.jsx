import React, { useContext,useRef } from "react";
import { AppContext } from './Context'

import UseRef from './UseRef'

const Navbar = () => {
    let comRef = useRef(null)
    const { state, dispatch } = useContext(AppContext)
    // const props = useContext(AppContext)
    // console.log(props)

    // 修改count
    const editCount = () => {
        dispatch({ type: 'countUp', value: 7 })
    }

    // 获取组件
    const getRefBySun = ()=>{
        // console.log(comRef)
        comRef.current.focus()
        // console.log('输入框内容：',comRef.current.value)
    }

    function test(msg){
        console.log('传递给子组件的方法---------',msg)
    }

    return (
        <div style={{ backgroundColor: 'yellowgreen',color:'#fff',padding:10,marginBottom:15 }}>
            <h1 style={{ paddingTop: 10,marginBottom:20}}>Navbar组件</h1>
            <h2 style={{ marginBottom:15 }}>父组件 count 值-----{ state.count }</h2>
            <button style={{height:30,width:100,margin: '15 0'}} onClick={ editCount }> 修改count </button>
            <h2 style={{ marginBottom:15 }}>组件中使用 useRef </h2>

            <UseRef ref={ comRef } title = '我是最帅的' testF={test}>
                <ul>
                    <li>我是最帅的</li>
                    <li>我是最帅的</li>
                    <li>我是最帅的</li>
                </ul>
                <p style={{ color: 'red' }}>hello world</p>
            </UseRef>
            <button onClick={getRefBySun} style={{height:30,width:100,margin: '15 0'}}>获取组件</button>
        </div>
    )
}

export default Navbar