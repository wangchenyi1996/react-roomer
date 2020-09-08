import React, { useState, useEffect } from 'react'

import { Button } from 'antd-mobile'

import './index.scss'

export default function Hooks1() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(10);
    const [name, setName] = useState('张三');

    // 1、 componentDidMount and componentDidUpdate  componentWillUnmount
    /**
     * const [count, setCount] = useState(10);
     * 
     * useEffect(() => {
     *    一些操作  
     *    return {
     *       return 里面可以执行清除副作用 比如清除定时器等
     *    }
     * },[count])
     * 1. 如果数组为空，只会执行一次
     * 2. 如果数组加上count字段，则，只有当count状态值改变时，才会触发执行
     */

    useEffect(() => {
        console.log('count--', count)
        return () => {
            console.log('count--useEffect')
        }
    }, [count])

    useEffect(() => {
        console.log('name--',name)
        return () => {
            console.log('name--useEffect')
        }
    }, [name])

    function changeCount() {
        setCount(count + 10)
    }

    return (
        <div>
            <p className="p1"> count: {count}</p>
            <p className="p1"> name: {name}</p>

            <Button type="primary" onClick={() => setCount(count + 10)} className="btn">改变count</Button>
            <Button type="primary" onClick={ changeCount } className="btn">改变count</Button>
            <Button type="primary" onClick={() => setName('李四')} className="btn">改变name</Button>

        </div>
    )
}
