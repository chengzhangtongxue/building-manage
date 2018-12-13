import React, { Component } from 'react';
import './index.less';

class GridTitle extends Component {
    render() {
        let { required, label } = this.props;
        return (
            <div className={ `grid-title ${required ? 'required' : ''}` }>{ label }</div>
        );
    }
}

export default GridTitle;