import React, { Component } from 'react';
import './index.less';

class MyBuilding extends Component {
    state = {}
    componentDidMount() {
        this.setState({
            name: 'name state'
        });
    }
    render() {
        return (
            <div className="my-building">
                我的楼宇
                { this.state.name }
            </div>
        );
    }
}

export default MyBuilding;