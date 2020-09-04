import React, { useState, useEffect } from 'react'

import { Button } from 'antd-mobile'

export default function Hooks1() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);
    const [name,setName] = useState('张三')

    // function changeCount(){
    //     setCount(count+10)
    // }

    // 1、 componentDidMount and componentDidUpdate  componentWillUnmount
    // useEffect(()=>{
    //     console.log('count--',count)
    // })

    useEffect(()=>{
        console.log('count--',count)
        return ()=>{
            console.log('componentWillUnmount ')
        }
    },[count])

    useEffect(()=>{
        console.log('name--',name)
        return ()=>{
            console.log('componentWillUnmount ')
        }
    },[name])

    return (
        <div>
            <p style={{ margin:'20px',fontSize:'20px' }}> count: { count }</p>
            <p style={{ margin:'20px',fontSize:'20px' }}> name: { name }</p>


            <Button  type="primary" onClick={ () => setCount(count+10) }  
            style={{ width:'200px',margin:'30px auto',height:'30px',lineHeight:'30px' }}>改变count</Button>
             {/* <Button  type="primary" onClick={ changeCount }
            style={{ width:'200px',margin:'30px auto',height:'30px',lineHeight:'30px' }}>改变count</Button> */}

            <Button  type="primary" onClick={ () => setName('李四') }  
            style={{ width:'200px',margin:'30px auto',height:'30px',lineHeight:'30px' }}>改变name</Button>

        </div>
    )
}
