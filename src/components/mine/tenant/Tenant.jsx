import React, { Component } from 'react'

// 图片
import s1 from '@/assets/imgs/login/s1.jpg'
import s2 from '@/assets/imgs/login/s2.jpg'
import s3 from '@/assets/imgs/login/s3.jpg'

import './index.scss'

export default class Tenant extends Component {
    render() {
        return (
            <div>
                <div className="room-service">
                    <p className="service">租客特权</p>
                    <div className="u-f">
                        <img src={ s1 } width="33%" height="33%" alt=""/>
                        <img src={ s2 } width="33%" height="33%" alt=""/>
                        <img src={ s3 } width="33%" height="33%" alt=""/>
                    </div>
                </div>
                <div className="end">—— 让租房变得简单和快乐 ——</div>
            </div>
        )
    }
}
