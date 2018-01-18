/**
 * Created by fengxiaoli on 2017/12/12.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './common/header';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="">
                <div className="headermain">
                <Header />
                <div className='banner-img'>
                    <img src="../../public/img/bannerimg.png" />
                </div>
                <div className='banner-rotate' data-label="正方形">
                <div className='banner-square'>
                   <img src="../../public/img/arrow.png" />
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;
