/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStrategyPlate} from '../../actions/strategy';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';


class StratePie extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageSize:10,
            active:0,
        };
    }
    componentWillMount() {
        const strategyId = this.props.strategyId;
        this.props.fetchStrategyPlate({strategyId});
    }
    componentDidUpdate() {
        let data=[], pieItem=[], legend=[], legendItem=[];
        this.props.strategy_plate.sectorsList.slice(0, 6).map((item, index)=>{
            pieItem={value:item.value, name:item.name};
            legendItem={name:item.name, icon: 'circle'};
            data.push(pieItem);
            legend.push(legendItem);
        });
        let myChart = echarts.init(document.getElementById("pie-figure"));
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient:'vertical',
                align:"left",
                y: 'bottom',
                x: 'right',
                itemWidth: 10,             // 图例图形宽度
                itemHeight: 10,
                data:legend
            },
            series: [
                {
                    name:'收益',
                    type:'pie',
                    radius: ['30%', '70%'],
                    center: ['50%', '40%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaStyle: {type: 'default'},
                            color: function(params) {
                                let colorList = [
                                    '#F5422E', '#D43941', '#DD514E', '#E07B6D', '#FFB4A2', '#FFDBD2'
                                ];
                                return colorList[params.dataIndex];
                            }
                        }
                    },
                    data:data
                }
            ]
        });
    }

    render(){
        return(
            <div className="col-sm-12 g-pb-20">
                <div className="pie-figure">
                    <div className="strategy-chart" id="pie-figure" style={{height:"300px"}}></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        strategy_plate:state.strategy.strategy_plate
    };
}

export default connect(mapStateToProps, {fetchStrategyPlate})(StratePie);