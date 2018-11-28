import React, { Component } from 'react';
import './index.less';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closed: false
        };
    }
    componentDidMount() {

    }
    onItemSelect = (type) => {
        
    }
    render() {
        return (
            <div className="component-left-nav">
                <div className="closed">
                    <i className="iconfont icon-caidananniu"></i>
                </div>
                <div className="nav-content">
                    <Menu mode="inline">
                        <Menu.Item key="1" onClick={() => this.onItemSelect('1')}>
                            <i className="iconfont icon-zhuomianduan"></i>
                            <span>办公桌面</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={() => this.onItemSelect('2')}>
                            <i className="iconfont icon-jianzhu"></i>
                            <span>我的楼宇</span>
                        </Menu.Item>
                        <Menu.Item key="3" onClick={() => this.onItemSelect('3')}>
                            <i className="iconfont icon-data_all"></i>
                            <span>数据报表</span>
                        </Menu.Item>
                        <Menu.Item key="4" onClick={() => this.onItemSelect('4')}>
                            <i className="iconfont icon-shape5"></i>
                            <span>系统设置</span>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default LeftNav;