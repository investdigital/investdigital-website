/**
 * Created by fengxiaoli on 2017/12/14.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Radio } from 'antd';
import Header from './common/header-all';
import Footer from './common/footer';

import {fetchFundSubmission } from '../actions/fund';

import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';

class Issuefund extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            error: null,
            actionResult: '',
            value1: 1,
            value2: 1,
            value3: 1,
            value4: 1,
            value5: 1,
            value6: 1,
        };
        this.FundSubmission= this.FundSubmission.bind(this);
    }
    hideModal = () => {
        this.setState({
            isModalOpen: false
        });
    };
    FundSubmission(){
        const { value1, value2, value3, value4, value5, value6} = this.state;
       const formdata = {
           "username":this.refs.name.value,
           "investDigitalNo": this.refs.id.value,
           "mobilephone": this.refs.phonenum.value,
           "assetManageScale": value1,
           "privateIssuanceTime": value2,
           "fundQualification": value3,
           "privateIssuanceStage": value4,
           "fundAssociationRecord": value5,
           "productDistribution": value6,
       };
       if(this.props.authenticated){
            this.props.fetchFundSubmission({ formdata }, err => {
                this.setState({ isModalOpen: true, error: err, actionResult: err || '提交成功!' });
            });
        }else{
            alert('请先登录');
        }
    }
    onChange1 = (e) => {
        this.setState({
            value1: e.target.value,
        });
    }
    onChange2 = (e) => {
        this.setState({
            value2: e.target.value,
        });
    }
    onChange3 = (e) => {
        this.setState({
            value3: e.target.value,
        });
    }
    onChange4 = (e) => {
        this.setState({
            value4: e.target.value,
        });
    }
    onChange5 = (e) => {
        this.setState({
            value5: e.target.value,
        });
    }
    onChange6 = (e) => {
        this.setState({
            value6: e.target.value,
        });
    }

    render() {
        const RadioGroup = Radio.Group;
        return (
            <div>
                <Header/>
                <div className="form-banner form-style g-pt-30 g-mb-20">
                    <div className="text-center">
                        <h1>申请发行基金</h1>
                        <hr/>
                        <p>请按照步骤完成申请,工作人员之后会与您联系具体发行事宜.</p>
                    </div>
                </div>
                <div className="container form-style">
                    <div className="col-lg-9 base-info g-py-20 g-px-50">
                        <h2 className="g-mb-20 g-mt-10">填写基本信息</h2>
                        <ul>
                            <li className="text-left clear">
                                <span className="col-lg-3">您的姓名</span>
                                <input type="text" className="input col-lg-9" ref="name"/>

                            </li>
                            <li className="text-left clear">
                                <span className="col-lg-3">InvestDigital号</span>
                                <input type="text" className="input col-lg-9" ref="id"/>
                            </li>
                            <li className="text-left clear">
                                <span className="col-lg-3">您的手机</span>
                                <input type="text" className="input col-lg-9" ref="phonenum"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container form-style g-pb-50">
                    <div className="col-lg-9  g-pa-20">
                        <div className="clear">
                            <ul>
                                <li className="input-radio">
                                    <h1>01.资产管理规模</h1>
                                    <RadioGroup onChange={this.onChange1} value={this.state.value1}>
                                        <Radio value={1}>300万元以下</Radio><br/><br/>
                                        <Radio value={2}>300万元-500万</Radio><br/><br/>
                                        <Radio value={3}>500万以上</Radio><br/><br/>
                                    </RadioGroup>
                                </li>
                                <li className="input-radio">
                                    <h1>02. 拟发行私募时间？</h1>
                                    <RadioGroup onChange={this.onChange2} value={this.state.value2}>
                                        <Radio value={1}>立刻发行</Radio><br/><br/>
                                        <Radio value={2}>3个月内</Radio><br/><br/>
                                        <Radio value={3}>3-6个月内</Radio><br/><br/>
                                        <Radio value={4}>无法确定</Radio><br/><br/>
                                    </RadioGroup>
                                </li>
                                <li className="input-radio">
                                    <h1>03. 是否具备基金从业资格</h1>
                                    <RadioGroup onChange={this.onChange3} value={this.state.value3}>
                                        <Radio value={1}>1人具备从业资格</Radio><br/><br/>
                                        <Radio value={2}>2人或2人以上具备从业资格</Radio><br/><br/>
                                        <Radio value={3}>不具备</Radio><br/><br/>
                                    </RadioGroup>
                                </li>
                                <li className="input-radio">
                                    <h1>04. 私募运行阶段</h1>
                                    <RadioGroup onChange={this.onChange4} value={this.state.value4}>
                                        <Radio value={1}>尚未成立公司</Radio><br/><br/>
                                        <Radio value={2}>初创型私募</Radio><br/><br/>
                                        <Radio value={3}>成长型私募</Radio><br/><br/>
                                    </RadioGroup>
                                </li>
                                <li className="input-radio">
                                    <h1>05. 是否在基金业协会备案</h1>
                                    <RadioGroup onChange={this.onChange5} value={this.state.value5}>
                                        <Radio value={1}>已备案登记</Radio><br/><br/>
                                        <Radio value={2}>尚未备案登记</Radio><br/><br/>
                                    </RadioGroup>
                                </li>
                                <li className="input-radio">
                                    <h1>06. 发行产品情况</h1>
                                    <RadioGroup onChange={this.onChange6} value={this.state.value6}>
                                        <Radio value={1}>未曾发行产品</Radio><br/><br/>
                                        <Radio value={2}>已发行产品</Radio><br/><br/>
                                    </RadioGroup>
                                </li>
                            </ul>
                            <Link className="form-style" to="/issuefund">
                                <button className="btn Issuing-fund g-my-50 " onClick={this.FundSubmission}>提交信息</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} onRequestHide={this.hideModal}>
                    <ModalHeader>
                        <ModalClose onClick={this.hideModal} />
                        <ModalTitle>提示:</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p className={this.state.error ? 'text-red' : 'text-green'}>
                            {this.state.actionResult}
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn'  onClick={this.hideModal}>
                            <a style={{color:'#444444'}} >关闭</a>
                        </button>
                    </ModalFooter>
                </Modal>
                <Footer/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state.auth.authenticated);
    return {
        all:state.fund.all,
        authenticated:state.auth.authenticated
    };
}

export default connect(mapStateToProps, {fetchFundSubmission})(Issuefund);