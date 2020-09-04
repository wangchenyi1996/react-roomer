import React, { Component } from 'react'
import './index.scss'

export default class walletList extends Component {
    render() {
        return (
            <ul className="m-list">
                <li className="u-f u-f-sbc">
                    <div className="left1 u-f u-f-ac">
                        <img src={require("@/assets/imgs/login/icm-1.png")} alt="" />
                        <div className="intro u-f-c u-f-jc">
                            <span>待扣缴服务</span>
                            <span>委托蛋壳代扣，省时省心</span>
                        </div>
                    </div>
                    <img src={require("@/assets/imgs/login/r.png")} className="right" alt="" />
                </li>
                <li className="u-f u-f-sbc">
                    <div className="left1 u-f u-f-ac">
                        <img src={require("@/assets/imgs/login/icm-2.png")} alt=""/>
                        <div className="intro u-f-c u-f-jc">
                            <span>费用报销</span>
                            <span>向蛋壳申请垫付、报销账单</span>
                        </div>
                    </div>
                    <img src={require("@/assets/imgs/login/r.png")} className="right" alt="" />
                </li>
                <li className="u-f u-f-sbc">
                    <div className="left1 u-f u-f-ac">
                        <img src={require("@/assets/imgs/login/icm-3.png")} alt="" />
                        <div className="intro u-f-c u-f-jc">
                            <span>银行卡管理</span>
                            <span>只能绑定本人相关银行卡</span>
                        </div>
                    </div>
                    <img src={require("@/assets/imgs/login/r.png")} className="right" alt="" />
                </li>
            </ul>
        )
    }
}
