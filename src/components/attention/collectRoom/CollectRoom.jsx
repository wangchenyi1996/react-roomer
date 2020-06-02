import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Toast } from 'antd-mobile';

import './index.scss'

class CollectRoom extends Component {

    // 详情
    goDetail =(index)=>{
        const { history } = this.props
        history.push('/roomdetail/'+index)
    }
    // 约看
    meeting = (e)=>{
        // 阻止合成事件间的冒泡
        e.stopPropagation();
        Toast.loading('点击了约看', 30);
        setTimeout(() => {
          Toast.hide();
        }, 1000);
    }

    render() {
        let {item,index} = this.props
        return (
            <div className="lists" onClick={ ()=>this.goDetail(index) }>
                <p className="p1">{item.title}</p>
                <div className="room-item u-f">
                    <img src="http://lc-00shgioj.cn-n1.lcfile.com/b21aa716b308d307b501/1.jpg" className="room-left" alt=""/>
                    <div className="room-right">
                        <p className="p2">合租 | 三室一厅 12m² 10/30层</p>
                        <p className="p3">距离1号线1000米</p>
                        <ul className="u-f p4">
                            {
                                item.label.map((l,i)=>(
                                    <li key={i}>{ l }</li>
                                ))
                            }
                        </ul>
                        <div className="p5 u-f u-f-sbc">
                            <div>
                                <span>￥</span>
                                <span>680</span>
                                <span>/首月</span>
                                <span>990</span>
                            </div>
                            <div className="yk" onClick={ (e)=> this.meeting(e) }>约看</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CollectRoom)