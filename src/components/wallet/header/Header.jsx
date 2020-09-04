import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {Toast} from 'antd-mobile'

import './index.scss'

class Header extends Component {

    myWallet =()=>{
        Toast.loading('点击了账户明细', 30);
        setTimeout(() => {
          Toast.hide();
        }, 1000);
    }

    render() {
        return (
            <div className="msg-header">
                <img src={ require("@/assets/imgs/login/back.png") } onClick={ this.props.history.goBack }  alt="返回"/>
                我的钱包
                <span style={{ position:'absolute',right:'10px',top:'0px',fontSize:'14px'}} onClick={ this.myWallet }>账户明细</span>
            </div>
        )
    }
}


export default withRouter(Header)