import React, { Component } from 'react'

// import headerImg from '@/assets/imgs/delegate/bg.jpg'
import './index.scss'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="d_header">
                    <img src={ require('@/assets/imgs/delegate/bg.jpg') } alt="委托" />
                </div>
                <div className="delegate-opt u-f u-f-ajc">
                    <button>委托热线</button>
                    <button>立即委托</button>
                </div>
            </div>
        )
    }
}
