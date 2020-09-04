import React, { Component } from 'react'
import { Toast, Button } from 'antd-mobile';
import SvgIcon from "@/icons/SvgIcon";

import './login.scss'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.telRef = React.createRef()
    this.codeRef = React.createRef()
  }

  state = {
    codeTime: 0,
    codeMsg: "获取验证码",
    telphone: "",
    code: "",
    rightPhone: false,
    flag: false,
    dis: false,
    // 多个输入框简单处理
    username: '',
    password: ''
  }

  goHome = () => {
    const { history } = this.props
    history.replace('/home')
  }

  telFunc = (e) => {
    // console.log(e.target.value)
    let tempV = this.telRef.current.value
    // let tempV = e.target.value
    this.setState({
      rightPhone: false,
      telphone: tempV
    })
    if (tempV !== '') {
      if (/^1(3|4|5|7|8|9)\d{9}$/.test(tempV)) {
        this.setState({
          rightPhone: true,
          telphone: tempV
        })
      }
    }
  }

  codeFunc = () => {
    let tempV = this.codeRef.current.value
    this.setState({
      code: tempV
    })
  }

  // 登录
  handleLogin = () => {
    // 获取输入框的值
    let tempV1 = this.telRef.current.value
    let tempV2 = this.codeRef.current.value
    console.log(tempV1, tempV2)
    if (!tempV1) {
      Toast.info('手机号码不能为空', 30);
      setTimeout(() => {
        Toast.hide();
      }, 1000);
      return;
    }
    if (!tempV2) {
      Toast.info('验证码不能为空', 30);
      setTimeout(() => {
        Toast.hide();
      }, 1000);
      return;
    }
    // 显示加载中、禁止多次点击
    this.setState({
      flag: true,
      dis: true
    })
    Toast.loading('登录成功', 30, () => {
      this.setState({
        flag: false,
        dis: false
      })
    });
    setTimeout(() => {
      this.goHome()
      Toast.hide();
    }, 1000);
  }
  // 处理多个输入框简单处理
  onInputChange = (e)=>{
    let InputName = e.target.name;
    let InputValue = e.target.value;
    console.log(InputName,InputValue)
    this.setState({
        [ InputName ]: InputValue ,
    })
  }

  render() {
    let { rightPhone, codeTime, codeMsg, flag, dis, username, password } = this.state
    return (
      <div className="login">
        {/* 头部内容 */}
        <div className="login-top" onClick={this.goHome}>
          <img src={require("@/assets/imgs/login/login-top.png")} width="100%" alt="" />
          <div className="u-f u-f-ajc">
            <img
              src="https://public.danke.com.cn/public-20180202-FtmNbHV0EwA33J9vBf4y7Y2N9jpo"
              width="15"
              height="15"
              alt=""
            />
          </div>
          <div>首页</div>
        </div>
        {/* 主体部分 */}
        <div className="main">
          {/* 处理多个输入框简单处理 */}
         <>
            <input type="text" name="username" value={username} onChange = { this.onInputChange } placeholder="请输入用户名"/>
            <input type="text" name="password" value={password} onChange = { this.onInputChange } placeholder="请输入密码"/>
         </>

          <div className="ip1">
            <input type="text" className="inputs" placeholder="请输入手机号" ref={this.telRef} onChange={this.telFunc} />
          </div>
          <div className="u-f u-f-sbc ip2">
            <input type="text" className="inputs" placeholder="请输入手机验证码" ref={this.codeRef} onChange={this.codeFunc} />
            <span className={rightPhone ? 'login-sp1' : 'login-sp2'}>{codeTime ? `已发送(${codeTime}s)` : codeMsg}</span>
          </div>

          <Button loading={flag} disabled={dis} className="login-btn" onClick={this.handleLogin}>登录</Button>

          <div className="u-f u-f-ajc weixin-login">第三方登录</div>
          <div className="u-f">
            <div className="login-type u-f u-f-ajc">
              <SvgIcon iconClass="weixin" />
            </div>
            <div className="login-type u-f u-f-ajc">
              <SvgIcon iconClass="qq" />
            </div>
            <div className="login-type u-f u-f-ajc">
              <SvgIcon iconClass="xinlang" />
            </div>
          </div>

          <div className="login-desc">
            <span>登录即代表你同意</span>
            <span>《用户使用条款》</span>
            <span>《隐私保护政策》</span>
          </div>
        </div>

      </div >
    )
  }
}
