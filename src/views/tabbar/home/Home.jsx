import React, { Component, lazy, Suspense } from 'react'
import { connect } from 'react-redux'  //引入连接器
import { bindActionCreators } from 'redux';
import * as actions from '@/store/actions/roomerAction'
import './home.scss'
//引入工具函数
import { getStore } from "@/config/utils.js";

// import SwiperHeader from '@/components/home/swiperHeader/SwiperHeader'
const SwiperHeader = lazy(() => import('@/components/home/swiperHeader/SwiperHeader'))
// import HeaderNav from '@/components/home/headerNav/HeaderNav'
const HeaderNav = lazy(() => import('@/components/home/headerNav/HeaderNav'))
// import Intro from '@/components/home/intro/Intro'
const Intro = lazy(() => import('@/components/home/intro/Intro'))
// import RoomOption from '@/components/home/roomOption/RoomOption'
const RoomOption = lazy(() => import('@/components/home/roomOption/RoomOption'))
// import IntroRooms from '@/components/home/introRooms/IntroRooms'
const IntroRooms = lazy(() => import('@/components/home/introRooms/IntroRooms'))
// import DiscountRoom from '@/components/home/discountRoom/DiscountRoom'
const DiscountRoom = lazy(() => import('@/components/home/discountRoom/DiscountRoom'))
// import RentalQuality from '@/components/home/rentalQuality/RentalQuality'
const RentalQuality = lazy(() => import('@/components/home/rentalQuality/RentalQuality'))
// import Services from '@/components/home/services/Services'
const Services = lazy(() => import('@/components/home/services/Services'))
// import ServiceMajor from '@/components/home/serviceMajor/ServiceMajor'
const ServiceMajor = lazy(() => import('@/components/home/serviceMajor/ServiceMajor'))
// import ZRStation from '@/components/home/station/ZRStation'
const ZRStation = lazy(() => import('@/components/home/station/ZRStation'))
// import GoodProduct from '@/components/home/goodProduct/GoodProduct'
const GoodProduct = lazy(() => import('@/components/home/goodProduct/GoodProduct'))

// 首次进入弹出广告弹框
// import FirstAdvance from '@/components/home/firstAdvance/FirstAdvance'
const FirstAdvance = lazy(() => import('@/components/home/firstAdvance/FirstAdvance'))

// 全局通用组件
// import BackTop from '@/components/common/backTop/BackTop'
const BackTop = lazy(() => import('@/components/common/backTop/BackTop'))
// import Lines from '@/components/common/lines/Lines'
const Lines = lazy(() => import('@/components/common/lines/Lines'))

// 底部tabbar
// import AppFooter from '@/components/footer/'
const AppFooter = lazy(() => import('@/components/footer/'))

class Home extends Component {
  constructor(props) {
    super(props)
    let { history } = this.props
    if (getStore("launchFlag") !== 'true') {
      history.push('/welcome')
    }
  }

