/**
 * Created by fengxiaoli on 2017/12/12.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderUserInfo() {
        if (this.props.authenticated) {
            const loginname = localStorage.getItem('loginname');
            return (
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="ordermenu-style dropdown user user-menu pull-right g-ml-10">
                            <a href="/signout" className="dropdown-toggle">
                                <span className="hidden-xs"> [退出]</span>
                            </a>
                        </li>
                        <li className="ordermenu-style dropdown user user-menu pull-right">
                            <a href="/myfund" className="dropdown-toggle">
                                <span className="hidden-xs">{loginname}</span>
                            </a>
                        </li>

                    </ul>
                </div>
            );
        }
    }
    render() {
        const username = localStorage.getItem('username');
        return (
            <div className="headerwidth">
                <nav className="header ">
                    <div className="header-position">
                        <div className="navdivimg">
                            <img src="../../public/img/logo.png" className="navimg" alt="" />
                            <span className='logotitle'>InvestDigital</span>
                        </div>
                        <ul className="headerul" >
                            <li ><a href="/" >首页</a></li>
                            <li ><Link to="/strategy">策略英雄榜</Link></li>
                            <li ><Link to="/mystrategy" >我的策略</Link></li>
                            <li ><a href="/fundlist" >基金排行榜</a></li>
                            <li ><Link to="/fundissuance" >基金发行服务</Link></li>
                        </ul>
                    </div>
                    <div className={`navbar-custom-menu ${this.props.authenticated ? "hidden" : ""}`}>
                        <ul className="nav navbar-nav">
                            <li className={`registerlia order-style `} ><Link to="/signup" >注册</Link></li>
                            <li className={`loginlia order-style `}><Link to="/signin"  >登录</Link></li>
                        </ul>
                    </div>
                    {this.renderUserInfo()}
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, { })(Header);
