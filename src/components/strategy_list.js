/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import TabsControl from "./react_tab";
import StrategyAll from './strategy_all';
import StrategyMy from './strategy_my';



class StrategyList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="id-boxshadow">
                <TabsControl>
                    <div name="全部策略"><StrategyAll/></div>
                    <div name="我的策略"><StrategyMy/></div>
                </TabsControl>
            </div>
        );
    }
}
export default StrategyList;