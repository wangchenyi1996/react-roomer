import React, { Component } from 'react'

import './index.scss'

export default class Services extends Component {
    render() {
        return (
            <div>
                <div className="quality u-f u-f-sbc">
                    <div className="quality-item u-f-c u-f-ajc">
                        <div className="icon-q u-f u-f-ajc">
                            <img src={require("@/assets/imgs/home/wifi.png")} alt="wifi" width="20" height="20" />
                        </div>
                        <div className="icon-msg">极速WIFI</div>
                        <div className="labels2">网络精彩不断线</div>
                    </div>
                    <div className="quality-item u-f-c u-f-ajc">
                        <div className="icon-q u-f u-f-ajc">
                            <img src={require("@/assets/imgs/home/baojie.png")} alt="wifi" width="20" height="20" />
                        </div>
                        <div className="icon-msg">优质保洁</div>
                        <div className="labels2">持续保持卫生</div>
                    </div>
                    <div className="quality-item u-f-c u-f-ajc">
                        <div className="icon-q u-f u-f-ajc">
                            <img src={require("@/assets/imgs/home/weixiu.png")} alt="wifi" width="20" height="20" />
                        </div>
                        <div className="icon-msg">专业维修</div>
                        <div className="labels2">维修极速上门</div>
                    </div>
                    <div className="quality-item u-f-c u-f-ajc">
                        <div className="icon-q u-f u-f-ajc">
                            <img src={require("@/assets/imgs/home/guanjia.png")} alt="wifi" width="20" height="20" />
                        </div>
                        <div className="icon-msg">私人管家</div>
                        <div className="labels2">24小时贴心服务</div>
                    </div>
                </div>
                <div className="more u-f u-f-ajc">
                    <button className="more-btn">更多品质房源</button>
                </div>
            </div>
        )
    }
}
