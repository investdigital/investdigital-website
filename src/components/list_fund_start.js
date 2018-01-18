/**
 * Created by fengxiaoli on 2017/12/15.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import {fetchStartFund } from '../actions/fund';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';

import 'echarts/lib/component/dataZoom';


class FundListStart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        this.props.fetchStartFund();
    }

    componentDidUpdate() {
        const data = this.props.all || [];
        data.map((item, i)=>{
            item.map((item, index)=> {
                const myChart1 = echarts.init(((document.querySelectorAll(`[data-index='${i}']`))[0].getElementsByClassName(`main${index}`))[0]);

                const dataX= item.echart.xAxis;
                const data=item.echart.yAxis;
                const dataY1 = data[0].data;
                const dataY2 = data[1].data;
                const name1 = data[0].name;
                const name2 = data[1].name;
                // 绘制图表
                myChart1.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: '{b}<br/>{a0}&nbsp;{c0}%<br/>{a1}&nbsp;{c1}%'
                    },
                    legend:{
                        // data:[name1, name2 ],
                        // bottom:0
                    },
                    grid: {
                        left: '14%',
                        right: '1%',
                        bottom: '10%',
                        top:'10%'
                    },
                    dataZoom : [ {
                        xAxis: 0,
                        type : 'inside',
                        start : 0,
                        end : 100,
                    }, ],
                    xAxis : [
                        {
                            type : 'category',
                            interval:20, //每隔区域20
                            axisLabel :{
                            },
                            axisLine:{
                                show: false,
                            },
                            data:dataX
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel: {
                                formatter: '{value}%',
                                show: true,
                                textStyle: {
                                    color: '#252535'
                                }
                            },
                            axisLine:{
                                show: false,
                            },
                        },
                    ],
                    series : [
                        {
                            name:name1,
                            type:'line',
                            itemStyle: {
                                normal: {
                                    lineStyle:{
                                        color:'blue',
                                        opacity:"0.8"

                                    }
                                }
                            },
                            data:dataY1
                        },
                        {
                            name:name2,
                            type:'line',
                            itemStyle: {
                                normal: {
                                    lineStyle:{
                                        color:'red',
                                        opacity:"1"

                                    }
                                }
                            },
                            data:dataY2
                        }
                    ]
                });
            });
        });
    }
    renderList2(item){
        return item.map((item, index)=>{
            return(
                <Link className="col-sm-3 strategy-choiceness-item strategy-choiceness-up id-boxshadow g-mb-20 g-mt-10" to={`/funddetails/${item.id}`} key={index}>
                    <div className="strategy-choiceness-title">
                        <span className="h4">{item.fundName} {item.fundCode}</span>
                        <span className="pull-right strategy-choiceness-tip g-px-5 g-py-5">收益之王</span>
                        <div className="g-py-10 strategy-choiceness-user">
                            <div className="photo">
                                <img src="/public/img/touxiang.png" alt=""/>
                                <span className="g-pl-5">{item.issueUserName}</span>
                            </div>
                            <span className="strategy-choiceness-title-line"></span>
                        </div>
                        <div className={`strategy-chart main${index}`} style={{height:"180px", width:"240px"}}></div>
                        <div className="strategy-choiceness-number row g-pt-10 text-center">
                            <div className="col-sm-4">
                                <h5 className="g-pt-5">{(item.returns.totalReturn).toFixed(2)}%</h5>
                                <h5 className="g-pt-5">总收益</h5>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="g-pt-5">{(item.returns.netAssetValue).toFixed(2)}%</h5>
                                <h5 className="g-pt-5">单位净值</h5>
                            </div>
                            <div className="col-sm-4">
                                <h5 className="g-pt-5">{(item.returns.untilNowChange).toFixed(2)}%</h5>
                                <h5 className="g-pt-5">涨跌幅</h5>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        });
    }
    renderList(){
        const data = this.props.all || [];

        return data.map((item, index)=>{
            return(
                <div id={`strategy${index}`} key={index} className="text-center">
                    {this.renderList2(item)}
                </div>

            );
        });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const data = this.props.all || [];
        if(data == !data){
            return(
                <div className="text-center h1 col-sm-12 g-py-100">
                    <div className="loading"></div>
                </div>
            );
        }
        return (
            <div className="id-boxshadow g-pb-20 clearfix">
                <div className="col-sm-12 title text-center g-py-20">明星基金产品</div>
                <div className="col-sm-12 g-pb-20">
                    <div className="col-sm-1"></div>
                    <Slider {...settings}>
                        {this.renderList()}
                    </Slider>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        all:state.fund.all
    };
}

export default connect(mapStateToProps, { fetchStartFund })(FundListStart);