import React, { Component } from 'react'

import emitter from '../../events/event'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是默认值'
        }
    }
    // 接受B组件传递的数据
    handleMsg = (msg) => {
        this.setState({ msg });
    }
    render() {
        return (
            <>
                <A />
                <B msg={this.state.msg} handleMsg={ this.handleMsg }/>
            </>
        )
    }
}

class A extends Component {
    clickHandler(data) {
        // console.log('A组件：',data)
        emitter.emit('theclick', data);
    }
    render() {
        const data = 'aaaaa';
        return (
            <div style={{ backgroundColor: 'orange', color: '#fff', padding: 15, margin: 15,fontSize:20 }}>
                <p style={{ margin: 15 }}>兄弟A组件</p>
                <button onClick={this.clickHandler.bind(this, data)} style={{ padding:10 }}>点击传值</button>
            </div>
        )
    }
}

class B extends Component {
    componentDidMount() {
        this.msgEvent = emitter.addListener('theclick', (data) => {
            // console.log('B组件:', data)
            this.props.handleMsg('我是B组件传的数据')
        })
    }
    componentWillUnmount() {
        emitter.off(this.msgEvent,()=>{});
    }
    render() {
        return (
            <div style={{ backgroundColor: 'yellowgreen', color: '#fff', padding: 15, margin: 15,fontSize:20 }}>
                <p style={{ margin: 15 }}>兄弟B组件</p>
                <p style={{ padding: 10 }}>数据---{this.props.msg}</p>
            </div>
        );
    }
}
