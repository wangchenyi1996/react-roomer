import React, { Component } from 'react'

import './index.scss'

export default class Intro extends Component {
    render() {
        // console.log(this.props)
        let { info } = this.props
        return (
            <div className="intro1">
                <p className="title">{info.title}</p>
                <p className="title2">{info.entitle}</p>
            </div>
        )
    }
}
