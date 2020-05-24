import React, { Component } from 'react'

import { HashRouter as Router, Switch, Route, withRouter ,Redirect} from 'react-router-dom';

import Home from '@/views/tabbar/home/Home'
import Delegate from '@/views/tabbar/delegate/Delegate'
import FindHome from '@/views/tabbar/findHome/FindHome'
import User from '@/views/tabbar/user/Profile'
import Redux from '@/views/testRedux/Redux'
import ReactRedux from '@/views/testRedux/ReactRedux'

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
              return <Redirect key={item.id} from={item.fromurl} to={item.tourl}></Redirect>
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
  ]
}

export default withRouter(App)