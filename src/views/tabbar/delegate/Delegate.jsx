import React, { Component } from 'react'

import './delegate.scss'

import Header from '@/components/delegate/header/Header'
import Intro from '@/components/delegate/intro/Intro'
import Owners from '@/components/delegate/owners/Owners'
import IntroSwiper from '@/components/delegate/introSwiper/IntroSwiper'
import MyVideo from '@/components/delegate/myVideo/MyVideo'
import Footer from '@/components/delegate/downApp/Footer'

// 底部tabbar
import AppFooter from '@/components/footer/'

export default class Delegate extends Component {
    state = {
        info1:{
            title:'简单4步 做省心房东',
            entitle:'NEEDS FOUR SIMPLE STEPS'
        },
        info2:{
            title:'业主收益指南',
            entitle:'REVENUE GUIDE'
        },
        info3:{
            title:'了解蛋壳',
            entitle:'LEARN ABOUT DANKE'
        }
    }

     // 底部 tabbar
    renderFooter(){
        return <AppFooter />
    }

    render() {
        let { info1,info2,info3 } = this.state
        return (
            <div className="delegate-container">
                {/* 头部图片 */}
                <Header />
                {/*  介绍-简介1 */}
                <Intro info={ info1 } />
                {/* 业主权益 */}
                <Owners />
                {/* 介绍-简介2 */}
                <Intro info={ info2 }/>
                {/* 介绍轮播 */}
                <IntroSwiper />
                {/* 介绍-简介3 */}
                <Intro info={ info3 }/>
                {/* 视频介绍 */}
                <MyVideo />
                {/* 下载APP、委托 */}
                <Footer />
                {/* 底部导航栏 */}
                { this.renderFooter() }
            </div>
        )
    }
}
