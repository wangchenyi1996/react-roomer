import React, { Component } from 'react'

import './index.scss'

export default class FirstAdvance extends Component {
    // 关掉广告弹框
    isFirst = () => {
        this.props.handleFirst()
    }

    render() {
        let { isflag } = this.props
        if (!isflag) {
            return (
                <div className="first">
                    <div className="u-f-c u-f-ajc" style={{ height: '100%' }}>
                        <img src={require("@/assets/imgs/home/first.png")} alt="" />
                        <img src={require("@/assets/imgs/home/error.png")} onClick={this.isFirst} alt="" />
                    </div>
                </div>
            )
        } else {
            return ''
        }
    }
}
