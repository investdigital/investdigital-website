/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStrategyBrinsion} from '../../actions/strategy';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';


class StrateBar extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageSize:10,
            active:0,
        };
    }
    componentWillMount() {
        const strategyId = this.props.strategyId;
        this.props.fetchStrategyBrinsion({strategyId});
    }
    componentDidUpdate() {
        const strategy_brinsion=this.props.strategy_brinsion;
        const data1=(strategy_brinsion.activeReturn*100).toFixed(2);
        const data2=(strategy_brinsion.assetAllocation*100).toFixed(2);
        const data3=(strategy_brinsion.stockConfig*100).toFixed(2);
        let myChart = echarts.init(document.getElementById("bar-figure"));
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                splitLine:{show: false}, //去除网格线
                type: 'value',
                boundaryGap: [0, 0.01],
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                      color: "gainsboro"
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#252535'
                    }
                }

            },
            yAxis: {
                splitLine:{show: false}, //去除网格线
                type: 'category',
                data: ['资产配置'],
                axisTick: {
                    show: false
                },
                axisLine:{
                    lineStyle:{
                        color: "gainsboro"
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#252535'
                    }
                }
            },
            series: [
                {
                    name: '主动收益',
                    type: 'bar',
                    data: [data1],
                    itemStyle:{
                        normal:{
                            color:'#f57b31',
                        }
                    },
                },
                {
                    name: '资产配置',
                    type: 'bar',
                    data: [data2],
                    itemStyle:{
                        normal:{
                            color:'#f5422e',
                        }
                    },
                },
                {
                    name: '选股配置',
                    type: 'bar',
                    data: [data3],
                    itemStyle:{
                        normal:{
                            color:'#f5db43',
                        }
                    },
                }
            ]
        });
    }

    render(){
        return(
            <div className="col-sm-12 g-pb-20">
                <div className="bar-figure">
                    <div className="strategy-chart" id="bar-figure" style={{height:"300px"}}></div>
                    <div className="title">
                        <div className="g-py-45">主动收益</div>
                        <div className="g-py-45">选股配置</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        strategy_brinsion:state.strategy.strategy_brinsion
    };
}

export default connect(mapStateToProps, {fetchStrategyBrinsion})(StrateBar);