  state = {
    // swiperList: [
    //   {
    //   "id": 1,
    //   "url": "https://public.danke.com.cn/public-20191015-FojGewWlpLqD4RMxt_7VrXhPzqsN"
    //   },
    //   {
    //   "id": 2,
    //   "url": "https://public.danke.com.cn/public-20190908-Fjit4zQaBAN1GTExqrl3r1OwYN-8"
    //   },
    //   {
    //   "id": 3,
    //   "url": "https://public.danke.com.cn/public-20190606-Fn47vVrRsxTLdwr3CaUoSZJ6jzzl"
    //   },
    //   {
    //   "id": 4,
    //   "url": "https://public.danke.com.cn/public-20191009-FiZYvj4GTuQ3lP7kYIbT6NJ0kwWF"
    //   }
    // ],
    intro: [
      {
        id: 1,
        img: require("@/assets/imgs/home/ic1.png"),
        text: "100%房源房价"
      },
      {
        id: 2,
        img: require("@/assets/imgs/home/ic2.png"),
        text: "月度双次保洁/极速维修"
      },
      {
        id: 3,
        img: require("@/assets/imgs/home/ic3.png"),
        text: "品质房屋/放心呼吸"
      }
    ],
    roomOption: [
      {
        id: 1,
        img: require("@/assets/imgs/home/hz.png"),
        text: "合租"
      },
      {
        id: 2,
        img: require("@/assets/imgs/home/zz.png"),
        text: "整租"
      },
      {
        id: 3,
        img: require("@/assets/imgs/home/yz.png"),
        text: "月租"
      },
      {
        id: 4,
        img: require("@/assets/imgs/home/dtzf.png"),
        text: "找房"
      }
    ],
    roomIntro: [
      {
        id: 1,
        img: "http://lc-3resYveE.cn-n1.lcfile.com/8bb9851e16091c9d597d/1.png"
      },
      {
        id: 2,
        img: "http://lc-3resYveE.cn-n1.lcfile.com/2be0f0883cf462ef3ac4/2.png"
      },
      {
        id: 3,
        img: "http://lc-3resYveE.cn-n1.lcfile.com/019b4fa763339acd01eb/3.png"
      }
    ],
    discountRoom: [
      {
        id: 1,
        img: require("@/assets/imgs/home/room/1.jpg"),
        roomWhere: "下马坊 万达江南明珠 主卧 朝南",
        price: 880,
        oldPrice: 1560,
        label: [
          {
            id: 1,
            msg: "立减返现"
          },
          {
            id: 2,
            msg: "靠近地铁"
          }
        ]
      },
      {
        id: 2,
        img: require("@/assets/imgs/home/room/2.jpg"),
        roomWhere: "柳洲东路 明发滨江新城二期 主卧",
        price: 1080,
        oldPrice: 1690,
        label: [
          {
            id: 1,
            msg: "品质公寓"
          },
          {
            id: 2,
            msg: "靠近地铁"
          }
        ]
      },
      {
        id: 3,
        img: require("@/assets/imgs/home/room/3.jpg"),
        roomWhere: "新模范马路 西瓜圃桥 独立阳台",
        price: 680,
        oldPrice: 1250,
        label: [
          {
            id: 1,
            msg: "立减返现"
          },
          {
            id: 2,
            msg: "品质公寓"
          }
        ]
      },
      {
        id: 4,
        img: require("@/assets/imgs/home/room/4.jpg"),
        roomWhere: "珠江路 进香河 次卧 朝北 阳光",
        price: 1980,
        oldPrice: 2560,
        label: [
          {
            id: 1,
            msg: "独立阳台"
          },
          {
            id: 2,
            msg: "靠近地铁"
          }
        ]
      },
      {
        id: 5,
        img: require("@/assets/imgs/home/room/5.jpg"),
        roomWhere: "柳洲东路 明发滨江新城二期 主卧",
        price: 1080,
        oldPrice: 1690,
        label: [
          {
            id: 1,
            msg: "品质公寓"
          },
          {
            id: 2,
            msg: "靠近地铁"
          }
        ]
      },
      {
        id: 6,
        img: require("@/assets/imgs/home/room/6.jpg"),
        roomWhere: "新模范马路 西瓜圃桥 独立阳台",
        price: 680,
        oldPrice: 1250,
        label: [
          {
            id: 1,
            msg: "立减返现"
          },
          {
            id: 2,
            msg: "品质公寓"
          }
        ]
      },
      {
        id: 7,
        img: require("@/assets/imgs/home/room/7.jpg"),
        roomWhere: "珠江路 进香河 次卧 朝北 阳光",
        price: 1980,
        oldPrice: 2560,
        label: [
          {
            id: 1,
            msg: "独立阳台"
          },
          {
            id: 2,
            msg: "靠近地铁"
          }
        ]
      }
    ],
    // 租住品质
    current2: 0,
    rentalQuality: [
      {
        id: 1,
        img: require("@/assets/imgs/home/1.png")
      },
      {
        id: 2,
        img: require("@/assets/imgs/home/2.png")
      },
      {
        id: 3,
        img: require("@/assets/imgs/home/3.png")
      }
    ],
    goodProduct: [
      {
        id: 1,
        img: require("@/assets/imgs/home/goods/yp1.jpg"),
        roomWhere: "述物原创 全棉抱枕靠垫家用沙发客厅简约北欧靠枕床头纯棉抱枕套（含枕芯）",
        price: 63.8
      },
      {
        id: 2,
        img: require("@/assets/imgs/home/goods/yp2.jpg"),
        roomWhere: "星川 装饰画文艺复古餐厅客厅玄关组合画挂画现代简约 克拉斯克",
        price: 168.0
      },
      {
        id: 3,
        img: require("@/assets/imgs/home/goods/yp3.jpg"),
        roomWhere: "M+ ins欧式创意字母小棕瓶透明复古花瓶家居摆设花瓶",
        price: 15.6
      },
      {
        id: 4,
        img: require("@/assets/imgs/home/goods/yp4.jpg"),
        roomWhere: "述物原创 皮革ins抽纸盒北欧纸巾盒客厅创意家用欧式车载用纸巾袋",
        price: 25.9
      },
      {
        id: 5,
        img: require("@/assets/imgs/home/goods/yp5.png"),
        roomWhere: "[自营] 自如优品 裸睡纯色水洗棉四件套多色可选床品套件 被套床单枕套1.5m/1.8m均适用",
        price: 349.0
      }
    ],
    // 广告弹框显示隐藏
    fix: true
  }

