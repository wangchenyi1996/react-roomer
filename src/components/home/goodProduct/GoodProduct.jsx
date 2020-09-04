import React, { Component } from 'react'

import './index.scss'

export default class GoodProduct extends Component {

    render() {
        let { goodProduct } = this.props
        return (
            <div className="slide-scroll1">
                <div className="u-f u-f-sbc">
                    <div>
                        <div className="th-title">自如优品</div>
                        <div style={{ fontSize: '12px', color: '#969a9d', marginTop: '10px' }}>甄选家居好物 点亮美好生活</div>
                    </div>
                    <img src={require("@/assets/imgs/home/arrow-right.png")} width="20" alt="" />
                </div>
                <div className="slide-list u-f">
                    {
                        goodProduct.map((item) => (
                            <div className="slide-item" key={item.id}>
                                <div>
                                    <img
                                        src={item.img}
                                        alt="房屋图片"
                                        style={{ width: '100%', borderRadius: '4px' }}
                                    />
                                </div>
                                <div className="room-where1">{item.roomWhere}</div>
                                <div className="discount u-f u-f-sbc">
                                    <span style={{ color: '#ff7966', fontSize: '12px', fontWeight: 'bolder' }}>￥{item.price}</span>
                                    <img src={require("@/assets/imgs/home/cart.png")} width="20" height="20" style={{marginRight:'10px'}} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        )
    }
}
