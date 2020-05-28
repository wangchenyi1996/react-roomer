import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'

import './index.scss'

export default class RentalQuality extends Component {

    // 滑动事件
    swiperChange = (index)=> {
        if(index>2){
            return;
        }
        this.props.handleRent(index)
    }

    render() {
        let { rentalQuality,current2 } = this.props
        // console.log(this.props)
        return (
            <div className="swiper-container">
                <div className="lives">
                    <div className="lives-title">租住品质</div>
                    <div className="custom-indicator" slot="indicator">
                        <span>{ current2 + 1 }</span>
                        <span>/ { rentalQuality.length }</span>
                    </div>
                </div>
                
                <Carousel 
                    dots={false}
                    selectedIndex={ current2 }
                    afterChange={ (index)=> this.swiperChange(index) }
                >
                   {
                        rentalQuality.map((item)=>{
                            return <img src={item.img} width="100%" alt="" key={item.id}/>
                        })
                   }
                </Carousel>
            </div>
        )
    }
}
