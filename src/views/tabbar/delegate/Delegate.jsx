import React, { Component } from 'react'

export default class Delegate extends Component {
    constructor(props){
        super(props)
        console.log('3',this.props)
    }
    render() {
        return (
            <div>
                Delegate组件
            </div>
        )
    }
}
