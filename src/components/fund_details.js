/**
 * Created by fengxiaoli on 2017/12/15.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MessageBoard from './fund_message_board';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import Header from './common/header-all';
import Footer from './common/footer';
import FundTimeLine from './charts/fund-time-line';

import { fetchFundDetail } from '../actions/fund';

class StrategyDetails extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const fundId = this.props.match.params.id;
        localStorage.setItem("fundId", fundId);
        this.props.fetchFundDetail({fundId});
    }

    renderTags(){
        const data = this.props.all || [];
        const tags = data.tags || [];
        console.log(tags);
        return tags.map((item, index)=>{
            return(
                <span key={index} className="strategy-details-tip g-px-10 g-py-5 text-center g-mr-10" style={{width:110 +'px'}}>{item}</span>

            );
        });
    }
    render(){
        const data = this.props.all || [];
        console.log(data.tags);
        return(
            <div className="strategy-details">
                <Header/>
                    <div className="fund-details-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div>
                                        <h3 className="h2">{data.issueUserName}</h3>
                                        <div className="g-my-20">
                                            {this.renderTags()}
                                            {/*<span className="strategy-details-tip g-px-10 g-py-5 text-center g-mr-10">无认购费</span>*/}
                                            {/*<span className="strategy-details-tip g-px-10 g-py-5 text-center g-mr-10" style={{width:110 +'px'}}>自有基金跟投</span>*/}
                                            <span className="pull-right fund-share g-px-10 g-py-5 text-center"><i className="fa fa-share-alt  fund-detail-share"></i>订阅</span>
                                            <span className="pull-right fund-share g-px-10 g-py-5 text-center "> <i className="fa fa-share-alt  fund-detail-share"></i>分享</span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div>
                                        <div className="strategy-details-info-main">
                                            <div className="col-lg-5">
                                                <span className="info1">{data.returns ? (data.returns.totalReturn).toFixed(2) : "--"}%</span>
                                                <span className="info2">总收益</span>
                                            </div>
                                            <div className="col-lg-7 text-right">
                                                <span className="info2 g-pt-15">净值日期:{data.startTimeStr}</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 strategy-details-info-list">
                                            <ul>
                                                <li className="col-lg-2">
                                                    <div className="g-py-7 number">{data.returns ? (data.returns.monthChange).toFixed(2) : "--"} %</div>
                                                    <div className="g-py-7 title">近1个月</div>
                                                </li>
                                                <li className="col-lg-2">
                                                    <div className="g-py-7 number">{data.returns ? (data.returns.month3Change).toFixed(2) : "--"}%</div>
                                                    <div className="g-py-7 title">近3个月</div>
                                                </li>
                                                <li className="col-lg-2">
                                                    <div className="g-py-7 number">{data.returns ? (data.returns.month3Change).toFixed(2) : "--"}%</div>
                                                    <div className="g-py-7 title">近1年</div>
                                                </li>
                                                <li className="col-lg-2">
                                                    <div className="g-py-7 number">{data.returns ? (data.returns.thisYearChange).toFixed(2) : "--"}%</div>
                                                    <div className="g-py-7 title">今年收益</div>
                                                </li>
                                                <li className="col-lg-2">
                                                    <div className="g-py-7 number">{data.returns ? (data.returns.netAssetValue).toFixed(2) : "--"}%</div>
                                                    <div className="g-py-7 title">单位净值</div>
                                                </li>
                                                <li className="col-lg-2">
                                                    <div className="g-py-7 number">{data.returns ? (data.returns.totalReturn).toFixed(2) : "--"}%</div>
                                                    <div className="g-py-7 title">累计净值</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="user-des id-boxshadow">
                                        <div className="g-py-20 g-px-40 text-center">
                                            <div className="photo">
                                                <img style={{width:"56px"}} src="/public/img/fund_logo.png" alt=""/>
                                                <div>InvestDigital官方</div>
                                            </div>
                                            <hr/>
                                            <div className="signature g-mt-25">
                                                收益高，风险小，官方基金，力荐~
                                            </div>
                                            <button className="btn fund-detail-rengou g-px-45 g-py-8 g-mt-50 ">认购</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="container g-mt-10 g-pb-150">
                    <div className="row">
                        <div className="col-lg-8 text-center">
                            <div className="id-boxshadow g-mb-10 clearfix">
                                <div className="section-tilte g-py-10">收益走势图</div>
                                <FundTimeLine/>
                            </div>
                        </div>
                        <div className="col-lg-4 g-px-0 ">
                            <div className="id-boxshadow  g-pa-20 clearfix ">
                                <h1 className="section-tilte g-py-10" style={{fontSize:20 +'px'}}>认购信息</h1>
                                <div className="strategy-choiceness-number row g-pt-10 text-center">
                                    <div className="col-lg-4" style={{padding:0, fontSize:"14px"}}>
                                        <h5 className="g-pt-5" >开放日</h5>
                                        <h5 className="g-pt-5" style={{ color:'#F2BA49'}}>{data.info ? data.info.openday :'--'}</h5>
                                    </div>
                                    <div className="col-lg-4" style={{padding:0, fontSize:"14px"}}>
                                        <h5 className="g-pt-5"  >封闭期(月)</h5>
                                        <h5 className="g-pt-5" style={{ color:'#F2BA49'}}>{data.info ? data.info.closePeriod :'--'}</h5>
                                    </div>
                                    <div className="col-lg-4" style={{padding:0, fontSize:"14px"}}>
                                        <h5 className="g-pt-5" >成立日期</h5>
                                        <h5 className="g-pt-5" style={{ color:'#F2BA49'}}>{data ? data.startTimeStr :'--'}</h5>
                                    </div>
                                </div>
                                <div className="strategy-choiceness-number fund-b-border row g-pt-10 g-pb-30 text-center g-mb-20">
                                    <div className="col-lg-4" style={{padding:0, fontSize:"14px"}}>
                                        <h5 className="g-pt-5" >业绩提成比率</h5>
                                        <h5 className="g-pt-5" style={{color:'#F2BA49'}}>{data.info ? (((data.info.perFee)*100).toFixed(2)) :'--'}%</h5>
                                    </div>
                                    <div className="col-lg-4" style={{padding:0, fontSize:"14px"}}>
                                        <h5 className="g-pt-5" >投顾/管理费率</h5>
                                        <h5 className="g-pt-5" style={{ color:'#F2BA49'}}>{data.info ? data.info.openday :'--'}</h5>
                                    </div>
                                    <div className="col-lg-4" style={{padding:0, fontSize:"14px"}}>
                                        <h5 className="g-pt-5" >起购金额</h5>
                                        <h5 className="g-pt-5" style={{ color:'#F2BA49'}}>{data.info ? data.info.purchaseAmount :'--'} 万</h5>
                                    </div>
                                </div>
                                <h1 className="section-tilte g-py-10 " style={{fontSize:20 +'px'}}>产品信息</h1>
                                <ul className="g-pl-20 g-pb-20 g-pt-10" style={{fontSize:14 +'px'}}>
                                    <li className="g-mb-20">
                                    <span>产品全称&#x3000;&#x3000;&#x3000;&nbsp;</span>
                                        <span>{data ? data.fundName :'--'}</span>
                                    </li>
                                    <li className="g-my-20">
                                        <span>托管人&#x3000;&#x3000;&#x3000;&#x3000;&nbsp;</span>
                                        <span>{data.info ? data.info.custody_user :'--'}</span>
                                    </li>
                                    <li className="g-my-20">
                                        <span>投顾公司&#x3000;&#x3000;&#x3000;&nbsp;</span>
                                        <span>{data.info ? data.info.investAdviserCompany :'--'}</span>
                                    </li>
                                    <li className="g-my-20">
                                        <span>经纪服务商</span>
                                        <span>&#x3000;&#x3000;&nbsp;{data.info ? data.info.brokerCompany :'--'}</span>
                                    </li>
                                    <li className="g-my-20">
                                        <span>投顾所在地区</span>
                                        <span>&#x3000;&nbsp;{data.info ? data.info.investAdviserRegion :'--'}</span>
                                    </li>
                                    <li className="g-my-20">
                                        <span>基金期限&#x3000;&#x3000;&#x3000;&nbsp;</span>
                                        <span>{data.info ? new Date(data.info.deadline).toLocaleDateString() :'--'}</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="row g-mt-30">
                        <div className="col-lg-12 g-px-0"><MessageBoard/></div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        all:state.fund.all
    };
}

export default connect(mapStateToProps, { fetchFundDetail })(StrategyDetails);