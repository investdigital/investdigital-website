/**
 * Created by fengxiaoli on 2017/12/13.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './common/header-all';
import Footer from './common/footer';
import { Link } from 'react-router-dom';
class FundIssuance extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    rowRender(item, index){
        return (
            <div key={index} className='col-lg-4 fa-bz-3 g-my-10'>
                <div className='text-center'>
                    <h2>{item.h2}</h2>
                    <hr/>
                </div>
                <p className="g-px-50" style={{color:'#333333'}}>{item.p}</p>
            </div>
        );
    }

    render() {

        const rowLink =[
            {h2:'基金评价', p:'对基金盈利能力和风控能力进行评估，并深入分析挖掘基金的投资行为特征'},
            {h2:'投研支持', p:'绑定多家投研机构提供线上线下的优质投研服务'},
            {h2:'社区推广', p:'利用INVESTDIGITAL的互联网社交圈，传播投资理念，为公司和产品树立品牌'},
            {h2:'线下互动', p:'NVESTDIGITAL为基金工厂团队和投资者提供丰富的线下沟通交流机会'},
            {h2:'关系管理', p:'通过社交网络，实现投资者关系管理，行程管理人和投资者之间的持续有效互动'},
            {h2:'团队扩展', p:'依托互联网社区寻找合作伙伴和投资管理人才'},
            {h2:'资本引介', p:'专属天使计划种子基金和成长基金，为优秀基金团队提供资金支持'}
        ];

        return (
            <div>
                <Header />
                <div className='fund clear'>
                    <div className="fund-banner">
                       <div className="fund-bgc">
                            <div className="fund-content text-center">
                                <div className="fund-title">
                                    <h1>InvestDigital基金工厂</h1>
                                        <hr/>
                                    <h2>最靠谱的基金发行服务平台</h2>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>

                <div className='container clear'>
                    <div className='g-pt-50'>
                        <div className="fund-what-content text-center">
                            <h1>什么是基金工厂?</h1>
                            <hr/>
                            <h2>InvestDigital基金工厂是帮助投资者“一键发行基金”的互联网资管服务平台</h2>
                        </div>
                        <div className='col-lg-4 fa-bz-1'>
                           <div className='text-center num-title'><p className="g-pt-5">1</p></div>
                           <div className='text-center'>
                              <img src="../../public/img/first.png"/>
                              <h1>准备期</h1>
                           </div>
                          <p className="g-px-50 g-py-15">InvestDigital基金工厂协助您完成资质申请、协会备案、产品设立等产品发行前期流程</p>
                        </div>
                        <div className='col-lg-4 fa-bz-1'>
                           <div className='text-center num-title'><p className="g-pt-5">2</p></div>
                           <div className='text-center'>
                              <img src="../../public/img/second.png"/>
                              <h1>募集期</h1>
                           </div>
                          <p className="g-px-50 g-py-15">InvestDigital基金工厂通过ID官方向合格投资者展现您的产品，并且协助完成募集资金事项</p>
                          <img src="../../public/img/jiantou.png"/>
                        </div>
                        <div className='col-lg-4 fa-bz-1'>
                           <div className='text-center num-title'><p className="g-pt-5">3</p></div>
                           <div className='text-center'>
                              <img src="../../public/img/third.png"/>
                              <h1>运营期</h1>
                           </div>
                          <p className="g-px-50 g-py-15">InvestDigital基金工厂将帮助您打造自己的基金品牌，并且协助您扩大可管资产的资金规模</p>
                          <img src="../../public/img/jiantou.png"/>
                        </div>
                    </div>
                </div>

               <div className="fund-help-bgc">
                   <div className=' clear container g-pt-50 g-pb-10 g-pl-70'>
                       <div className='fund-help-factory '>
                           <div className="fund-what-content text-center">
                               <h1>基金工厂怎么帮到你?</h1>
                               <hr/>
                               <h2>作为基金发行的一站式服务平台，InvestDigital将全流程协助您完成如下重要工作：</h2>
                           </div>
                           <div className='fa-help-bz'>
                               <div className='col-lg-2 fa-bz-2'>
                                   <div className='text-center num-title'><p className='num-rotate'>1</p></div>
                                   <div className='text-center'>
                                       <h1>资质申请</h1>
                                   </div>
                                   <p className="num-info">帮助你注册公司，取得管理人资质</p>
                               </div>
                               <div className='col-lg-2 fa-bz-2'>
                                   <div className='text-center num-title'><p className='num-rotate'>2</p></div>
                                   <div className='text-center'>
                                       <h1>产品创设</h1>
                                   </div>
                                   <p className="num-info">共同确定基金要素，拟定基金协议，设置投资范围，设定风控指标</p>
                               </div>
                               <div className='col-lg-2 fa-bz-2'>
                                   <div className='text-center num-title'><p className='num-rotate'>3</p></div>
                                   <div className='text-center'>
                                       <h1>产品设立</h1>
                                   </div>
                                   <p className="num-info">协助完成合同签署，账户凯丽，资金归集，产品备案，直到产品投入运行</p>
                               </div>
                               <div className='col-lg-2 fa-bz-2'>
                                   <div className='text-center num-title'><p className='num-rotate'>4</p></div>
                                   <div className='text-center'>
                                       <h1>业绩鉴证</h1>
                                   </div>
                                   <p className="num-info">为产品提供具备公信力的估值</p>
                               </div>
                               <div className='col-lg-2 fa-bz-2'>
                                   <div className='text-center num-title'><p className='num-rotate'>5</p></div>
                                   <div className='text-center'>
                                       <h1>产品展示</h1>
                                   </div>
                                   <p className="num-info">产品净值可在id的“基金工厂”产品筛选器查询，并拥有自己的专属页面</p>
                               </div>
                               <div/>
                           </div>
                       </div>
                       <div className='fund-other-factory clear'>
                           <div className="fund-what-content text-center">
                               <h2>除此之外，基金工厂还将协助您完成更多基金运行相关工作</h2>
                           </div>
                           <div className='container col-lg-12 clear g-my-30'>
                               {rowLink.map(this.rowRender)}
                           </div>
                       </div>
                   </div>
               </div>
                <div className='container clear'>
                    <div className='g-pt-50 g-pb-100'>
                        <div className="fund-what-content text-center">
                            <h1>基金工厂核心优势</h1>
                            <hr/>
                        </div>
                        <div className="col-lg-3 g-mt-20 g-mb-50 g-px-35 fa-bz-4">
                            <h2 className="g-py-10 g-px-10 g-mb-20 text-center">一键发基金</h2>
                            <p>发行更便捷，您只需满足产品发行要求，剩下的基金工厂承包了</p>
                        </div>
                        <div className="col-lg-3 g-mt-20 g-mb-50 g-px-35 fa-bz-4">
                            <h2 className="g-py-10 g-px-10 g-mb-20 text-center">互动加展示</h2>
                            <p>募资更容易，每一位您在ID的粉丝，都有可能是您未来的投资者</p>
                        </div>
                        <div className="col-lg-3 g-mt-20 g-mb-50 g-px-35 fa-bz-4">
                            <h2 className="g-py-10 g-px-10 g-mb-20 text-center">权威机构合作</h2>
                            <p>悉心投研支持，定期投资专题电话会，持牌研究院深度分享</p>
                        </div>
                        <div className="col-lg-3 g-mt-20 g-mb-50 g-px-35 fa-bz-4">
                            <h2 className="g-py-10 g-px-10 g-mb-20 text-center">成长基金跟投</h2>
                            <p>潜力充分激发，全方位基金评价，优质基金不封顶跟投</p>
                        </div>
                        <p className=" clear text-center g-my-30 danger-tip">风险提示：投资有风险，相关数据不构成投资建议</p>
                        <Link className="form-style" to="/issuefund">
                            <button className="btn Issuing-fund g-mb-50" >我要发行基金</button>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default FundIssuance;
