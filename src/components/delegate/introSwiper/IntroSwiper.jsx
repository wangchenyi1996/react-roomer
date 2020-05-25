import React, { Component } from 'react'

import { Carousel } from 'antd-mobile';

import './index.scss'

export default class IntroSwiper extends Component {
    state = {
        currentIndex:0
    }

    // 滑动事件
    swiperChange = (index)=> {
        this.setState({
             currentIndex:index
        })
    }

    render() {
        let { currentIndex } = this.state
        return (
            <div className="banners-bg u-f u-f-ajc">
                <div className="banners">
                    <Carousel 
                        selectedIndex={ currentIndex }
                        style={{ height:'240px' }}
                        className="dots"
                        dotActiveStyle={{ backgroundColor:'#654f3a' }}
                        afterChange={ (index)=> this.swiperChange(index) }
                    >
                        <div className="pp-t">
                            <p className="p1">甩手掌柜</p>
                            <p className="p2">蛋壳保证与业主签署合同后及时打款。</p>
                            <p className="p3">在房屋整个租期内，有蛋壳专业管家打理，省心省力，坐享收益。</p>
                            <p className="p4">房屋升级改造，配置全套家具、家电，实现高额增值服务。</p>
                        </div>
                    
                        <div className="pp-t">
                            <p className="p1">省时省心</p>
                            <p className="p2">蛋壳保证与业主签署合同后及时打款。</p>
                            <p className="p3">在房屋整个租期内，有蛋壳专业管家打理，省心省力，坐享收益。</p>
                            <p className="p4">房屋升级改造，配置全套家具、家电，实现高额增值服务。</p>
                        </div>
                    
                        <div className="pp-t">
                            <p className="p1">安全无忧</p>
                            <p className="p2">出租人群严格筛选，高素质租户。</p>
                            <p className="p3">租约结束后，蛋壳会为您的房子做深度保洁。</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}
