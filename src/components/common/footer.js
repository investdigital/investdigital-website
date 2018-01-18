/**
 * Created by fengxiaoli on 2017/12/12.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const username = localStorage.getItem('username');
        return (
            <div className="footer">
                <img className="footer-content" src="../../public/img/footer.png"/>
            </div>
        );
    }

}
export default Footer;
