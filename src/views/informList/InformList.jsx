import React, { Component } from 'react'

import { Toast } from 'antd-mobile';

import './informList.scss'

export default class InformList extends Component {

    //返回
    back = () => {
        const { history } = this.props
        history.goBack()
    }
    //账单通知
    billInform = () => {
        Toast.loading('账单通知页面', 30)
        setTimeout(() => {
            Toast.hide();
        }, 1000);
    }

    //消息通知
    msgInform = ()=> {
        Toast.loading('消息通知页面', 30)
        setTimeout(() => {
            Toast.hide();
        }, 1000);
    }

    //系统通知
    sysInform = ()=> {
        Toast.loading('系统通知页面', 30)
        setTimeout(() => {
            Toast.hide();
        }, 1000);
    }


    render() {
        return (
            <div className="message">
                <div className="msg-header">
                    <img src={require("@/assets/imgs/login/back.png")} alt="返回" onClick={this.back} />
                    消息通知
                </div>
                {/* 通知 */}
                <div className="msg-inform">
                    <div className="inform-item u-f u-f-ac" onClick={ this.billInform }>
                        <img src={require("@/assets/imgs/login/zd.jpg")} alt="通知" />
                        <ul>
                            <li className="inform-title">账单提醒</li>
                            <li className="inform-info">本季度账单详情已发送到您的手机,请有时间注意查收</li>
                        </ul>
                    </div>

                    <div className="inform-item u-f u-f-ac" onClick={ this.msgInform }>
                        <img src={require("@/assets/imgs/login/tz.jpg")} alt="通知" />
                        <ul>
                            <li className="inform-title">通知提醒</li>
                            <li className="inform-info">暂时没有消息哦</li>
                        </ul>
                    </div>

                    <div className="inform-item u-f u-f-ac" onClick={ this.sysInform }>
                        <img src={require("@/assets/imgs/login/xt.jpg")} alt="通知" />
                        <ul>
                            <li className="inform-title">系统消息</li>
                            <li className="inform-info">暂时没有消息哦</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
