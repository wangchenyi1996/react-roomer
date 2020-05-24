import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props)
        console.log('4',this.props)
    }
    render() {
        return (
            <div>
                user组件
            </div>
        )
    }
}
