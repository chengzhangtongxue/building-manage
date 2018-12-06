import React, { Component } from 'react';
import './index.less';
import MCheck2 from '../m-check2';
import { Icon, Popover } from 'antd';

class SBase extends Component {
    state = {
        visible: false,
    }
    hide = () => {
        this.setState({
            visible: false
        });
    }
    
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    
    render() {
        let { style = {}, className = '' } = this.props;
        className += ' component-s-base '

        return (
            <Popover
                    content={ this.props.content }
                    trigger="click"
                    visible={this.state.visible}
                    placement="bottom"
                    onVisibleChange={this.handleVisibleChange}
                >
                <div style={ style } className={className}>
                    <span>{ this.props.name }</span>
                    <Icon type="down" className="down-icon"></Icon>
                </div>
            </Popover>
        )
    }
}

export default SBase;