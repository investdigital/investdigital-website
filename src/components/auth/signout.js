/**
 * Created by fengxiaoli on 2017/12/12.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/auth';
import Signin from './signin';
class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div>
                <div className="siginout">
                    <Signin location="{this.props.location}" />
                </div>
            </div>
        );
    }
}

export default connect(null, { signoutUser })(Signout);
