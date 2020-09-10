import React, { useContext } from "react";
import { AppContext } from './Context'

const Navbar = () => {
    const { state, dispatch } = useContext(AppContext)
    // const props = useContext(AppContext)
    // console.log(props)

    // 修改count
    const editCount = () => {
        dispatch({ type: 'countUp', value: 7 })
    }

    return (
        <div style={{ backgroundColor: 'yellowgreen',color:'#fff',padding:10,marginBottom:15 }}>
            <h1 style={{ paddingTop: 10,marginBottom:20}}>Navbar组件</h1>
            <h2 style={{ marginBottom:15 }}>父组件 count 值-----{ state.count }</h2>
            <button style={{height:30,width:100,margin: '15 0'}} onClick={ editCount }> 修改count </button>
        </div>
    )
}

export default Navbar