import React, { useRef, useReducer, useState, useEffect } from "react";
import { AppContext, initState, myReducer } from './reducer/Context'

import Navbar from './reducer/Navbar'
import Messages from './reducer/Messages'

let userinfo = {
    username: '张小三',
    age: 18
}
export default function App() {
    const inputEl = useRef(null)
    const [state, dispatch] = useReducer(myReducer, initState)
    const [num, setnum] = useState(10)

    useEffect(() => {
        fetch(`http://rap2.taobao.org:38080/app/mock/233782/api/getTabbar`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.tabList)
            });
    }, [])

    const clickAdd = () => {
        dispatch({ type: 'countUp', value: Number(num) })
    }
    const clickAdd2 = () => {
        // 下面这种使用useRef方式获取值
        // console.log(inputEl.current.value)
        handlenum2(inputEl.current.value)
    }
    const handlenum = (e) => {
        setnum(e.target.value)
    }
    const handlenum2 = (value) => {
        setnum(value)
        // 修改count值
        dispatch({ type: 'countUp', value: Number(value) })
    }
    return (
        <AppContext.Provider value={{ userinfo, state, dispatch }}>
            <>
                <Navbar />
                <Messages />
                <div style={{ backgroundColor: 'orange', color: '#fff',padding:15 }}>
                    <input type="text" placeholder="请输入数值" value={num} onChange={handlenum} style={{height:30,lineHeight:30,width:300}}/>
                    <input ref={inputEl} type="text" placeholder="请输入数值" style={{height:30,lineHeight:30,width:300}}/>
                    <button onClick={clickAdd} style={{height:30,width:100}}> 点击 + {num} </button>
                    <button onClick={clickAdd2} style={{height:30,width:100}}> ref 方式点击 </button>
                    <p style={{ marginTop: 20,fontSize:20 }}>count: {state.count}</p>
                </div>
            </>
        </AppContext.Provider>
    );
}
