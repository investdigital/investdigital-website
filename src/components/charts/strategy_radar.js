/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { DatePicker } from 'antd';
import {fetchStrategyFactors} from '../../actions/strategy';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/radar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';


class StrateRadar extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageSize:10,
            active:0,

        };
    }
    componentWillMount() {
        const strategyId = this.props.strategyId;
        const beginTime = 0;
        const endTime = 0;
        this.props.fetchStrategyFactors({strategyId, beginTime, endTime});
    }
    componentDidUpdate() {
        let legend=[], radarData=[], data=[];
        for(let i in this.props.strategy_factors[0].factors){
            let radarName={name:this.props.strategy_factors[0].factors[i], max:100};
            radarData.push(radarName);
        }
        this.props.strategy_factors.map((item, index)=>{
            let legendItem={name:item.time, icon: 'circle'};
            legend.push(legendItem);
            let portfolioItem=[];
            item.portfolio.map((val, index)=>{
                portfolioItem.push(parseFloat(val).toFixed(2));
            });
            let dataItem = {value:portfolioItem, name:item.time};
            data.push(dataItem);
        });
        var myChart = echarts.init(document.getElementById("radar-figure"));
        // 绘制图表
        myChart.setOption({
            tooltip: {},
            legend: {
                orient:'vertical',
                align:"left",
                y: 'bottom',
                x: 'right',
                data:legend,
                itemWidth: 10,             // 图例图形宽度
                itemHeight: 10,
            },
            radar: {
                indicator: radarData
            },
            series: [{
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {type: 'default'},
                        color: function(params) {
                            let colorList = [
                                '#8da6e0', '#FCCE10', '#e07b6d'
                            ];
                            return colorList[params.dataIndex];
                        }
                    }
                },
                data:data,
            }]
        });
    }
    render(){
        return(
            <div className="col-sm-12 g-pb-20">
                <div className="radar-figure">
                    <div className="strategy-chart" id="radar-figure" style={{height:"380px"}}></div>
                </div>
            </div>


        );
    }
}

function mapStateToProps(state) {
    return {
        strategy_factors:state.strategy.strategy_factors
    };
}

export default connect(mapStateToProps, {fetchStrategyFactors})(StrateRadar);