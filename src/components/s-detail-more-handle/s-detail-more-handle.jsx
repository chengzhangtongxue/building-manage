import React, { Component } from 'react';
import './index.less';
import SBase from '../s-base/s-base';
import { Button, Icon } from 'antd';

class SDetailMoreHandle extends Component {
    render() {
        let { style={}, className=''} = this.props;
        // className += 'btn component-more-handle';
        className = 'btn'
        return (
            <SBase content={ this.props.list } className={ className } style={style}>
                <Button>更多<Icon type="down"></Icon></Button>
            </SBase>
        );
    }
}
export default SDetailMoreHandle;
