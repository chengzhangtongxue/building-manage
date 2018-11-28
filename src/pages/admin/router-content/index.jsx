import React, { Component } from 'react';
import './index.less';
import MTabs from '../../../components/m-tabs';


class RouterContent extends Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div className="router-content">
                <MTabs></MTabs>
                <div className="children">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default RouterContent;