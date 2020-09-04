import React, { Component } from 'react'
import './index.scss'

export default class MyVideo extends Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef()
    }

    state = {
        showVideo:false,
    }
    
    playVideo = ()=> {
        let v = this.videoRef.current;
        if (v.paused) {
            v.play();
        } else if (v.play()) {
            v.pause();
        }
        this.setState({
            showVideo: true
        })
    }

    render() {
        let { showVideo } = this.state
        return (
            <div className="video-list">
                <div className="videos">
                    <video
                        src="https://zhuanti.danke.com.cn/danke-vedio/danke-vedio1.mp4"
                        className="my-video"
                        controls="controls"
                        preload="auto"
                        poster="true"
                        type="video/mp4"
                        ref={ this.videoRef }
                    ></video>
                    <div className="video-cover" style={{ display: showVideo ? 'none' : 'block' }} onClick={ this.playVideo }>
                        <img src="https://public.danke.com.cn/public-20180606-Ft3xtMJwt6XsRpzXhQC5dWd4zZxq" alt="" />
                    </div>
                    <ul className="v-list u-f">
                        <li className="u-f-c">
                            <img src={require("@/assets/imgs/delegate/v1.png")} className="i1" alt="" />
                            <p className="p1">蛋壳公寓第一集</p>
                        </li>
                        <li className="u-f-c">
                            <img src={require("@/assets/imgs/delegate/v2.png")} className="i1" alt="" />
                            <p className="p1">蛋壳公寓第二集</p>
                        </li>
                        <li className="u-f-c">
                            <img src={require("@/assets/imgs/delegate/v3.png")} alt="" />
                            <p>蛋壳公寓第三集</p>
                        </li>
                    </ul>
                </div>
            </div >
        )
    }
}
