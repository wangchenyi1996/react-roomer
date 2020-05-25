import React, { Component } from 'react'

export default class Attention extends Component {

    render() {
        return (
            <div>
                关注: { this.props.match.params.id }
            </div>
        )
    }
}
