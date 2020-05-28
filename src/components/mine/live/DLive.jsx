import React, { Component } from 'react'

// 图片
import r_img from '@/assets/imgs/login/r.png'
import sh1 from '@/assets/imgs/login/sh1.jpg'
import sh2 from '@/assets/imgs/login/sh2.jpg'
import kefu from '@/assets/imgs/login/kefu.jpg'

import './index.scss'

export default class DLive extends Component {
    render() {
        return (
            <div>
                <div className="danke-live">
                    <div className="live-title u-f u-f-sbc">
                        <p className="title">蛋壳生活</p>
                        <div className="u-f u-f-ajc">
                            <span style={{ fontSize:'15px',color:'#919191' }}>有料蛋壳不一样</span>
                            <img src={ r_img } width="22" alt="蛋壳生活"/>
                        </div>
                    </div>
                    <ul className="live-list u-f u-f-sbc">
                        <li className="live-item">
                            <img src={ sh1 } width="100%" alt="蛋壳生活"/>
                            <p>住蛋壳 GO出众-重庆站回顾</p>
                        </li>
                        <li className="live-item">
                            <img src={ sh2 } width="100%" alt="蛋壳生活"/>
                            <p>丰修99元上门换电池</p>
                        </li>
                    </ul>
                </div>
                <div className="customer-service">
                    <img src={ kefu } width="100%" alt="客服"/>
                </div>
            </div>
        )
    }
}
