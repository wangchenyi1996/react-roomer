import React, { Component } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mess: ''
        }
    }
    //向子组件Acls.js提供的传值方法，参数为获取的子组件传过来的值
    getDatas = (data) => {
        this.setState({
            mess: data
        });
    }
    render() {
        return (
            <React.Fragment>
                <p style={{color:'red',padding:20,margin:10,fontSize:20}}>父组件中显示按钮并传值：</p>
                <Acls data={this.getDatas}></Acls>
                <Bcls mess={this.state.mess} ></Bcls>
            </React.Fragment>
        );
    }
}

class Acls extends Component {
    //按钮点击事件，向父组件Pcls.js传值
    handleClick = ()=> {
        this.props.data("我是兄弟A组件穿的值--AAAAA");
    }
    render() {
        return (
            <div style={{ backgroundColor: 'orange', color: '#fff',padding:15,margin:15 }}>
                <p style={{ margin:15 }}>兄弟A组件</p>
                {/* <div>展示数据：{this.props.mess}</div> */}
                <button onClick={this.handleClick} style={{ padding:10 }}>A获取数据</button>
            </div>
        );
    }
}

class Bcls extends Component {
    //按钮点击事件，向父组件Pcls.js传值
    handleClick = ()=> {
        this.props.data("我是兄弟B组件穿的值--BBBBB");
    }
    render() {
        return (
            <div style={{ backgroundColor: 'yellowgreen', color: '#fff',padding:15,margin:15 }}>
                <p style={{ padding:10 }}>兄弟B组件</p>
                <div>展示数据：{this.props.mess}</div>
                {/* <button onClick={this.handleClick} style={{ padding:10 }}>B获取数据</button> */}
            </div>
        );
    }
}
