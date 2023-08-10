import React from 'react'
import icon11 from './images/icon11.png'
import icon111 from './images/icon111.png'
import Footer from './Footer'


const HomeSub1 = () => {
    return (
        <div>
            <div className='home-sec11'>
            <div className='Home-sub-sec'>
                <div className='Home-info-sec1'>
                    <div className='Home-info2'>
                        <div className='Home-info1'>
                            <img src='https://zomi.finance/static/media/ic_liquidity.505b3f30.svg' className='info1-img1' />
                        </div>
                        <div className='home-info1-cont'>
                            <div className='cont-tittle1'>
                                Reduce Liquidation Risks
                            </div>
                            <div className='new-text'>
                                An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.
                            </div>
                        </div>
                    </div>


                    <div className='Home-info2'>
                        <div className='Home-info1'>
                            <img src='https://zomi.finance/static/media/ic_cost.b4a729d3.svg' className='info1-img1' />
                        </div>
                        <div className='home-info1-cont'>
                            <div className='cont-tittle1'>
                                Save on Costs
                            </div>
                            <div className='new-text'>
                                Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.
                            </div>
                        </div>
                    </div>


                    <div className='Home-info2'>
                        <div className='Home-info1'>
                            <img src='https://zomi.finance/static/media/ic_simpleswaps.2005009f.svg' className='info1-img1' />
                        </div>
                        <div className='home-info1-cont'>
                            <div className='cont-tittle1'>
                                Simple Swaps
                            </div>
                            <div className='new-text'>
                                Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="Home-token-card-section">
                <div className="Home-token-card-info">
                    <div className="Home-token-card-info__title">
                        Two tokens create our ecosystem
                    </div>
                    <div className="Home-token-card-options">
                        <div className="Home-token-card-option">
                            <div className="Home-token-card-option-icon">
                                <img src={icon11} alt="mmxBigIcon" width="40px" />
                                $ZOMI
                            </div>
                            <div className="Home-token-card-option-info">
                                <div className="Home-token-card-option-title">
                                    $ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.
                                </div>
                                <div className="Home-token-card-option-apr">
                                    Ethereum APR:
                                    0.00%
                                </div>
                                <div className="Home-token-card-option-action">
                                    <div className="buy">
                                        <a className="default-btn" href="#/buy_ZOMI">Buy</a>
                                    </div>
                                    <a href="https://docs.zomi.financetokenomics/mmx" class="default-btn read-more" target="_blank" rel="noopener noreferrer">Read more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="Home-token-card-section1">
                <div className="Home-token-card-info1">
                    <div className="Home-token-card-options1">
                        <div className="Home-token-card-option1">
                            <div className="Home-token-card-option-icon">
                                <img src={icon111} alt="mmxBigIcon" width="40px" />
                                $ZLP
                            </div>
                            <div className="Home-token-card-option-info">
                                <div className="Home-token-card-option-title">
                                    $ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.
                                </div>
                                <div className="Home-token-card-option-apr">
                                    Ethereum APR:
                                    1,677,395,639.91%
                                </div>
                                <div className="Home-token-card-option-action">
                                    <div className="buy">
                                        <a className="default-btn" href="#/buy_ZOMI">Buy</a>
                                    </div>
                                    <a href="https://docs.zomi.financetokenomics/mmx" class="default-btn read-more" target="_blank" rel="noopener noreferrer">Read more</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='Footer'>
                <Footer />
            </div>
        </div>
    </div>
    )
}

export default HomeSub1
