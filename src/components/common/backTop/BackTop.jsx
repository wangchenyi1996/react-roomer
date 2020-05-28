import React, { Component } from 'react'

import './index.scss'

export default class BackTop extends Component {
    state = {
        top: 0,
        showBack:false
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }

    //回到顶部
    backTop = ()=> {
        let { top } = this.state
        let timer = setInterval(() => {
          let ispeed = Math.floor(-top / 15);
          document.documentElement.scrollTop = document.body.scrollTop = top + ispeed;
          if (top === 0) {
            clearInterval(timer);
          }
        }, 16);
    }

    handleScroll = (e)=> {
        // console.log(e.target.documentElement.scrollTop);
        let tops = e.target.documentElement.scrollTop;
        // 控制滚动按钮的隐藏或显示
        if ( tops > 350) {
            this.setState({
                showBack:true
            })
        } else {
            this.setState({
                showBack:false
            })
        }
    }

    
    render() {
        let { showBack } = this.state
        if(showBack){
            return (
                <img
                    src={require("@/assets/imgs/home/top.png")}
                    alt="返回顶部"
                    className="top"
                    onClick={ this.backTop }
                />
            )
        }else{
            return ''
        }
    }
}
