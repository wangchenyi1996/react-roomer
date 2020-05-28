import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import './footer.scss'

class AppFooter extends Component {
    renderFooter() {
        let { navs } = this.props
        let { pathname } = this.props.location;
        return (
            navs.map(item => {
                return (
                    <NavLink key={item.id} to={item.path} exact={item.exact}>
                        <li className={ item.path===pathname ? 'tab-item u-f-c active' : 'tab-item u-f-c' }>
                            <i className={"iconfont icon icon-" + item.icon}></i>
                            <span className="tab-desc">{item.title}</span>
                        </li>
                    </NavLink>
                )
            })
        )
    }
    render() {
        // let { navs } = this.props
        // let { pathname } = this.props.location;
        // let temp = navs.findIndex((nav) => nav.path === pathname)
        // if( temp === -1 ){
        //     return ''
        // }else{
            return (
                <div className="tabbar">
                    <ul className="tab-list u-f u-f-asc">
                        {this.renderFooter()}
                    </ul>
                </div >
            )
        // }
    }
}

AppFooter.defaultProps = {
    navs:[
      { id: 1, path: "/home",exact: true,icon: "icon-home", title: "首页" },
      { id: 2, path: "/findHome", icon: "ziyuan", exact: false, title: "找房" },
      { id: 3, path: "/delegate", icon: "tuoguan", exact: false, title: "委托"},
      { id: 4, path: "/user", icon: "ren", exact: false, title: "我的"  },
    ]
}
  

export default withRouter(AppFooter) 