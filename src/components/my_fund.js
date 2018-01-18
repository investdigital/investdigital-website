/**
 * Created by fengxiaoli on 2017/12/14.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabsControl from "./react_tab";
import Header from './common/header-all';
import Footer from './common/footer';
import UserFundall from './user_fund_my';
import UserFundmy from './user_fund_all';
class Myfund extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0
        };
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="my-fund ">
                   <div className=" container my-fund-bgc">
                       <TabsControl>
                           <div name="我的基金"><UserFundmy/></div>
                           <div name="我的策略"><UserFundall/></div>
                       </TabsControl>
                   </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Myfund;
