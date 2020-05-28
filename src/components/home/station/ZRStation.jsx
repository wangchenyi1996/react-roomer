import React, { Component } from 'react'

import './index.scss'

export default class ZRStation extends Component {
    render() {
        let commonArr = [1,2,3,4,5]
        return (
            <div className="station">
                <div className="station-left u-f u-f-sbc">
                    <div className="station-title">
                        <div>旅行驿站</div>
                        <div>世界青年欢乐旅行驿站</div>
                    </div>
                    <img src={ require("@/assets/imgs/home/arrow-right.png") } alt="更多" width="20" height="20" />
                </div>
                <div className="box u-f">
                    <div className="item u-f u-f-c">
                        <div className="u-f">
                            <img src={ require("@/assets/imgs/home/room/s1.png")} alt="驿站" className="img" />
                            <div className="station-small u-f u-f-c">
                                <img src={ require("@/assets/imgs/home/room/s2.png")} alt="附图"/>
                                <img src={ require("@/assets/imgs/home/room/s3.png")} alt="附图"/>
                            </div>
                        </div>
                        <div className="info-desc">
                            <ul className="title-desc u-f u-f-sbc">
                                <li className="big-title">武汉大陆坊自如驿</li>
                                <li style={{ marginRight:'8px'}}>
                                    <span style={{ fontSize:'16px',color:'#FC9721',fontWeight:'500' }}>￥133</span>
                                    <span style={{ fontsize:'13px',color:'#FC9721' }}>/床起</span>
                                </li>
                            </ul>
                            <div className="where-desc">百年建筑 银行之驿</div>
                            <div className="comment-desc">
                                {
                                    commonArr.map((item)=>{
                                        return (
                                            <img
                                                src={require("@/assets/imgs/home/wjx.png")}
                                                width="11"
                                                height="11"
                                                alt="评论五角星"
                                                key={item}
                                            />
                                        )
                                    })
                                }
                                <span style={{ color:'#919191',display:'inline-block',marginleft:'10px' }}>127条评论</span>
                            </div>
                            <ul className="labels u-f">
                                <li className="label-item">赏樱首选</li>
                                <li className="label-item">民国风情</li>
                                <li className="label-item">音乐社交</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item u-f u-f-c">
                        <div className="u-f">
                            <img src={ require("@/assets/imgs/home/room/ss1.png")} alt="驿站" className="img" />
                            <div className="station-small u-f u-f-c">
                                <img src={ require("@/assets/imgs/home/room/ss2.png")} alt="附图"/>
                                <img src={ require("@/assets/imgs/home/room/ss3.png")} alt="附图"/>
                            </div>
                        </div>
                        <div className="info-desc">
                            <ul className="title-desc u-f u-f-sbc">
                                <li className="big-title">北京三里屯团结自如驿</li>
                                <li style={{ marginRight:'8px'}}>
                                    <span style={{ fontSize:'16px',color:'#FC9721',fontWeight:'500' }}>￥268</span>
                                    <span style={{ fontsize:'13px',color:'#FC9721' }}>/床起</span>
                                </li>
                            </ul>
                            <div className="where-desc">霓虹三里 团结之驿</div>
                            <div className="comment-desc">
                                {
                                    commonArr.map((item)=>{
                                        return (
                                            <img
                                                src={require("@/assets/imgs/home/wjx.png")}
                                                width="11"
                                                height="11"
                                                alt="评论五角星"
                                                key={item}
                                            />
                                        )
                                    })
                                }
                                <span style={{ color:'#919191',display:'inline-block',marginleft:'10px' }}>189条评论</span>
                            </div>
                            <ul className="labels u-f">
                                <li className="label-item">两周年庆</li>
                                <li className="label-item">开业有礼</li>
                                <li className="label-item">健身房</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
