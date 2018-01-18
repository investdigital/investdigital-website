/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchEarningMonthly} from  '../actions/strategy';
import {ROOT_AVATAR} from '../actions/types';

class EarningsMonthly extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageNum:1,
            pageSize:8,
            desc:'monthlyReturn'
        };
    }
    componentWillMount() {
        const desc=this.state.desc;
        this.props.fetchEarningMonthly({desc});
    }
    renderList(){
        return this.props.earnings_monthly.map((item, index)=>{
            return(
                <li className="strate-earnings-content-item  strategy-choiceness-item clearfix" key={index} style={{margin:0}}>
                    <div className="col-sm-2">{index+1}</div>
                    <div className="col-sm-8 photo">
                        <img src={`${ROOT_AVATAR}/${item.imageUrl}`} alt=""/>
                        <span className="g-pl-10">{item.loginname}</span>
                    </div>
                    <div className="col-sm-2">
                        {(item.monthlyReturn).toFixed(2)}%
                    </div>
                </li>
            );
        });
    }

    render(){
        if(this.props.earnings_monthly === null){
            return(<div className="text-center h4">loading</div>);
        }
        return(
            <div className="strategy-all-content clearfix">
                <div className="strategy-all-content-filtrate g-py-20">
                    <div className="text-center">您当前暂未上榜</div>
                    <hr/>
                </div>
                <div className="clearfix">
                    <ul className="clearfix">
                        {this.renderList()}
                    </ul>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        earnings_monthly:state.strategy.earnings_monthly
    };
}

export default connect(mapStateToProps, {fetchEarningMonthly})(EarningsMonthly);