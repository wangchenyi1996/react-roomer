import React, { Component } from 'react'

import './index.scss'

export default class Intro extends Component {
  render() {
    let { intro } = this.props
    return (
      <ul className="intro-list u-f u-f-sbc animated zoomIn">
        {
          intro.map((item)=>{
            return (
              <li className="h-intro-item u-f u-f-asc" key={item.id}>
                <img src={item.img} width="16" height="16" alt="服务介绍"/>
                <span>{item.text}</span>
              </li>
            )
          })
        }
      </ul>
    )

  }
}
