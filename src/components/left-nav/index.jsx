import React, { Component } from 'react';
import './index.less';

import { Menu } from 'antd';

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
    // 收起菜单
    pickupMenu = () => {
        this.setState({
            closed: !this.state.closed
        });
    }
    render() {
        let { closed } = this.state;

        return (
            <div className={ `component-left-nav ${closed ? 'closed' :''}` }>
                <div className="closed" >
                    <i className="iconfont icon-caidananniu" onClick={ () => { this.pickupMenu() }}></i>
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
                <div className="manage-use clearfix">
                    <div className="icon"></div>
                    <div className="info">
                        <div className="name">李成章</div>
                        <div className="company">南京松花有限公司</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftNav;