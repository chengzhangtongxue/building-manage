import React, { Component } from 'react';
import './index.less';
import { Button, Icon } from 'antd';

class MHeader extends Component {
    render() {
        return (
            <div className="component-header">
                <Button className="upload">上传企业LOGO</Button>
                <div className="warn-user">
                    <Icon type="message" />
                    <Icon type="user"></Icon>
                </div>
            </div>
        );
    }
}

export default MHeader;