import React, { Component } from 'react';
import './index.less';

import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

class SecondNav extends Component {
    render() {
        return (
            <div className="second-nav">
                <Menu mode="inline">
                    <Menu.SubMenu key="sub1" title={'楼宇'}>
                        <Menu.Item key="1">
                            <Link to="/admin/building-info">楼宇基本信息</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/admin/buliding-list">楼宇列表与窗口</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub2" title={'招租'}>
                        <Menu.Item key="3">来访客户信息</Menu.Item>
                        <Menu.Item key="4">来访客户记录</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub3" title={'合同'}>
                        <Menu.Item key="5">合同列表</Menu.Item>
                        <Menu.Item key="6">合同租期</Menu.Item>
                        <Menu.Item key="7">合同联系人</Menu.Item>
                        <Menu.Item key="8">合同账单</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="sub4" title={'收付款'}>
                        <Menu.Item key="9">收付款计划</Menu.Item>
                        <Menu.Item key="10">收付款记录</Menu.Item>
                        <Menu.Item key="11">收付款合计</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </div>
        );
    }
}

export default SecondNav;