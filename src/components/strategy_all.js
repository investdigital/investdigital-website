/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Pagination} from 'nl-design';
import {fetchAllStrategy} from '../actions/strategy';
import {ROOT_AVATAR} from '../actions/types';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
class StrategyAll extends Component{
    constructor(props) {
        super(props);
        this.state={
            index:0,
            pageNum:1,
            pageSize:8,
            desc:'alreadySubscribed'
        };
    }
    componentWillMount() {
        const pageNum=this.state.pageNum;
        const pageSize=this.state.pageSize;
        const desc=this.state.desc;
        this.props.fetchAllStrategy({pageSize, pageNum, desc});
    }
    handlePagination(pageNum) {
        const pageSize=this.state.pageSize;
        const desc=this.state.desc;
        this.props.fetchAllStrategy({pageSize, pageNum, desc});
    }
    componentDidUpdate() {
        this.props.strategy_all.data.map((item, i)=> {
            let myChart1 = echarts.init(document.getElementById(`main1${i}`));
            let dataX=item.earningData.time;
            let data=item.earningData.data;
            let csiData=item.earningData.csiData;
            // 绘制图表
            myChart1.setOption({
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
                                color: '#252535',
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine:{
                            lineStyle:{
                                color: "gainsboro"
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#252535'
                            },
                            formatter: '{value}%'
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
        if(index == 0){
            this.setState({desc:'alreadySubscribed'});
        }
        if(index == 1){
            this.setState({desc:'score'});
        }
        if(index == 2){
            this.setState({desc:'totalReturn'});
        }
        if(index == 3){
            this.setState({desc:'annualizedReturn'});
        }
        const pageNum=this.state.pageNum;
        const pageSize=this.state.pageSize;
        const desc=this.state.desc;
        this.props.fetchAllStrategy({pageSize, pageNum, desc});
    }
    renderSelect(){
        const selectItem=[
            {title:"订阅数量"},
            {title:"评分策略"},
            {title:"累计收益"},
            {title:"年化收益"}
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
                <span className="strategy-choiceness-tip g-px-5 g-py-5 g-mr-10" key={index}>{item.tagName}</span>
            );
        });
    }
    renderList(){
        const data= this.props.strategy_all && this.props.strategy_all.data;
        const totalNum = this.props.strategy_all && this.props.strategy_all.rowCount;
        if(data===null ||totalNum==0 ){
            return(
                <div className="text-center h3 col-sm-12 g-py-10">
                    暂无数据
                </div>
            );
        }
        return this.props.strategy_all.data.map((item, index)=>{
            return(
                <li className="strate-all-content-item  clearfix g-mt-20" key={index}>
                    <Link to={`/strategy/details/${item.id}`}>
                        <div className="col-sm-2 text-center" style={{position:"relative"}}>
                            {(item.rank)==1 ? <img style={{width:"70%"}} className="g-mt-30" src="/public/img/u76.png" alt=""/> :
                                ((item.rank) == 2 ? <img style={{width:"70%"}} className="g-mt-30" src="/public/img/u116.png" alt=""/> :
                                    ((item.rank) ==3 ? <img style={{width:"70%"}} className="g-mt-30" src="/public/img/u138.png" alt=""/> :
                                        <img style={{width:"70%"}} className="g-mt-30" src="/public/img/u158.png" alt=""/>)
                                )
                            }
                            <span className="rank">{item.rank}</span>
                        </div>
                        <div className="col-sm-5">
                            <div className="strategy-choiceness-item clearfix" style={{padding:"20px 0"}}>
                                <div className="strategy-choiceness-title">
                                    <span className="h4">{item.title}</span>
                                    <div className="g-my-10" >
                                        {this.renderTags(item)}
                                    </div>
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
                            <div className="strategy-chart g-mt-15" id={`main1${index}`} style={{height:"190px", width:"280px"}}>
                                <span className="loading"></span>
                            </div>
                        </div>
                    </Link>
                </li>
            );
        });
    }

    render(){
        const data= this.props.strategy_all && this.props.strategy_all.data;
        const totalNum = this.props.strategy_all && this.props.strategy_all.rowCount;
        return(
            <div className="strategy-all-content clearfix">
                <div className="strategy-all-content-filtrate g-py-20 clearfix">
                    <ul>
                        {this.renderSelect()}
                    </ul>
                    <div className="strategy-all-set pull-right text-center g-px-20">设置</div>
                </div>
                <div className="clearfix">
                    <ul className="clearfix">
                        {this.renderList()}
                    </ul>
                </div>
                <div className="g-my-30">
                    {data==null || totalNum == 0 ?'':<Pagination  defaultPageSize={this.state.pageSize} total={totalNum} onChange={e => this.handlePagination(e)} /> }
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        strategy_all:state.strategy.strategy_all
    };
}
export default connect(mapStateToProps, {fetchAllStrategy})(StrategyAll);