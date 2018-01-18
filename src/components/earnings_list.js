/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import TabsControl from "./react_tab";
import EarningsDay from './earnings_day';
import EarningsWeekly from './earnings_weekly';
import EarningsMonthly from './earning_monthly';

class EarningsList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="id-boxshadow">
                <TabsControl>
                    <div name="日收益"><EarningsDay/></div>
                    <div name="周收益"><EarningsWeekly/></div>
                    <div name="月收益"><EarningsMonthly/></div>
                </TabsControl>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {

    };
}
export default connect(mapStateToProps, {})(EarningsList);