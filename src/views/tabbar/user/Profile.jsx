import React, { Component } from 'react'

import './user.scss'

import HeaderInfo from '@/components/mine/header/Header'
import MyService from '@/components/mine/myService/MyService'
import RoomGuide from '@/components/mine/roomGuide/RoomGuide'

export default class Profile extends Component {
    state = {
        
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

            </div>
        )
    }
}
