import React, { Component } from 'react'
import { Toast } from 'antd-mobile';

import './index.scss'

export default class HeaderNav extends Component {
  state = {
    flag:true,
    isClear: false,
    search:''
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // 处理滚动
  handleScroll = () => {
    const top = document.documentElement.scrollTop;
    if (top > 90) {
      this.setState({
        flag: false
      })
    } else {
      this.setState({
        flag: true
      })
    }
  }

  // 搜索
  goSearch = (e)=>{
    if(e.target.value!==''){
      this.setState({
        search:e.target.value,
        isClear:true
      })
    }else{
      this.setState({
        search:'',
        isClear:false
      })
    }
    if(e.keyCode===13){
      Toast.loading('搜索关键词：'+e.target.value, 30, () => {
        console.log('关闭后进行处理')
        this.search = ''
      });
      setTimeout(() => {
          Toast.hide();
      }, 1500);
    }else{
      this.setState({
        search:e.target.value
      })
    }

  }

  // 清除搜索关键词
  clearSearch = ()=>{
    this.setState({
      search:'',
      isClear:false
    })
  }


  render() {
    let { flag,isClear,search } = this.state
    return (
      <div className="h_headers u-f-sbc">
        {/* <div className={`container tab ${index===this.state.currentIndex?"active":null}`}>此标签是否选中</div> */}
        <div className={`city ${flag ? '' : 'h_abs'}`}>
          <span>上海</span>
          <i className="iconfont icon-sort-desc icon"></i>
        </div>
        <div className="search">
          <input
            value={search}
            type="text"
            placeholder="首月5折 白住2个月"
            onKeyUp={ this.goSearch }
            onChange={ this.goSearch }
          />
          <i className="iconfont icon-soushuo iconSearch"></i>
          {
            isClear ? <img src={require("@/assets/imgs/clear.png")} className="clear" alt="清除" onClick={ this.clearSearch }/> : ''
          }
        </div>
        <div className={`msg ${flag ? '' : 'h_abs'}`}>
          <i className="iconfont icon-xiaoxi iconmsg"></i>
          <span className="msg-dot"></span>
        </div>
      </div>
    )
  }
}

