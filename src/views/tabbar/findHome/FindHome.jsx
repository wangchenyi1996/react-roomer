import React, { Component } from 'react'
import { Button } from 'antd-mobile'

export default class FindHome extends Component {
  constructor(props) {
    super(props)
    console.log('2', this.props)
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

  render() {
    return (
      <div>
        <div className="btn-group">
          <Button type="primary" className="btn1" onClick={this.goRedux} >测试Redux</Button>

          <Button type="warning" className="btn2" onClick={this.goReactRedux}>测试react-Redux</Button>
        </div>
      </div>
    )
  }
}
