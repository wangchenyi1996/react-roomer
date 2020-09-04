import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './index.scss'

class DiscountRoom extends Component {
    // 跳转到房屋详情页面
    goDetail(id) {
        // console.log('id:',id)
        const { history } = this.props
        history.push({ pathname: "/roomdetail/" + id });
    }


    render() {
        let { discountRoom } = this.props
        // console.log(discountRoom)

        return (
            <div className="slide-scroll">
                <div className="u-f u-f-sbc">
                    <div className="th-title">特惠房源</div>
                    <img src={require("@/assets/imgs/home/arrow-right.png")} width="20" alt="" />
                </div>
                <div className="slide-list u-f">
                    {
                        discountRoom.map((item) => {
                            return (
                                <div className="slide-item" key={item.id} onClick={() => this.goDetail(item.id)}>
                                    <div>
                                        <img
                                            src={item.img}
                                            alt="房屋图片"
                                            style={{ width: '100%', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <div className="room-where">{item.roomWhere}</div>
                                    <div className="discount">
                                        <span style={{ color: '#ff7966', transform: 'scale(.8)', display: 'inline-block' }}>￥</span>
                                        <span style={{ color: '#ff7966', fontSize: '14px' }}>{item.price}</span>
                                        <span style={{ color: '#666', transform: 'scale(.8)', display: 'inline-block' }}>/首月</span>
                                        <span
                                            style={{ color: '#666', transform: 'scale(.9)', display: 'inline-block', textDecoration: 'line-through' }}
                                        >{item.oldPrice}</span>
                                    </div>
                                    <div className="u-f u-f-ac">
                                        {/* 标签数组遍历 */}
                                        {
                                            item.label.map((label) => {
                                                return (
                                                    <span key={label.id} className={label.id === 2 ? 'fw-lb-t1' : 'fw-lb-t2'}>{label.msg}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(DiscountRoom)