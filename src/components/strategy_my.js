/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Pagination} from 'nl-design';
import {ROOT_AVATAR} from '../actions/types';
import {fetchUserStrategy} from '../actions/strategy';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
class StrategyMy extends Component{
    constructor(props) {
        super(props);
        this.state={
            index:0,
            pageNum:1,
            pageSize:10,
            desc:'id'
        };
    }
    componentWillMount() {
        const userId= localStorage.getItem('userId');
        const pageNum=this.state.pageNum;
        const pageSize=this.state.pageSize;
        const desc=this.state.desc;
        this.props.fetchUserStrategy({pageSize, pageNum, desc, userId});
    }
    handlePagination(pageNum) {
        const userId= localStorage.getItem('userId');
        const pageSize=this.state.pageSize;
        const desc=this.state.desc;
        this.props.fetchUserStrategy(pageSize, pageNum, desc, userId);
    }
    componentDidUpdate() {
        this.props.strategy_user.data.map((item, i)=> {
            let myChart2 = echarts.init(document.getElementById(`main2${i}`));
            let dataX=item.earningData.time;
            let data=item.earningData.data;
            let csiData=item.earningData.csiData;
            // 绘制图表
            myChart2.setOption({
                tooltip: {
                    trigger: 'axis',
                    formatter: '{b}<br/>{a0}&nbsp;{c0}%<br/>{a1}&nbsp;{c1}%'
                },
                grid: {
                    left: '3%',   //图表距边框的距离
                    right: '4%',
                    top: '10%',
                    bottom: '0%',
                    containLabel: true
                },
                backgroundColor:"rgba(233, 240, 249, .3)",
                xAxis : [
                    {
                        type : 'category',
                        data : dataX,
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
                            lineStyle:{
                                color: "gainsboro"
                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'收益',
                        type:'line',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                lineStyle:{
                                    color:'rgb(170, 70, 67)'
                                }
                            }
                        },
                        data:data
                    },
                    {
                        name:'沪深300',
                        type:'line',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                lineStyle:{
                                    color:'rgb(69, 114, 167)'
                                }
                            }
                        },
                        data: csiData
                    }
                ]
            });
        });

    }
    handleClick (index) {
        this.setState({index});
    }
    renderSelect(){
        const selectItem=[
            {title:"我的分享"},
            {title:"我的订阅"}
        ];
        return selectItem.map((item, index)=>{
            return(
                <li className={ index === this.state.index ? "active" : ""} onClick={ this.handleClick.bind(this, index)} key={index}>{item.title}</li>
            );
        });
    }
    renderTags(item){
        return item.tags.map((item, index)=>{
            return(
                <div className="g-my-10" key={index}>
                    <span className="strategy-choiceness-tip g-px-5 g-py-5 g-mr-10">{item.tagName}</span>
                </div>
            );
        });
    }
    renderList(){
        const data= this.props.strategy_user && this.props.strategy_user.data;
        if(data == null ||data == '' ){
            return(
                <div className="text-center h3 col-sm-12 g-py-10">
                    暂无数据
                </div>
            );
        }
        return this.props.strategy_user.data.map((item, index)=>{
            return(
                <li className="strate-all-content-item  clearfix g-mt-20" key={index}>
                    <Link to={`/strategy/details/${item.id}`}>
                        <div className="col-sm-2 text-center">
                            <img style={{width:"70%"}} className="g-mt-30" src="/public/img/u158.png" alt=""/>
                            <span className="rank">{item.rank}</span>
                        </div>
                        <div className="col-sm-5">
                            <div className="strategy-choiceness-item clearfix" style={{padding:"20px 0"}}>
                                <div className="strategy-choiceness-title">
                                    <span className="h4">{item.title}</span>
                                    {this.renderTags(item)}
                                    <div className="g-py-10 strategy-choiceness-user">
                                        <div className="photo">
                                            <img src={`${ROOT_AVATAR}/${item.imageUrl}`} alt=""/>
                                            <span className="g-pl-5">{item.loginname}</span>
                                        </div>
                                        <span className="strategy-choiceness-title-line"></span>
                                    </div>
                                    <div className="strategy-choiceness-number row g-pt-10 text-center" style={{fontSize:"12px"}}>
                                        <div className="col-sm-3" style={{padding:0}}>
                                            <h5 className="g-pt-5">{(item.totalReturn).toFixed(2)}%</h5>
                                            <h5 className="g-pt-5">累计收益</h5>
                                        </div>
                                        <div className="col-sm-3" style={{padding:0}}>
                                            <h5 className="g-pt-5">{(item.annualizedReturn).toFixed(2)}%</h5>
                                            <h5 className="g-pt-5">年化收益</h5>
                                        </div>
                                        <div className="col-sm-3" style={{padding:0}}>
                                            <h5 className="g-pt-5">{(item.maxDrawdown).toFixed(2)}%</h5>
                                            <h5 className="g-pt-5">最大回撤</h5>
                                        </div>
                                        <div className="col-sm-3" style={{padding:0}}>
                                            <h5 className="g-pt-5">{new Date(item.beginTime).toLocaleDateString()}</h5>
                                            <h5 className="g-pt-5">开始时间</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="strategy-chart g-mt-20" id={`main2${index}`} style={{height:"190px", width:"280px"}}>
                                <span className="loading"></span>
                            </div>
                        </div>
                    </Link>
                </li>
            );
        });
    }

    render(){
        const data= this.props.strategy_user && this.props.strategy_user.data;
        const totalNum = this.props.strategy_user && this.props.strategy_user.rowCount;
        return(
            <div className="strategy-all-content clearfix">
                <div className="strategy-all-content-filtrate g-py-20 clearfix">
                    <ul>
                        {this.renderSelect()}
                    </ul>
                </div>
                <div className="clearfix">
                    <ul className="clearfix">
                        {this.renderList()}
                    </ul>
                </div>
                <div className="g-my-30">
                    {data==null || data==''?'':<Pagination  defaultPageSize={this.state.pageSize} total={totalNum} onChange={e => this.handlePagination(e)}/> }
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        strategy_user:state.strategy.strategy_user
    };
}
export default connect(mapStateToProps, {fetchUserStrategy})(StrategyMy);