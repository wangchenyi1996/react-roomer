import React, { Component } from 'react'

import './index.scss'

export default class RoomOption extends Component {

  render() {
    let { roomOption } = this.props
    return (
      <ul className="room-opt u-f u-f-asc">
        {
          roomOption.map((item)=>{
            return (
              <li className="room u-f-c u-f-ajc" key={item.id}>
                <img src={item.img}  width="40" height="40" style={{marginBottom:'5px'}} alt="房屋类型"/>
                <span>{item.text}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
