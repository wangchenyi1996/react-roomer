import React, { Component } from 'react'

import './profile.scss'

import HeaderInfo from '@/components/mine/header/Header'
import MyService from '@/components/mine/myService/MyService'
import RoomGuide from '@/components/mine/roomGuide/RoomGuide'
import DLive from '@/components/mine/live/DLive'
import Tenant from '@/components/mine/tenant/Tenant'

// 底部tabbar
import AppFooter from '@/components/footer/'

export default class Profile extends Component {
    state = {
        
    }
    
    // 底部 tabbar
    renderFooter(){
        return <AppFooter />
    }

    render() {
        return (
            <div className="my-container">
                {/* 头部信息 */}
                <HeaderInfo />
                {/* 功能服务区 */}
                <MyService />
                {/* 入住指南 */}
                <RoomGuide />
                {/* 蛋壳生活、客服 */}
                <DLive />
                {/* 租客特权 */}
                <Tenant />
                {/* 底部导航栏 */}
                { this.renderFooter() }
            </div>
        )
    }
}
