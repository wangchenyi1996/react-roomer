import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './index.scss'

class Header extends Component {
    render() {
        return (
            <div className="msg-header">
                <img src={ require("@/assets/imgs/login/back.png") } onClick={ this.props.history.goBack }  alt="返回"/>
                关注/足迹
            </div>
        )
    }
}


export default withRouter(Header)