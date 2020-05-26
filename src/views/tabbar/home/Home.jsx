import React, { Component } from 'react'

import SwiperHeader from '@/components/home/swiperHeader/SwiperHeader'
import HeaderNav from '@/components/home/headerNav/HeaderNav'
import Intro from '@/components/home/intro/Intro'
import RoomOption from '@/components/home/roomOption/RoomOption'

import './home.scss'
//引入工具函数
import { getStore } from "@/config/utils.js";

export default class Home extends Component {
    constructor(props){
        super(props)
        let { history } = this.props
        if ( getStore("launchFlag") !== 'true' ) {
            history.push('/welcome')
        }
    }

    state = {
      swiperList: [
        {
        "id": 1,
        "url": "https://public.danke.com.cn/public-20191015-FojGewWlpLqD4RMxt_7VrXhPzqsN"
        },
        {
        "id": 2,
        "url": "https://public.danke.com.cn/public-20190908-Fjit4zQaBAN1GTExqrl3r1OwYN-8"
        },
        {
        "id": 3,
        "url": "https://public.danke.com.cn/public-20190606-Fn47vVrRsxTLdwr3CaUoSZJ6jzzl"
        },
        {
        "id": 4,
        "url": "https://public.danke.com.cn/public-20191009-FiZYvj4GTuQ3lP7kYIbT6NJ0kwWF"
        }
      ],
      intro: [
        {
          id: 1,
          img: require("@/assets/imgs/home/ic1.png"),
          text: "100%房源房价"
        },
        {
          id: 2,
          img: require("@/assets/imgs/home/ic2.png"),
          text: "月度双次保洁/极速维修"
        },
        {
          id: 3,
          img: require("@/assets/imgs/home/ic3.png"),
          text: "品质房屋/放心呼吸"
        }
      ],
      roomOption: [
        {
          id: 1,
          img: require("@/assets/imgs/home/hz.png"),
          text: "合租"
        },
        {
          id: 2,
          img: require("@/assets/imgs/home/zz.png"),
          text: "整租"
        },
        {
          id: 3,
          img: require("@/assets/imgs/home/yz.png"),
          text: "月租"
        },
        {
          id: 4,
          img: require("@/assets/imgs/home/dtzf.png"),
          text: "找房"
        }
      ],
    }

    render() {
      let { swiperList,intro,roomOption } = this.state
        return (
          <div className="home-container">
              {/* 头部导航 */}
              <HeaderNav/>
              {/* 轮播 */}
              <SwiperHeader swiperList={ swiperList } />
              {/* 小介绍 */}
              <Intro intro={ intro } />
              {/* 合租、整租、月租、找房 */}
              <RoomOption roomOption={ roomOption } />

          </div>
        )
    }
}
