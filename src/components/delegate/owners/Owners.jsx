import React, { Component } from 'react'

import './index.scss'

export default class Owners extends Component {
    render() {
        return (
            <ul className="labels u-f u-f-asc">
                <li className="label-item u-f-c u-f-ajc">
                    <img src={ require("@/assets/imgs/delegate/ic1.png") } alt=""/>
                    <div className="ic1 intro-item u-f-c">
                        <span>01</span>
                        <span>意向沟通</span>
                    </div>
                </li>
                <li className="label-item u-f-c u-f-ajc">
                    <img src={ require("@/assets/imgs/delegate/ic2.png") } alt=""/>
                    <div className="ic2 intro-item u-f-c">
                        <span>02</span>
                        <span>实勘测量</span>
                    </div>
                </li>
                <li className="label-item u-f-c u-f-ajc">
                    <img src={ require("@/assets/imgs/delegate/ic3.png") } alt=""/>
                    <div className="ic3 intro-item u-f-c">
                        <span>03</span>
                        <span>合作签约</span>
                    </div>
                </li>
                <li className="label-item u-f-c u-f-ajc">
                    <img src={ require("@/assets/imgs/delegate/ic2.png") } alt="" />
                    <div className="intro-item u-f-c">
                        <span>04</span>
                        <span>坐享收益</span>
                    </div>
                </li>
            </ul>
        )
    }
}
