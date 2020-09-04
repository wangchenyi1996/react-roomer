import React, { Component } from 'react'

import { Carousel } from 'antd-mobile';
import './welcome.scss'

import w1 from '@/assets/imgs/welcome/1.png'
import w2 from '@/assets/imgs/welcome/2.png'
import w3 from '@/assets/imgs/welcome/3.png'

//引入工具函数
import { setStore, getStore } from "@/config/utils.js";

export default class Welcome extends Component {
    constructor(props){
        super(props)
        // 获取缓存标志
        let flag = getStore("launchFlag");
        let { history } = this.props
        if (flag==='true') {
            history.push('/home') 
        }
    }

    state = {
        currentIndex:0,
        // 图片
        data: [w1,w2,w3]
    }

    // 滑动事件
    swiperChange = (index)=> {
       this.setState({
            currentIndex:index
        })
    }

    // 跳过
    jump = ()=> {
        setStore("launchFlag", true);
        const { history } = this.props
        history.push('/home') 
    }

    render() {
        let { currentIndex,data } = this.state
        return (
            <Carousel
                selectedIndex={currentIndex}
                className="dots"
                dotActiveStyle={{ backgroundColor:'#654f3a',width:'14px' }}
                afterChange={ (index)=> this.swiperChange(index) }
            >
                {   
                    data.map((val,index) => (
                        <div  key={ val }>
                            {
                                index === data.length-1
                                ? <div className="u-f u-f-ajc"  onClick={ this.jump }><p className="find-sth">发现新事物</p></div> 
                                : <div className="jump-over" onClick={ this.jump }>跳过</div> 
                            }
                            <img
                                alt="轮播图"
                                src={val}
                                style={{ width: '100%', height: '100%' }}
                                onLoad={() => {
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </div>
                    ))
                }
            </Carousel>
        );
    }
}
