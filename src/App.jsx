import React, { Component, Suspense, lazy } from 'react'

import { HashRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './app.scss'

// 测试 react hooks函数
import Hooks1 from '@/views/reactHooks/UseState'
import Hooks2 from '@/views/reactHooks/Hooks2'

// 路由页面
// import Home from '@/views/tabbar/home/Home'
const Home = lazy(() => import('@/views/tabbar/home/Home'))
// import Delegate from '@/views/tabbar/delegate/Delegate'
const Delegate = lazy(() => import('@/views/tabbar/delegate/Delegate'))
// import FindHome from '@/views/tabbar/findHome/FindHome'
const FindHome = lazy(() => import('@/views/tabbar/findHome/FindHome'))
// import Welcome from '@/views/welcome/Welcome'
const Welcome = lazy(() => import('@/views/welcome/Welcome'))

// 404 页面
// import NotFound from '@/views/notFound/NotFound'
const NotFound = lazy(() => import('@/views/notFound/NotFound'))

// 我的相关
// import User from '@/views/tabbar/user/Profile'
const User = lazy(() => import('@/views/tabbar/user/Profile'))
// import Login from '@/views/login/Login'
const Login = lazy(() => import('@/views/login/Login'))
// import InformList from '@/views/informList/InformList'
const InformList = lazy(() => import('@/views/informList/InformList'))
// import Sets from '@/views/set/Set'
const Sets = lazy(() => import('@/views/set/Set'))

// 我的服务功能区
// import Attention from '@/views/services/attention/Attention'
const Attention = lazy(() => import('@/views/services/attention/Attention'))
// import Wallet from '@/views/services/wallet/Wallet'
const Wallet = lazy(() => import('@/views/services/wallet/Wallet'))
// import Coupon from '@/views/services/coupon/Coupon'
const Coupon = lazy(() => import('@/views/services/coupon/Coupon'))
// import Reservation from '@/views/services/record/Reservation'
const Reservation = lazy(() => import('@/views/services/record/Reservation'))

// 房屋详情
// import RoomDetail from '@/views/roomDetail/RoomDetail'
const RoomDetail = lazy(() => import('@/views/roomDetail/RoomDetail'))

// 测试 redux使用
// import Redux from '@/views/testRedux/Redux'
const Redux = lazy(() => import('@/views/testRedux/Redux'))
// import ReactRedux from '@/views/testRedux/ReactRedux'
const ReactRedux = lazy(() => import('@/views/testRedux/ReactRedux'))


class App extends Component {

  // 路由
  renderNavs() {
    let { navs } = this.props;
    return (
      <Switch>
        {
          navs.map(item => {
            if (item.type === 1) {
              return <Route key={item.id} path={item.path} component={item.component} exact={item.exact} />
            } else {
              return <Redirect key={item.id} from={item.fromurl} to={item.tourl} exact></Redirect>
            }
          })
        }
      </Switch>
    )
  }
  // 全局设置加载
  handleLoding = () => {
    return (
      <p className="p-loading">正在加载中</p>
    )
  }

  render() {
    return (
      <Router>
        <Suspense fallback={this.handleLoding()}>
          {this.renderNavs()}
        </Suspense>
      </Router>
    )
  }
}

App.defaultProps = {
  navs: [
    { id: 1, type: 1, path: "/home", component: Home, exact: true },
    { id: 2, type: 1, path: "/findHome", component: FindHome, exact: false },
    { id: 3, type: 1, path: "/delegate", component: Delegate, exact: false },
    { id: 4, type: 1, path: "/user", component: User, exact: false },

    { id: 5, type: 1, path: "/redux", component: Redux, exact: false },
    { id: 6, type: 1, path: "/react", component: ReactRedux, exact: false },
    { id: 7, type: 2, fromurl: '/', tourl: '/home' },
    { id: 9, type: 1, path: "/welcome", component: Welcome, exact: false },
    { id: 10, type: 1, path: "/login", component: Login, exact: false },
    { id: 11, type: 1, path: "/informs", component: InformList, exact: false },
    { id: 12, type: 1, path: "/set", component: Sets, exact: false },

    { id: 13, type: 1, path: "/attention/:id", component: Attention, exact: false },
    { id: 14, type: 1, path: "/wallet", component: Wallet, exact: false },
    { id: 15, type: 1, path: "/coupon", component: Coupon, exact: false },
    { id: 16, type: 1, path: "/record", component: Reservation, exact: false },
    { id: 17, type: 1, path: "/roomdetail/:id", component: RoomDetail, exact: false },
    // 测试 hooks
    { id: 19, type: 1, path: "/hooks1", component: Hooks1, exact: false },
    { id: 20, type: 1, path: "/hooks2", component: Hooks2, exact: false },

    { id: 8, type: 1, path: "/*", component: NotFound, exact: false },
  ]
}

export default withRouter(App)