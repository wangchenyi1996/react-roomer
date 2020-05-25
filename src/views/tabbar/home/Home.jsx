import React, { Component } from 'react'
import {Button} from 'antd-mobile'

import './home.scss'
//引入工具函数
import { getStore } from "@/config/utils.js";

export default class Home extends Component {
    constructor(props){
        super(props)
        let { history } = this.props
        if ( getStore("launchFlag") !== 'true' ) {
            history.push('/welcome') 
        }
    }
    goRedux = ()=> {
        let { history } = this.props
        // console.log(history)
        history.push('/redux')
    }

    goReactRedux = ()=> {
        let { history } = this.props
        // console.log(history)
        history.push('/react')
    }

    render() {
        return (
            <div className="btn-group">
                <Button type="primary" className="btn1" onClick={this.goRedux} >测试Redux</Button>

                <Button type="warning" className="btn2" onClick={this.goReactRedux}>测试react-Redux</Button>
            </div>
        )
    }
}
