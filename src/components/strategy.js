/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import EarningsList from './earnings_list';
import StrategyList from './strategy_list';
import Header from './common/header-all';
import StrategyGreat from './strategy_great';
import Footer from './common/footer';

class Strategy extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="strategy">
                <Header/>
                <div className="strategy-list-banner">
                    <div className="strategy-list-banner-mask">
                        <h2 className="text-center h2 g-color-white" style={{marginTop:"0"}}>一起来发现最优秀的策略</h2>
                        <span className="strategy-line"></span>
                    </div>
                </div>
                <div className="strategy-content container strategy-container g-pt-100 g-pb-150">
                    <div className="row strategy-choiceness">
                        <div className="col-sm-12">
                            <StrategyGreat/>
                        </div>
                    </div>
                    <div className="row g-mt-50">
                        <div className="col-sm-8">
                            <StrategyList/>
                        </div>
                        <div className="col-sm-4 ">
                            <EarningsList/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Strategy;