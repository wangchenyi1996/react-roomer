import React, { Component } from 'react'

import './index.scss'

import guideImg from '@/assets/imgs/login/rzzn.jpg'

export default class RoomGuide extends Component {
    render() {
        return (
            <div className="room-guide">
                <p className="guide">入住指南</p>
                <img src={ guideImg } width="100%" alt="入住指南图片"/>
            </div>
        )
    }
}
