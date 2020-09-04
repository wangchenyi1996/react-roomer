import React, { Component } from 'react'
import { Button } from 'antd-mobile'

export default class Hooks01 extends Component {

    goHooks01 = ()=>{
        let { history } = this.props
        history.push('/hooks1')
    }

    render() {
        return (
            <div>
                <Button type="warning" size="small" onClick={ this.goHooks01 }  style={{ width:'200px',margin:'30px auto' }}>测试 Hooks 01</Button>
            </div>
        )
    }
}
