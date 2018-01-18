/**
 * Created by fengxiaoli on 2017/12/14.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Pagination} from 'nl-design';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import {fetchFundMy } from '../actions/fund';

class UserFundall extends Component{
    constructor(props) {
        super(props);
        this.state={
           index:0,
            pageSize:4,
            pageNum:1
        };
    }
    componentWillMount(){
        const userId = localStorage.getItem('userId');
        const pageNum=this.state.pageNum;
        const pageSize=this.state.pageSize;
        this.props.fetchFundMy({userId, pageNum, pageSize});
    }
    handlePagination(pageNum) {
        const userId = localStorage.getItem('userId');
        const pageSize = this.state.pageSize;
        this.props.fetchFundMy({userId, pageSize, pageNum});
    }
    componentDidUpdate() {
        const data = this.props.myfund.data || [];
        data.map((item, i)=> {
            const dataX=item.echart.xAxis;
            const data=item.echart.yAxis;
            const dataY1 = data[0].data;
            const dataY2 = data[1].data;
            const name1 = data[0].name;
            const name2 = data[1].name;

            const myChart = echarts.init(document.getElementById(`main${i}`));
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                    formatter: '{b}<br/>{a0}&nbsp;{c0}%<br/>{a1}&nbsp;{c1}%'
                },
                legend:{
                    // data:[name1, name2 ],
                },
                grid: {
                    left: '12%',
                    right: '1%',
                    bottom: '10%',
                    top:'10%'
                    // containLabel: true
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
                        interval:50, //每隔区域20
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
    }
    renderTags(item){
        return item.tags.map((item, index)=>{
            return(
                <span key={index} className="strategy-choiceness-tip g-px-15 g-py-5 g-mr-10">{item}</span>

            );
        });
    }
    handleClick (index) {
        this.setState({index});
    }
    renderSelect(){
        const selectItem=[
            {title:"近六个月以来"},
            {title:"今年以来"},
            {title:"全部"}
        ];
        return selectItem.map((item, index)=>{
            return(
                <li className={ ` user-fund-all g-mb-20 ${index === this.state.index ? "active hover" : " "} `} onClick={ this.handleClick.bind(this, index)} key={index}>
                    <Link to=''>{item.title}</Link>
                </li>
            );
        });
    }
    renderList(){
        const data = this.props.myfund.data || [];
            return data.map((item, index) => {
                return (
                    <li className="strate-all-content-item  clearfix g-mt-20" key={index}>
                        <Link to={`/funddetails/${item.id}`}>
                            <div className="col-lg-6">
                                <div className="strategy-choiceness-item  clearfix" style={{padding: "20px 0"}}>
                                    <div className="strategy-choiceness-title">
                                        <span className="h4" style={{color: 'black'}}>{item.fundName} ({item.fundCode})</span>
                                        <div className="g-my-10">
                                            {this.renderTags(item)}
                                        </div>
                                        <div className="g-py-10 strategy-choiceness-user">
                                            <div className="photo">
                                                <img src="/public/img/touxiang.png" alt=""/>
                                                <span className="g-pl-5">{item.issueUserName}</span>
                                            </div>
                                            <span className="my-fund-item-line"></span>
                                        </div>
                                        <div className="strategy-choiceness-number row g-pt-10 text-center">
                                            <div className="col-lg-3" style={{padding:0}}>
                                                <h5 className="g-pt-5"  style={{fontSize:"16px", color:'#FC5D45'}}>{(item.returns.totalReturn).toFixed(2)}%</h5>
                                                <h5 className="g-pt-5" style={{fontSize:"14px", color:'#6C6C6C'}}>总收益</h5>
                                            </div>
                                            <div className="col-lg-3" style={{padding:0}}>
                                                <h5 className="g-pt-5"  style={{fontSize:"16px", color:'#FC5D45'}}>{(item.returns.netAssetValue).toFixed(2)}%</h5>
                                                <h5 className="g-pt-5" style={{fontSize:"14px", color:'#6C6C6C'}}>单位净值</h5>
                                            </div>
                                            <div className="col-lg-3" style={{padding:0}}>
                                                <h5 className="g-pt-5"  style={{fontSize:"16px", color:'#FC5D45'}}>{(item.returns.untilNowChange).toFixed(2)}%</h5>
                                                <h5 className="g-pt-5" style={{fontSize:"14px", color:'#6C6C6C'}}>涨跌幅</h5>
                                            </div>
                                            <div className="col-lg-3" style={{padding:0}}>
                                                <h5 className="g-pt-5"  style={{fontSize:"16px", color:'#FC5D45'}}>{item.startTimeStr}</h5>
                                                <h5 className="g-pt-5" style={{fontSize:"14px", color:'#6C6C6C'}}>开始时间</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 g-px-0">
                                <div className=" my-fund-border g-px-20 g-mt-20">
                                    <div className="col-lg-4 g-pl-30" style={{height: "180px"}}>
                                        <ul className="my-fund-echart">
                                            {this.renderSelect()}
                                        </ul>
                                    </div>
                                    <div className="col-lg-8" id={`main${index}`} style={{height: "180px"}}></div>
                                </div>
                            </div>
                        </Link>
                    </li>
                );
            });
    }
    render(){
        const totalNum = this.props.myfund &&  this.props.myfund.rowCount;
        const data= this.props.myfund && this.props.myfund.data;
        if(data === null){
            return(
                <div className="text-center h3 col-sm-12 g-py-100">
                    暂无数据
                </div>
            );
        }
        return(
            <div className="container g-pt-100 g-px-40 g-pb-100 clearfix">
                <div className="clearfix  ">
                    <ul className="clearfix">
                        {this.renderList()}
                    </ul>
                </div>
                <div className="g-my-30">
                    <Pagination  defaultPageSize={this.state.pageSize} total={totalNum}  onChange={e => this.handlePagination(e)}/>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    // console.log(state.fund.myfund);
    return {
        myfund:state.fund.myfund,
        error:state.fund.error
    };
}

export default connect(mapStateToProps, { fetchFundMy })(UserFundall);