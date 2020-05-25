import React, { Component } from 'react'

import {withRouter } from 'react-router-dom'

import gz from '@/assets/imgs/login/icon/gz.png'
import zj from '@/assets/imgs/login/icon/zj.png'
import qb from '@/assets/imgs/login/icon/qb.png'
import yhj from '@/assets/imgs/login/icon/yhj.png'
import ydjl from '@/assets/imgs/login/icon/ydjl.png'

import './myService.scss'

class MyService extends Component {
    // { id: 13,type:1, path: "/attention/:id", component: Attention, exact:false },
    // { id: 14,type:1, path: "/wallet", component: Wallet, exact:false },
    // { id: 15,type:1, path: "/coupon", component: Coupon, exact:false },
    // { id: 16,type:1, path: "/record", component: Reservation, exact:false },

    // 关注-足迹
    attention = (id)=> {
        const { history } = this.props
        history.push({pathname:"/attention/"+id});
    }
    // 我的钱包
    goWallet = ()=>{
        const { history } = this.props
        history.push('/wallet');
    }
    // 优惠卷
    goCoupon = ()=>{
        const { history } = this.props
        history.push('/coupon');
    }
    // 预定记录
    goRecord = ()=> {
        const { history } = this.props
        history.push('/record');
    }

    render() {
        return (
            <ul className="my-list u-f u-f-asc">
                <li className="u-f-c u-f-ajc" onClick={ ()=>this.attention(0) }>
                    <img src={ gz } alt="关注"/>
                    <span>关注</span>
                </li>
                    <li className="u-f-c u-f-ajc" onClick={ ()=>this.attention(1) }>
                    <img src={ zj } alt="足迹"/>
                <span>足迹</span>
                </li>
                <li className="u-f-c u-f-ajc" onClick={ this.goWallet }>
                    <img src={ qb } alt="钱包"/>
                    <span>钱包</span>
                </li>
                <li className="u-f-c u-f-ajc" onClick={ this.goCoupon }>
                    <img src={ yhj } alt="优惠卷"/>
                    <span>优惠卷</span>
                </li>
                <li className="u-f-c u-f-ajc" onClick={ this.goRecord }>
                    <img src={ ydjl } alt="预定记录"/>
                    <span>预定记录</span>
                </li>
            </ul>
        )
    }
}

export default withRouter(MyService)