  // 租住品质 滑动事件
  handleRent = (index) => {
    this.setState({
      current2: index
    })
  }

  // 关掉广告弹框事件
  handleFirst = () => {
    this.setState({
      fix: false
    })
    this.props.actions.addCounter(1)
  }
  // 底部 tabbar
  renderFooter() {
    return <AppFooter />
  }

  componentDidMount() {
    if (this.props.count > 0) {
      this.setState({
        fix: false
      })
    }
    // 获取首页轮播图
    this.props.actions.asyncHomeSwiperListAction()
    // 获取房屋列表
    this.props.actions.asyncGetFindHomeRoomList()

  }

  render() {
    let { intro, roomOption, roomIntro, discountRoom, rentalQuality, current2, goodProduct, fix } = this.state
    return (
      <Suspense fallback={<div>loading...</div>}>
        {/* <div className={ fix ? 'home-container fix' : 'home-container' } > */}
        <div className={`home-container ${fix ? 'fix' : ''}`} >
          {/* 头部导航 */}
          <HeaderNav />
          {/* 轮播 */}
          <SwiperHeader swiperList={this.props.swiperList} />
          {/* 小介绍 */}
          <Intro intro={intro} />
          {/* 合租、整租、月租、找房 */}
          <RoomOption roomOption={roomOption} />
          {/* 房屋介绍 */}
          <IntroRooms roomIntro={roomIntro} />
          {/* 特惠房源 */}
          <DiscountRoom discountRoom={discountRoom} />
          {/* 租住品质 */}
          <RentalQuality rentalQuality={rentalQuality} current2={current2} handleRent={this.handleRent} />
          {/* 服务、维修 */}
          <Services />
          {/* 保洁、搬家、维修服务 */}
          <ServiceMajor />
          {/* 返回顶部 */}
          <BackTop />
          {/* 自如驿站 */}
          <ZRStation />
          {/* 自如优品 */}
          <GoodProduct goodProduct={goodProduct} />
          {/* 尾部 一条线 */}
          <Lines />
          {/* 广告弹框 */}
          {/* <FirstAdvance isflag={ isflag } handleFirst={ this.handleFirst }/> */}
          <FirstAdvance isflag={this.props.count} handleFirst={this.handleFirst} />
          {/* 底部导航栏 */}
          {this.renderFooter()}
        </div>
      </Suspense>
    )
  }

  // export function slowImport(value, ms = 1000) {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(value), ms);
  //   })
  // }
  // const Foo = React.lazy(
  //   () => slowImport(import('../components/Foo'), 1000 ));

  // const Bar = React.lazy(
  //   ()=> slowImport(import('../components/Bar'),500)
  // )

}

const mapStateToProps = state => {
  return {
    count: state.roomer.count,
    swiperList: state.roomer.swiperList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)