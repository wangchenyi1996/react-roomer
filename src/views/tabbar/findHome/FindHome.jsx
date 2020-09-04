import React, { Component } from 'react'
import { Button } from 'antd-mobile'

import './findHome.scss'

import {connect} from 'react-redux'  //引入连接器
// import * as actions  from '@/store/actions/roomerAction'
import { addCounter,minCounter }  from '@/store/actions/roomerAction'
import * as userActions  from '@/store/actions/userAction'
import { bindActionCreators } from 'redux';


// 底部tabbar
import AppFooter from '@/components/footer/'

// 引入 工具函数
import { throttle } from '@/config/utils.js'

class FindHome extends Component {

  // 立即执行
  // fangdou = debounce2(() => {
  //   this.test1()
  // },2000,true);

  // 非立即执行
  // fangdou = debounce(() => {
  //   this.test1()
  // },2000);
  
  // 节流
  fangdou = throttle(() => {
    this.test1()
  },3000);

  test1 = ()=>{
    console.log('防抖')
  }

  jieliu = ()=>{
    console.log('节流')
  }

  goRedux = () => {
    let { history } = this.props
    // console.log(history)
    history.push('/redux')
  }

  goReactRedux = () => {
    let { history } = this.props
    // console.log(history)
    history.push('/react')
  }

  hooks = ()=>{
    let { history } = this.props
    history.push('/hooks')
  }

  // 底部 tabbar
  renderFooter(){
    return <AppFooter />
  }

  addCounter = ()=>{
    // this.props.actions.addCounter(15)
    this.props.addCounter(1)
  }
  minCounter = ()=>{
    // this.props.actions.minCounter(10)
    this.props.minCounter(1)
  }

  getUserInfo = ()=>{
      this.props.userActions.getUserInfo({
        id:3,name:'五五',age:28
      },)
  }

  getUsersList = ()=>{
    //异步方式
    this.props.userActions.getUserList()
  }

  componentDidMount(){
    this.getUsersList()
  }

  render() {
    let { userInfo,userlist } = this.props
    console.log('用户列表',userlist)
    return (
      <div className="find-home">
        <div className="btn-group">
          <Button type="primary" className="btn1" onClick={this.hooks} >测试Hooks</Button>
          
          <Button type="primary" className="btn1" onClick={this.goRedux} >测试Redux</Button>

          <Button type="warning" className="btn2" onClick={this.goReactRedux}>测试react-Redux</Button>


          <Button type="warning" className="btn2" onClick={this.fangdou}>防抖</Button>
          <Button type="warning" className="btn2" onClick={this.jieliu}>节流</Button>

          <p style={{ height:'40px',fontSize:'30px' }}>{ this.props.count }</p>

          <Button onClick={ this.addCounter }>增加10</Button>
          <Button onClick={ this.minCounter }>减少10</Button>

          <br />
          <br />
          <br />
          <hr/>
          <Button onClick={this.getUserInfo}>获取用户信息</Button>
          
          {
            userInfo.id
            ? 
            <p style={{ height:'40px',fontSize:'20px',marginTop:'30px' }}>
              <span className="test">学号：{userInfo.id}</span>
              <span>姓名：{userInfo.name}</span>
              <span>年龄：{userInfo.age}</span>
            </p> 
            : ''
          }
          <br />
          <br />
          <br />
          <hr/>
          <Button onClick={this.getUsersList}>获取用户列表</Button>

          {
            userlist.length>0
            ? 
            userlist.map((item)=>(
              <p style={{ height:'40px',fontSize:'20px',marginTop:'30px' }} key={item.id}>
                <span>学号：{item.id}</span>
                <span>姓名：{item.name}</span>
                <span>年龄：{item.age}</span>
              </p> 
            ))
            : ""
          }

        </div>

        {/* 底部导航栏 */}
        { this.renderFooter() }
      </div>
    )
  }
}

const mapStateToProps = state =>{
  // console.log(state)
  return {
    count:state.roomer.count,
    userInfo:state.user.userInfo,
    userlist:state.user.userlist,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    // actions: bindActionCreators(actions, dispatch), //最简单
    // actions: bindActionCreators({
    //   addCounter: actions.addCounter,
    //   minCounter: actions.minCounter,
    // }, dispatch),
    userActions:bindActionCreators({
      getUserInfo: userActions.getUserInfoAction,
      getUserList: userActions.getUserList,
      getListAction: userActions.getListAction,
    },dispatch),
    
    addCounter:(data)=>dispatch(addCounter(data)),
    minCounter:(data)=>dispatch(minCounter(data)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FindHome)