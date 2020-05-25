import React, { Component } from 'react'

import './index.scss'

import guideImg from '@/assets/imgs/login/rzzn.jpg'

export default class RoomGuide extends Component {
    render() {
        return (
            <div class="room-guide">
                <p class="guide">入住指南</p>
                <img src={ guideImg } width="100%" alt="入住指南图片"/>
            </div>
        )
    }
}
