import React, { Component } from 'react'

import {withRouter } from 'react-router-dom'

import './index.scss'

import s_img from '@/assets/imgs/login/set.png'
import s_logo from '@/assets/imgs/login/no.png'
import s_vip from '@/assets/imgs/login/vip.png'
import s_vip2 from '@/assets/imgs/login/vip2.jpg'
import s_face from '@/assets/imgs/login/face.jpg'

import { debounce2 } from '@/config/utils'

class Header extends Component {

    state = {
        isShow:true,
        userInfo:{
            isLogin:true,
            mobile: '18112646778'.replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')
        },
        //控制渐变标题栏的参数
        beforeHeaderzIndex: 11, //层级
        afterHeaderzIndex: 10, //层级
        beforeHeaderOpacity: 1, //不透明度
        afterHeaderOpacity: 0, //不透明度
    }

    componentDidMount(){
        window.addEventListener("scroll", debounce2(this.handleScroll,10,true));
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }

    // 处理滚动
    handleScroll = (e)=> {
        // console.log(e.target.documentElement.scrollTop)
        let top = document.documentElement.scrollTop;
        //导航栏渐变
        let tmpY = 90;
        top = top > tmpY ? tmpY : top;
        console.log(top * (1 / tmpY))
        if(top>0){
            this.setState({
                afterHeaderOpacity: top * (1 / tmpY),
                beforeHeaderOpacity: 1 - this.afterHeaderOpacity,
                beforeHeaderzIndex: 10,
                afterHeaderzIndex: 11
            })
        }else{
            this.setState({
                afterHeaderOpacity: top * (1 / tmpY),
                beforeHeaderOpacity: 1 - this.afterHeaderOpacity,
                beforeHeaderzIndex: 11,
                afterHeaderzIndex: 10
            })
        }
    }
    isShowComponent =()=>{
        let {userInfo,afterHeaderOpacity,beforeHeaderzIndex,afterHeaderzIndex } = this.state
        return (
            <>
               <div className="headers" style={{ opacity: 1 - afterHeaderOpacity, zIndex: beforeHeaderzIndex }}>
                    <div className="header u-f u-f-sbc">
                        <img src={ s_img } alt="设置图标" onClick={ this.goSet }/>
                        <i className="iconfont icon-xiaoxi iconmsg" onClick={ this.goMsg }></i>
                        { userInfo.isLogin ? <span className="msg-dot"></span> : '' }
                    </div>
                </div>
               <div className="fix-header u-f u-f-sbc" style={{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex }}>
                    <div className="users u-f u-f-ac">
                        { userInfo.isLogin 
                            ? 
                            <>
                                <img src={ s_face } alt="login" /> 
                                <span>{ userInfo.mobile}</span>
                            </>
                            : 
                            <>
                                <img src={ s_logo } alt="login" /> 
                                <span onClick={ this.goLogin }>点击登录</span>
                            </>
                        }
                    </div>
                    <div className="msg2" onClick={ this.goMsg }>
                        <i className="iconfont icon-xiaoxi iconmsg"></i>
                        { userInfo.isLogin ? <span className="msg-dot"></span> : '' }
                    </div>
                </div>
            </>
        );
               
    }

    // 跳转到消息列表页面
    goMsg = ()=> {
        const { history } = this.props
        history.push('/informs') 
    }

    // 跳转到设置页面
    goSet = ()=> {
        const { history } = this.props
        history.push('/set') 
    }

    // 跳转到登录页面
    goLogin = ()=> {
        const { history } = this.props
        history.push('/login') 
    }

    // 用户信息
    handleUserInfo = ()=> {
        let { isLogin,mobile } = this.state.userInfo
        return (
            <div className="userInfo u-f u-f-sbc">
                <div className="u-f u-f-ajc">
                    <img
                        alt="logo"
                        src={ isLogin ? s_face : s_logo }
                        width="48"
                        style={{ marginRight:'7px',borderRadius:'50%' }}
                    /> 
                    <div className="tel-vip u-f-c u-f-ajc">
                        <span>{ isLogin ? mobile : '点击登录' }</span>
                        <div className="vip">
                            <img src={ s_vip } width="25" alt="face"/>
                            <span>我的会员</span>
                        </div>
                    </div>
                </div>
                <img src={ s_vip2 } width="80" alt="vip"/>
            </div>
        )
    }

    render() {
        return (
            <div>
                { this.isShowComponent() }
                { this.handleUserInfo() }
            </div>
        )
    }
}

export default withRouter(Header) 
