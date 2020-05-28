import React, { Component } from 'react'

import { Carousel } from 'antd-mobile'

import './index.scss'

export default class SwiperHeader extends Component {

  state = {
    currentIndex: 0,
    imgHeight: 190,
  }

  // 滑动事件
  swiperChange = (index) => {
    this.setState({
      currentIndex: index
    })
  }

  render() {
    let { swiperList } = this.props

    return (
      <div className="home_swiper">
        <Carousel
          className="space-carousel"
          frameOverflow="visible"
          infinite
          cellSpacing={10}
          slideWidth={0.9}
          selectedIndex={this.state.currentIndex}
          dotActiveStyle={{ backgroundColor: '#654f3a' }}
          afterChange={(index) => this.swiperChange(index)}
        >
          {
            swiperList.map((item,index)=>{
              return (
                <div key={index}
                style={{
                  display: 'block',
                  position: 'relative',
                  top: this.state.currentIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                }}
                >
                  <img src={item.url} style={{ width:"100%",height:"200px",borderRadius:'10px' }} alt="轮播"
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </div>
              )
            })
          }
        </Carousel>
      </div>
    )
  }
}
