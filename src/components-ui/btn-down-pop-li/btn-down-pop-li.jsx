import React, { Component } from 'react';
import './index.less';

class BtnDownPopLi extends Component {
    render() {
        return (
            <div className="component-ui-btn-down-pop-li">
                {
                    React.Children.map(this.props.children, (item, index)=> {
                        return item;
                    })
                }
            </div>
        );
    }
}

export default BtnDownPopLi;