import React, { Component } from 'react'
import './wallet.scss'

import CountUp from 'react-countup';

import Header from '@/components/wallet/header/Header'
import WalletList from '@/components/wallet/walletList/WalletList'

export default class Wallet extends Component {
    render() {
        return (
            <div className="wallet-container">
                {/* 头部 */}
                <Header />
                {/* 中间 金额数据 */}
                <div className="userinfos u-f-c u-f-ajc">
                    <p>账户总余额（元）</p>
                    <CountUp
                        start={0.0}
                        end={1450.10}
                        duration={1.5}
                        decimals={2}
                        decimal="."
                    />
                </div>
                {/* 列表项 */}
                <WalletList />
            </div>
        )
    }
}
