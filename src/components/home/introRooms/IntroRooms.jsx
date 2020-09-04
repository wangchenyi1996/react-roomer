import React, { Component } from 'react'

import './index.scss'

export default class IntroRooms extends Component {
    render() {
        let { roomIntro } = this.props
        return (
            <div className="u-f intro">
                <div className="left u-f-item">
                    <img src={roomIntro[0].img} width="100%" className="intro-img" alt="" />
                </div>
                <div className="right u-f-item">
                    <img src={roomIntro[1].img} width="100%" className="intro-img" alt="" />
                    <img src={roomIntro[2].img} width="100%" className="intro-img" alt="" />
                </div>
            </div>
        )
    }
}
