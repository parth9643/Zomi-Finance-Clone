import React from 'react'
import HomeSub1 from './HomeSub1'

const Home1 = () => {
    return (
        <div>
            <div className='Home'>
                <div className='Home2'>
                    <div className="Home-title-sec">
                        <div className='Home-title-sec1'>
                            <div className='Home-title1'>
                                Decentralized
                                Perpetual Exchange
                            </div>
                            <div className="Desc">Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet
                            </div>
                            <a className="Home-btn">Launch Exchange</a>
                        </div>
                        <div className='Home-info-sec'>
                            <div className='Home-info'>
                                <div className='Home-info1'>
                                    <img src='	https://zomi.finance/static/media/ic_trading.2c53815a.svg' className='info1-img' />
                                </div>
                                <div className='home-info1-cont'>
                                    <div className='cont-tittle'>
                                        Total trading Volume
                                    </div>
                                    <div className='cont-info'>
                                        $0
                                    </div>
                                </div>
                            </div>

                            <div className='Home-info'>
                                <div className='Home-info1'>
                                    <img src='https://zomi.finance/static/media/ic_stats.f0a18011.svg' className='info1-img' />
                                </div>
                                <div className='home-info1-cont'>
                                    <div className='cont-tittle'>
                                        Open Interest
                                    </div>
                                    <div className='cont-info'>
                                        $0
                                    </div>
                                </div>
                            </div>


                            <div className='Home-info'>
                                <div className='Home-info1'>
                                    <img src='https://zomi.finance/static/media/ic_totaluser.ae09b310.svg' className='info1-img' />
                                </div>
                                <div className='home-info1-cont'>
                                    <div className='cont-tittle'>
                                        Total Users
                                    </div>
                                    <div className='cont-info'>
                                        0
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homesub1'>
                <HomeSub1/>
            </div>


        </div>

    )
}

export default Home1
