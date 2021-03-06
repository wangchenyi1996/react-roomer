import React, { Component } from 'react'

import { HashRouter as Router, Switch, Route, withRouter ,Redirect} from 'react-router-dom';

// 路由页面
import Home from '@/views/tabbar/home/Home'
import Delegate from '@/views/tabbar/delegate/Delegate'
import FindHome from '@/views/tabbar/findHome/FindHome'
import Welcome from '@/views/welcome/Welcome'

// 404 页面
import NotFound from '@/views/notFound/NotFound'

// 我的相关
import User from '@/views/tabbar/user/Profile'
import Login from '@/views/login/Login'
import InformList from '@/views/informList/InformList'
import Sets from '@/views/set/Set'
// 我的服务功能区
import Attention from '@/views/services/attention/Attention'
import Wallet from '@/views/services/wallet/Wallet'
import Coupon from '@/views/services/coupon/Coupon'
import Reservation from '@/views/services/record/Reservation'

// 测试 redux使用
import Redux from '@/views/testRedux/Redux'
import ReactRedux from '@/views/testRedux/ReactRedux'

// 底部 tabbar
import AppFooter from '@/components/footer/'

class App extends Component {
  
  // 路由
  renderNavs(){
    let {navs} = this.props;
    return (
      <Switch>
        {
          navs.map(item=>{
            if(item.type ===1){
              return <Route key={item.id} path={item.path} component={item.component} exact={item.exact} />
            }else{
              return <Redirect key={item.id} from={item.fromurl} to={item.tourl} exact></Redirect>
            }
          })
        }
        {/* <Route path="/redux" component={Redux} /> */}
        {/* render 的值是一个函数，这个函数返回一个 React 元素。这种方式方便地为待渲染的组件传递额外的属性 */}
        {/* <Route path='/redux' render={(props) => <Redux {...props } title={'测试数据'}/>}></Route> */}
        {/* <Route path="/react" component={ReactRedux} /> */}

        {/* <Redirect from="/" to="/home"></Redirect> */}
      </Switch>
    )
  }

  // 底部 tabbar
  renderFooter(){
    return <AppFooter />
  }

  render() {
    return (
      <Router>
        {this.renderNavs()}
        {this.renderFooter()}
      </Router>
    )
  }
}

App.defaultProps = {
  navs:[
    { id: 1,type:1, path: "/home", component: Home, exact: true },
    { id: 2,type:1, path: "/findHome", component: FindHome, exact: false },
    { id: 3,type:1, path: "/delegate", component: Delegate, exact: false},
    { id: 4,type:1, path: "/user", component: User, exact: false },
    { id: 5,type:1, path: "/redux", component: Redux, exact: false },
    { id: 6,type:1, path: "/react", component: ReactRedux, exact: false },
    { id: 7,type:2, fromurl:'/',tourl:'/home' },
    { id: 9,type:1, path: "/welcome", component: Welcome, exact:false },
    { id: 10,type:1, path: "/login", component: Login, exact:false },
    { id: 11,type:1, path: "/informs", component: InformList, exact:false },
    { id: 12,type:1, path: "/set", component: Sets, exact:false },

    { id: 13,type:1, path: "/attention/:id", component: Attention, exact:false },
    { id: 14,type:1, path: "/wallet", component: Wallet, exact:false },
    { id: 15,type:1, path: "/coupon", component: Coupon, exact:false },
    { id: 16,type:1, path: "/record", component: Reservation, exact:false },

    { id: 8,type:1, path: "/*", component: NotFound, exact:false },
  ]
}

export default withRouter(App)