import React, { Component } from 'react'

import { Switch, ActionSheet, Toast, ImagePicker } from 'antd-mobile';

import './set.scss'

export default class Set extends Component {

    state = {
        checked: false,
        clicked: '',
        xz: '',
        xinzuo: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
        activeIndex: 0,
        isShow: false,
        phone: '18112646774',
        files: [],
        multiple: false,
        faceImg:'http://lc-3resyvee.cn-n1.lcfile.com/a467b3c7d2f1f38538aa/dog.jpg'
    }

    // 上传图片
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            faceImg:files[0].url
        });
    }

    // 性别
    showActionSheet = () => {
        const BUTTONS = ['男', '女', '取消'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 2,
            message: '请选择自己的性别',
            maskClosable: true,
            'data-seed': 'logId',
            onTouchStart: e => e.preventDefault(),
        },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });
    }
    // 星座
    showActionSheet2 = (index) => {
        console.log('index:', index)
        this.setState({
            activeIndex: index,
            xz: this.state.xinzuo[index]
        }, () => {
            // console.log(this.state.activeIndex)
            // console.log(this.state.xz)
        })
    }
    // 显示和隐藏
    showPopup = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    // 取消
    cancleShowPopup = () => {
        this.setState({
            isShow: false,
            xz: ''
        })
    }

    // 退出登录
    handleLogout = () => {
        Toast.loading('退出登录成功', 30)
        setTimeout(() => {
            const { history } = this.props
            history.replace('/login')
            Toast.hide();
        }, 1000);
    }

    // 修改号码
    handleEdit = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    back = () => {
        const { history } = this.props
        history.goBack()
    }

    render() {
        let { clicked, xz, xinzuo, activeIndex, isShow, phone,files,faceImg } = this.state
        return (
            <div className="set">
                <div className="back">
                    <img src={require("@/assets/imgs/login/back.png")} alt="" onClick={this.back} />
                </div>
                <div className="header_set u-f-c u-f-ajc">
                    <div style={{ position: 'relative', height: '70px', marginTop: '30px' }} className="u-f-c u-f-ajc">
                        <img src={ faceImg } className="h-img" alt="" />
                        <img src={require("@/assets/imgs/login/up.png")} className="u-img" alt="" />
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 7}
                            multiple={this.state.multiple}
                            disableDelete={false}
                        >
                        </ImagePicker>
                    </div>

                    <div className="u-f-ajc">
                        <input type="text" className="edit" value={phone} onChange={this.handleEdit} />
                        <img src={require("@/assets/imgs/login/edit.png")} className="edit-img" alt="" />
                    </div>
                </div>
                <div className="set-list">
                    <div className="set-item u-f u-f-sbc">
                        <span>性别</span>
                        <div className="u-f u-f-ajc label" onClick={this.showActionSheet}>
                            <span>{clicked ? clicked : '未设置'}</span>
                            <img src={require("@/assets/imgs/login/r.png")} alt="" />
                        </div>
                    </div>

                    <div className="set-item u-f u-f-sbc" onClick={this.showPopup}>
                        <span>星座</span>
                        <div className="u-f u-f-ajc label">
                            <span>{xz ? xz : '未设置'}</span>
                            <img src={require("@/assets/imgs/login/r.png")} alt="" />
                        </div>
                    </div>

                    <div className="set-item u-f u-f-sbc" style={{ border: 'none' }}>
                        <span>手机号</span>
                        <div className="u-f u-f-ajc label">
                            <span>18112646888</span>
                            <img src={require("@/assets/imgs/login/r.png")} alt="" />
                        </div>
                    </div>

                    <div className="bg"></div>

                    <div className="set-item u-f u-f-sbc">
                        <span>清理缓存</span>
                        <div className="u-f u-f-ajc label">
                            <span>10 MB</span>
                            <img src={require("@/assets/imgs/login/r.png")} alt="" />
                        </div>
                    </div>

                    <div className="set-item u-f u-f-sbc">
                        <span>关于蛋壳</span>
                        <div className="u-f u-f-ajc label">
                            <img src={require("@/assets/imgs/login/r.png")} alt="" />
                        </div>
                    </div>
                    <div className="set-item u-f u-f-sbc">
                        <span>我要评价</span>
                        <div className="u-f u-f-ajc label">
                            <img src={require("@/assets/imgs/login/r.png")} alt="" />
                        </div>
                    </div>

                    <div className="set-item u-f u-f-sbc" style={{ border: 'none', paddingBottom: '10px', marginTop: '10px' }}>
                        <span className="label">指纹解锁</span>
                        <div className="u-f u-f-ajc label">
                            <Switch
                                color="#54cbcc"
                                checked={this.state.checked}
                                onChange={() => {
                                    this.setState({
                                        checked: !this.state.checked,
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div className="bg"></div>

                    <div className="logout" onClick={this.handleLogout}>退出登录</div>

                    <div className="bg"></div>
                </div>

                {/* 选择星座弹框 */}
                {
                    isShow ?
                        <div className="uni-popup">
                            <div className="uni-popup__wrapper" >
                                <div className="uni-sticky">
                                    <div className="uni-chose-one u-f u-f-sbc">
                                        <span onClick={this.cancleShowPopup}>取消</span>
                                        <span onClick={this.showPopup}>确认</span>
                                    </div>
                                </div>
                                <div className="uni-content">
                                    {
                                        xinzuo.map((item, index) => (
                                            <p key={item} className={activeIndex === index ? 'ch-p-active' : ''}
                                                onClick={() => this.showActionSheet2(index)}
                                            >{item}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        : ""
                }

            </div >
        )
    }
}
