/**
 * Created by fengxiaoli on 2017/12/15.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabsControl from "./react_tab";
import Header from './common/header-all';
import Footer from './common/footer';
import Listfundall from './list_fund_all';
import Listfundmy from './list_fund_my';
import FundListStart from './list_fund_start';
import $ from 'jquery';
class FundList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    moveLeft() {
        $('#imgLeft1').attr({'src': '/public/img/left_u750.png'}).css('z-index', '-1');
    }

    outLeft() {
        $('#imgLeft1').attr({'src': '/public/img/left_u749.png'}).css('z-index', '-3');    }

    moveRight() {

        $('#imgRight1').attr({'src': '/public/img/right_u747.png'}).css('z-index', '-1');
    }

    outRight() {
        $('#imgRight1').attr({'src': '/public/img/right_u746.png'}).css('z-index', '-3');
    }

    render() {
        return (
            <div>
                <Header/>
                <div className='fund clear'>
                    <div className="fund-banner-list">
                        <div className="fund-bgc">
                            <div className="col-lg-6" style={{padding: 0}} onMouseEnter={this.moveLeft.bind(this)} onMouseOut={this.outLeft.bind(this)}>
                                <img id="imgLeft1" src="../../public/img/left_u749.png" className="fund-list-banner-left"/>
                                <img id="imgLeft2" src="../../public/img/left_u752.png" className="fund-list-banner-left" style={{zIndex: "-2"}}/>
                               <div className="fund-banner-title">
                                   <div className="title-border-left g-px-20">
                                       <h2 className="g-mb-20">基金精英荟</h2>
                                       <h1 className="g-mr-10">124.20%</h1>
                                       <span>总收益</span>
                                   </div>
                                   <div className="official-btn">
                                       <span className="g-mr-20 g-px-20 g-py-10">官方出品</span>
                                       <span className="g-px-20 g-py-10">精选组合基金</span>
                                   </div>
                               </div>
                            </div>
                            <div className="col-lg-6" onMouseEnter={this.moveRight.bind(this)} onMouseOut={this.outRight.bind(this)}>
                                <img id="imgRight1" src="../../public/img/right_u746.png" className="fund-list-banner-right" />
                                <img id="imgRight2" src="../../public/img/right-u751.png" className="fund-list-banner-right" style={{zIndex: "-2"}}/>
                                <div className="fund-banner-title">
                                    <div className="title-border-right g-px-20">
                                        <h2 className="g-mb-20">艾美谷全球全天候</h2>
                                        <h1 className="g-mr-10">82.17%</h1>
                                        <span>总收益</span>
                                    </div>
                                    <div className="official-btn official-btn-right">
                                        <span className="g-mr-20 g-px-20 g-py-10">海外资产配置</span>
                                        <span className=" g-px-20 g-py-10">官方出品</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-fund ">
                    <div className="strategy-content container g-pt-100 g-pb-50">
                      <div className="row strategy-choiceness">
                          <FundListStart/>
                        </div>
                    </div>
                    <div className=" container my-fund-bgc">
                        <TabsControl>
                            <div name="全部基金"><Listfundall/></div>
                            <div name="我的基金"><Listfundmy/></div>
                        </TabsControl>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default FundList;