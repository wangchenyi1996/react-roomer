import React, { Component } from 'react'

import './notFound.scss'
import img404 from '@/assets/imgs/404.png'

export default class NotFound extends Component {
    state = {
        times:3
    }

    componentDidMount(){
        if(this.intervalId){
            clearInterval(this.intervalId)
        }
        if (this.state.times>0) {
            // 启动倒计时
            this.intervalId = setInterval(() => {
                // this.setState( (state,props) =>(
                //     {
                //         times:state.times-1
                //     }
                //     // console.log(state)
                // ),()=>{
                //     if (this.state.times <= 0) {
                //         // 停止计时
                //         clearInterval(this.intervalId)
                //         this.backHome()
                //     }
                // })
                // 这种方式也可以
                this.setState({
                    times:this.state.times-1
                },()=>{
                    if (this.state.times <= 0) {
                        // 停止计时
                        clearInterval(this.intervalId)
                        this.backHome()
                    }
                })
            }, 1000)
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    // 返回上一页
    backPrev = ()=> {
        const { history } = this.props
        history.goBack()
    }

    // 返回首页
    backHome = ()=>{
        const { history } = this.props
        history.push('/home') 
    }
   
    render() {
        return (
            <div className="not-found">
                <img src={ img404 } alt="404 notfound page" />
                <div className="not-cont">
                    <span className="not-text" onClick={ this.backPrev }>返回上一页</span>
                    <span className="not-text" onClick={ this.backHome }>返回首页</span>
                </div>
                <p>请稍等，{ this.state.times }s后返回首页面</p>
            </div>
        )
    }
}
