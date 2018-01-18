/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Pagination} from 'nl-design';
import {ROOT_AVATAR} from '../actions/types';
import ReactQuill from 'react-quill';
import {fetchStrategyComment} from '../actions/strategy';
import 'react-quill/dist/quill.snow.css';


class MessageBoard extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageNum:1,
            pageSize:8,
        };
    }
    componentWillMount() {
        const pageNum=this.state.pageNum;
        const pageSize=this.state.pageSize;
        const strategyId=this.props.strategyId;
        this.props.fetchStrategyComment({strategyId, pageSize, pageNum});
    }
    handlePagination(pageNum) {
        const strategyId=this.props.strategyId;
        const pageSize=this.state.pageSize;
        this.props.fetchStrategyComment({strategyId, pageSize, pageNum});
    }
    renderList(){
            return this.props.strategy_comment.data.map((item, index)=>{
                return(
                    <li className="message-board-item g-py-20 g-mx-20 clearfix" key={index}>
                        <div className="col-sm-2 photo">
                            <img src={`${ROOT_AVATAR}/${item.imageUrl}`} alt=""/>
                        </div>
                        <div className="col-sm-8">
                            <span>{item.username}</span>
                            <div>{item.content}</div>
                        </div>
                        <div className="col-sm-2">
                            {new Date(item.time).toLocaleDateString()}
                        </div>
                    </li>
                );
            });
        }
    render(){
        const totalNum = this.props.strategy_comment && this.props.strategy_comment.rowCount;
        if(this.props.strategy_comment === null){
            return(
                <div className="text-center h3">loading...</div>
            );
        }
        return(
            <div className="id-boxshadow clearfix g-py-20">
                <ul className="message-board clearfix">
                    <li className="title g-px-20">留言板</li>
                    <li className="col-sm-12">
                        <ul>
                            {this.renderList()}
                        </ul>
                    </li>
                </ul>
                <div className="g-my-30">
                    <Pagination  defaultPageSize={this.state.pageSize} total={totalNum}  onChange={e => this.handlePagination(e)}/>
                </div>
                <div className="col-sm-12">
                    <div className="g-mx-20">
                        <ReactQuill theme="snow" value={ this.state.text } onChange={(val)=>{this.setState({text: val});}}/>
                        <div className="btn pull-right strategy-btn clearfix g-mt-20">确认提交</div>
                    </div>
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        strategy_comment:state.strategy.strategy_comment
    };
}
export default connect(mapStateToProps, {fetchStrategyComment})(MessageBoard);