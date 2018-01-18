/**
 * Created by fengxiaoli on 2017/12/15.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';

import { fetchFundDetailChange } from '../../actions/fund';

class StrateTimeLine extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageSize:10,
            active:0,
            index:0
        };
    }
    // componentDidUpdate() {
    //     const data = this.props.all || [];
    //     console.log(data.echart);
    // }


    handleChange(date, dateString){
        // console.log(date, dateString);
    }
    componentDidUpdate() {

        const data = this.props.all || [];
        const myChart = echarts.init(document.getElementById("earning-figure"));
        const dataX= data.echart.xAxis;
        const dataY=data.echart.yAxis;
        const dataY1 = dataY[0].data;
        const dataY2 = dataY[1].data;
        const name1 = dataY[0].name;
        const name2 = dataY[1].name;

        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                formatter: '{b}<br/>{a0}&nbsp;{c0}%<br/>{a1}&nbsp;{c1}%'
            },
            legend:{
                // data:[name1, name2 ],
                // bottom:45
            },
            grid: {
                left: '12%',
                right: '1%',
                bottom: '10%'
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
                    interval:100, //每隔区域100
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


    }
    handleClick (index) {
        console.log(index);
        this.setState({index});
        const day = index;
        const fundId = localStorage.getItem("fundId");
        this.props.fetchFundDetailChange({day, fundId});

    }
    renderSelect(){
        const selectItem=[
            {title:"近六个月"},
            {title:"今年以来"},
            {title:"全部"}
        ];
        return selectItem.map((item, index)=>{
            return(
                <li  className={ `pull-left shouyi-time g-mr-10 ${index === this.state.index ? "active  g-mr-5" : "g-mr-5"} `} onClick={ this.handleClick.bind(this, index)} key={index}>{item.title}</li>
            );
        });
    }

    render(){
        return(
            <div className="col-sm-12 g-py-20">
                <div className="earning-figure">
                    <div className="earning-figure-fund g-px-30 text-left clearfix">
                        <div>
                           <ul className="my-fund-echart">
                               {this.renderSelect()}
                           </ul>
                        </div>
                    </div>
                    <div className="strategy-chart g-mt-20" id="earning-figure" style={{height:"350px"}}></div>
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

export default connect(mapStateToProps, { fetchFundDetailChange })(StrateTimeLine);