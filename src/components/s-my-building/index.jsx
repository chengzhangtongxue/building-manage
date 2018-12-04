import React, { Component } from 'react';
import './index.less';
import { Icon, Popover, Button } from 'antd';

class SMyBuilding extends Component {
    state = {
        visible: false,
      }
      hide = () => {
        this.setState({
          visible: false,
        });
      }
    
      handleVisibleChange = (visible) => {
        this.setState({ visible });
      }
    
    render() {
        return (
            <Popover
                    content={<a onClick={this.hide}>Close</a>}
                    title="Title"
                    trigger="click"
                    visible={this.state.visible}
                    placement="bottom"
                    onVisibleChange={this.handleVisibleChange}
                >
            <div className="component-my-building">
                <span>我的楼宇</span>
                <Icon type="down" className="down-icon"></Icon>

                
            </div>
                </Popover>
        )
    }
}

export default SMyBuilding;