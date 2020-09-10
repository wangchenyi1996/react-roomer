import React, { forwardRef } from 'react'

const UseRef = forwardRef((props, ref) => {
    console.log(props, ref)
    // 接受父组件传递的测试方法
    function testFunc(){
        props.testF('我是子组件')
    }

    return (
       <div>
            <h1>我是 UseRef 组件</h1>
            <input type="text" placeholder="请输入内容" ref={ref} />
            <button onClick={testFunc}>点击测试</button>
            { props.children }
       </div>
    )
})

export default UseRef