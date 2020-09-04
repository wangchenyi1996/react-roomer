import React, { Component } from 'react'
import { Tabs, Checkbox } from 'antd-mobile';

import './attention.scss'

import Header from '@/components/attention/header/Header'
import CollectRoom from '@/components/attention/collectRoom/CollectRoom'
import Footer from '@/components/common/lines/Lines'

export default class Attention extends Component {

    state = {
        id: +this.props.match.params.id,
        tabs: [
            { title: '我的关注' },
            { title: '我的足迹' },
        ],
        showData: false,
        showCollect: false,
        //简单模拟关注、足迹数据
        gzData: [
            {
                id: 1,
                title: "龙眠大道 天景山公寓花锦苑 主卧 朝南 B室",
                label: ["首月五折"],
                checked: false
            },
            {
                id: 2,
                title: "集庆门大街 万达东坊 次卧 朝西 A室",
                label: ["首月五折"],
                checked: false
            },
            {
                id: 3,
                title: "珠江路 万达东坊 次卧 朝西 401室",
                label: ["首月五折"],
                checked: false
            }
        ],
        zjData: [
            {
                title: "龙眠大道 天景山公寓花锦苑 主卧 朝南 B室",
                label: ["首月五折", "地铁周边", "独立阳台"]
            },
            {
                title: "集庆门大街 万达东坊 次卧 朝西 A室",
                label: ["首月五折", "地铁周边", "独立阳台"]
            },
            {
                title: "龙眠大道 天景山公寓花锦苑 主卧 朝南 B室",
                label: ["首月五折", "地铁周边", "独立阳台"]
            },
            {
                title: "集庆门大街 万达东坊 次卧 朝西 A室",
                label: ["首月五折", "地铁周边", "独立阳台"]
            }
        ]
    }

    handleChange = (tab, index) => {
        this.setState({
            id: index
        })
    }
    handleClick = (tab, index) => {
        // console.log(tab,index)
        this.setState({
            id: index
        })
    }

    handleShow = () => {
        this.setState({
            showCollect: true
        })
    }
    // 取消
    cancle = () => {
        this.setState({
            showCollect: false
        })
    }
    // 全选/反选
    checkAll = () => {
        let { gzData } = this.state
        gzData.forEach((item) => {
            item.checked = !item.checked
        })
        // console.log(gzData)
        this.setState({
            gzData
        })

    }
    // 删除(单个/多个/全部)
    delCollect = () => {
        let { gzData } = this.state
        let temp = gzData.filter((item) => {
            return item.checked === true
        })
        // console.log(temp)
        if (temp.length === gzData.length) {
            this.setState({
                gzData: []
            })
        } else {
            let idx = []
            gzData.forEach((item) => {
                temp.forEach((i1) => {
                    if (item.id === i1.id) {
                        idx.push(item.id)
                    }
                })
            })
            // console.log(idx)
            idx.forEach(item => {
                gzData.forEach((i1, i) => {
                    if (item === i1.id) {
                        gzData.splice(i, 1)
                    }
                })
            })
            this.setState({
                gzData
            })
        }

    }

    onChange = (val) => {
        let { gzData } = this.state
        gzData.forEach((item, index) => {
            if (index === val) {
                item.checked = !item.checked
            }
        })
        // console.table(gzData)
        this.setState({
            gzData
        })
    }

    render() {
        let { tabs, id, showCollect, gzData, showData,zjData } = this.state
        // console.log('id:', id)
        const CheckboxItem = Checkbox.CheckboxItem;
        return (
            <div className="attention-container">
                {/* 头部 */}
                <Header />

                {/* tab 导航 */}
                <div className="tabs">
                    <Tabs tabs={tabs}
                        activeTab={id}
                        initialPage={id}
                        tabBarUnderlineStyle={{ width: '20px', border: '2px solid #54cbcc', marginLeft: '22.5%', borderRadius: '10px' }}
                        tabBarActiveTextColor="#54cbcc"
                        tabBarInactiveTextColor="#333333"
                        onChange={(tab, index) => { this.handleChange(tab, index) }}
                        onTabClick={(tab, index) => { this.handleClick(tab, index) }}
                    >
                        <div style={{ backgroundColor: '#fff', border: 'none' }}>
                            {
                                !showData ? '' :
                                <div className="no-data">
                                    <div className="no-title">共关注了0间房屋、0个小区</div>
                                    <div className="no u-f-c u-f-ajc">
                                        <img src={require("@/assets/imgs/login/no-list.png")} className="no-img" alt="" />
                                        <span className="no-btn">去找房</span>
                                    </div>
                                </div>
                            }

                            <div className="collect">
                                {
                                    !showCollect ?
                                        <div className="no-title u-f u-f-sbc">
                                            <span>共关注了2间房屋、2个小区</span>
                                            <img src={require("@/assets/imgs/login/check.png")} alt="" onClick={this.handleShow} />
                                        </div> : null
                                }
                                {
                                    showCollect ?
                                        <ul className="is-collect u-f u-f-sbc">
                                            <li onClick={this.cancle}>取消</li>
                                            <li onClick={this.checkAll}>全选</li>
                                            <li onClick={this.delCollect}>删除</li>
                                        </ul>
                                        : null
                                }
                                <div className="collect-list">
                                    {
                                        showCollect ?
                                            <div>
                                                {
                                                    gzData.map((item, index) => (
                                                        <div key={item.id} className="u-f" style={{ marginTop: '15px', borderRadius: '4px' }}>
                                                            <CheckboxItem
                                                                checked={item.checked}
                                                                onChange={() => this.onChange(index)}
                                                                style={{ background: '#f9f9f9', width: '38px', paddingLeft: '10px' }} />
                                                            <CollectRoom item={item} index={index} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            : null
                                    }
                                    {
                                        !showCollect ?
                                            gzData.map((item, index) => (
                                                <div style={{ marginTop: '15px' }} key={item.id}>
                                                    <CollectRoom item={item} index={index} />
                                                </div>
                                            ))
                                            : null
                                    }
                                </div>
                            </div>

                            {/* 推荐房源 */}
                            <div className="tj">
                                <p className="title">推荐房源</p>
                                {
                                    gzData.map((item, index) => (
                                        <div style={{ marginTop: '15px' }} key={item.id}>
                                            <CollectRoom item={item} index={index} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#fff', border: 'none' }}>
                            <div className="footers">
                                <div className="no-title">共浏览了五套房源</div>
                                {
                                    zjData.map((item, index) => (
                                        <div style={{ marginTop: '15px' }} key={index}>
                                            <CollectRoom item={item} index={index} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Tabs>
                </div>
            
                {/* 尾部 */}
                <Footer />

            </div>
        )
    }
}
