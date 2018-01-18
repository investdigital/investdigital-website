/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MessageBoard from './message_board';
import { Table } from 'antd';
import Footer from './common/footer';
import 'antd/dist/antd.css';
import {fetchUserTransaction, fetchUserPosition, fetchStrategyInfo} from '../actions/strategy';
import {ROOT_AVATAR} from '../actions/types';
import Header from './common/header-all';
import StrateTimeLine from './charts/strategy_time_line';
import StrateRadar from './charts/strategy_radar';
import StratePie from './charts/strategy_pie';
import StrateBar from './charts/strategy_bar';

class StrategyDetails extends Component{
    constructor(props) {
        super(props);
        this.state={
            color:true
        };
    }
    componentWillMount() {
        const strategyId = this.props.match.params.id;
        this.props.fetchStrategyInfo({strategyId});
        this.props.fetchUserTransaction({strategyId});
        this.props.fetchUserPosition({strategyId});
    }
    renderTags(info){
        return info.tags.map((item, index)=>{
            return(
                <span className="strategy-details-tip g-px-10 g-py-5 text-center g-mr-10" key={index}>{item.tagName}</span>
            );
        });
    }
    render(){
        const columns1 = [{
            title: '合约',
            dataIndex: 'fundName',
            key:'fundName',
            width: 150,
        }, {
            title: '仓位',
            dataIndex: 'num',
            key:'num',
            width: 150,
        }, {
            title: '开仓均价',
            dataIndex: 'openAvgPrice',
            key:'openAvgPrice',
        }, {
            title: '累积盈亏',
            dataIndex: 'totalProfilLoss',
            key:'totalProfilLoss',
        }
        ];
        const columns2 = [{
            title: '时间',
            dataIndex: 'date',
            key: 'date',
            width: '20%',
        }, {
            title: '合约',
            dataIndex: 'fundName',
            key: 'fundName',
            width: '30%',
        }, {
            title: '买卖',
            dataIndex: 'txTypeValue',
            key: 'txTypeValue',
            width: '10%',
        }, {
            title: '成交价',
            dataIndex: 'txPrice',
            key: 'txPrice',
            width: '20%',
        }, {
            title: '成交量',
            dataIndex: 'txNum',
            key: 'txNum',
            width: '20%',
        }];
        if(this.props.strategy_info === null){
            return(
                <div className="h3 text-center g-py-100">loading...</div>
            );
        }
        const info=this.props.strategy_info;
        const user_position=this.props.user_position;
        const user_transaction=this.props.user_transaction;
        return(
            <div className="strategy-details">
                <Header/>
                <div className="strategy-details-banner">
                    <div className="strategy-details-banner-mask">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div>
                                        <h3 className="h2">{info.title}</h3>
                                        <div className="g-my-20">
                                            {this.renderTags(info)}
                                        </div>
                                    </div>
                                    <hr/>
                                    <div>
                                        <div className="strategy-details-info-main text-center">
                                            <div className="col-sm-5">
                                                <span className="info1">{(info.totalReturn).toFixed(2)}%</span>
                                                <span className="info2">累计收益</span>
                                            </div>
                                            <div className="col-sm-4">
                                                <span className="info3">{info.score}</span>分
                                            </div>
                                            <div className="col-sm-3">
                                                <span className="info3">{info.rank}</span>名
                                            </div>
                                        </div>
                                        <div className="col-sm-12 strategy-details-info-list">
                                            <ul>
                                                <li className="col-sm-3">
                                                    <div className="g-py-7 number">{(info.annualizedReturn).toFixed(2)}%</div>
                                                    <div className="g-py-7 title">年化收益</div>
                                                </li>
                                                <li className="col-sm-3">
                                                    <div className="g-py-7 number">{(info.maxDrawdown).toFixed(2)}%</div>
                                                    <div className="g-py-7 title">最大回撤</div>
                                                </li>
                                                <li className="col-sm-3">
                                                    <div className="g-py-7 number">{new Date(info.beginTime).toLocaleDateString()}</div>
                                                    <div className="g-py-7 title">开始时间</div>
                                                </li>
                                                <li className="col-sm-3">
                                                    <div className="g-py-7 number">{info.initMoney}</div>
                                                    <div className="g-py-7 title">初始资金</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="user-des id-boxshadow">
                                        <div className="g-py-20 g-px-40 text-center">
                                            <div className="photo">
                                                <img style={{width:"56px"}} src={`${ROOT_AVATAR}/${info.imageUrl}`} alt=""/>
                                                <div>{info.loginname}</div>
                                            </div>
                                            <hr/>
                                            <div className="signature">
                                                {info.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container g-mt-10 g-pb-150">
                    <div className="row">
                        <div className="col-sm-8 text-center">
                            <div className="id-boxshadow g-mb-10 clearfix">
                                <div className="section-tilte g-py-10">收益走势图</div>
                                <StrateTimeLine strategyId={this.props.match.params.id}/>
                            </div>
                            <div className="id-boxshadow g-mb-10">
                                <div className="section-tilte g-py-10">当前持仓</div>
                                <Table columns={columns1} dataSource={user_position} pagination={false} scroll={{ y: 240 }} rowKey="id" />
                            </div>
                            <div className="id-boxshadow g-mb-10">
                                <div className="section-tilte g-py-10">最新交易</div>
                                <Table columns={columns2} dataSource={user_transaction} pagination={false} scroll={{ y: 240 }} rowKey="id"/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="id-boxshadow g-mb-10 clearfix">
                                <div className="section-tilte g-py-10">风格分析</div>
                                <StrateRadar strategyId={this.props.match.params.id} />
                            </div>
                            <div className="id-boxshadow g-mb-10 clearfix">
                                <div className="section-tilte g-py-10">板块分析</div>
                                <StratePie strategyId={this.props.match.params.id} />
                            </div>
                            <div className="id-boxshadow g-mb-10 clearfix">
                                <div className="section-tilte g-py-10">Brinson分析</div>
                                <StrateBar strategyId={this.props.match.params.id} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"><MessageBoard strategyId={this.props.match.params.id} /></div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        strategy_info:state.strategy.strategy_info,
        user_position:state.strategy.user_position,
        user_transaction:state.strategy.user_transaction
    };
}

export default connect(mapStateToProps, {fetchStrategyInfo, fetchUserTransaction, fetchUserPosition})(StrategyDetails);