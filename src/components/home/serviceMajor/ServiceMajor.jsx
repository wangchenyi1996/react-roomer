import React, { Component } from 'react'

import './index.scss'

export default class ServiceMajor extends Component {
    render() {
        return (
            <div className="major">
                <div className="major-left u-f u-f-sbc">
                    <div className="major-title">
                        <div>诚信服务</div>
                        <div>专业陪伴 一心守护</div>
                    </div>
                    <img src={ require("@/assets/imgs/home/arrow-right.png")} alt="更多" width="20" height="20" />
                </div>
                <div className="major-right u-f u-f-sbc">
                    <img src={ require("@/assets/imgs/home/service/baojie.png")} width="32%" alt="更多"/>
                    <img src={ require("@/assets/imgs/home/service/banjia.png")} width="32%" alt="更多"/>
                    <img src={ require("@/assets/imgs/home/service/weixiu.png")} width="32%" alt="更多"/>
                </div>
            </div>
        )
    }
}
