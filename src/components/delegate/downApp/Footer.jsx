import React, { Component } from 'react'
import { Toast } from 'antd-mobile';

import './index.scss'

export default class Footer extends Component {
    
    downApp = ()=>{
        // showToast('正在下载中...'),
        // setTimeout(() => {
        //     Toast.hide();
        // }, 3000);
        Toast.loading('正在下载中...', 30, () => {
           console.log('关闭后进行处理')
        });
        setTimeout(() => {
            Toast.hide();
        }, 1500);
    }

    render() {
        return (
            <div className="delegate-intros">
                <div className="delegate-btn">立即委托</div>
                <p className="tel">委托热线: 400-062-8688</p>
                <img src={ require("@/assets/imgs/delegate/app.png") } onClick={ this.downApp } alt="下载APP"/>
            </div>
        )
    }
}
