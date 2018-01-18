/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Pagination} from 'nl-design';
import {ROOT_AVATAR} from '../actions/types';
import ReactQuill from 'react-quill';
import {fetchFundComment} from '../actions/fund';
import 'react-quill/dist/quill.snow.css';


class FundMessageBoard extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageNum:1,
            pageSize:5,
        };
    }
    componentWillMount() {
        const fundId = localStorage.getItem("fundId");
        const pageNum=this.state.pageNum;
        const pageSize=this.state.pageSize;
        this.props.fetchFundComment({fundId, pageNum, pageSize});
    }
    // handlePagination(pageNum) {
    //     console.log(pageNum);
    //     const fundId = localStorage.getItem("fundId");
    //     const pageSize=this.state.pageSize;
    //     this.props.fetchFundComment({fundId, pageNum, pageSize});
    // }
    renderList(){
        const mesdata = this.props.messageall || [];

        console.log(mesdata);
        return mesdata.map((item, index)=>{
            // console.log(item);
            return(
                <li className="message-board-item g-py-20 g-mx-20 clearfix" key={index}>
                    {/*<div className="col-sm-2 photo">*/}
                        {/*<img src={`${ROOT_AVATAR}/${item.imageUrl}`} alt=""/>*/}
                    {/*</div>*/}
                    <div className="col-sm-10">
                        <span>{item.username}</span>
                        <div>{item.comments}</div>
                    </div>
                    <div className="col-sm-2">
                        {new Date(item.date).toLocaleDateString()}
                    </div>
                </li>
            );
        });
    }
    render(){
        // const totalNum = this.props.messageall  &&  this.props.messageall.rowCount;
        //
        // console.log(totalNum);

        if(this.props.messageall === null){
            return(
                <div className="text-center h3">loading</div>
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
                    {/*<Pagination  defaultPageSize={this.state.pageSize} total={totalNum}  onChange={e => this.handlePagination(e)}/>*/}
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
    // console.log('留言板');
    // console.log(state.fund.messageall);
    return {
        messageall:state.fund.messageall
    };
}
export default connect(mapStateToProps, {fetchFundComment})(FundMessageBoard);