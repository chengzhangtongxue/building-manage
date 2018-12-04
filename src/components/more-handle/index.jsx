import React, { Component } from 'react';
import './index.less';

class MoreHandle extends Component {
    render() {
        let { style } = this.props;
        style = style || {};
        return (
            <ul className="more-oper" style={ style }>
                <li onClick={ this.props._importData }>导入</li>
                <li onClick={ this.props._exportData }>导出</li>
            </ul>
        );
    }
}

export default MoreHandle;