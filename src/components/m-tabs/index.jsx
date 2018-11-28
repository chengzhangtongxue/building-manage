import React, { Component } from 'react';
import './index.less';

import { Menu, Icon, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class MTabs extends Component {
    state = {
        activeKey: '1',
        panes : [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3' },
        ]
    }
    onChange = (activeKey) => {
        this.setState({
            activeKey 
        });
    }
    render() {
        return (
            <div className="component-tabs">
                <Tabs
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="card"
                // onEdit={this.onEdit}
            >
                {/* {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)} */}
                <TabPane tab={'办公桌面'} key={'1'} closable={true}>1</TabPane>
                <TabPane tab={'合同列表'} key={'2'}>2</TabPane>
                <TabPane tab={'楼宇列表与窗口'} key={'3'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口2'} key={'4'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口3'} key={'5'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口4'} key={'6'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口5'} key={'7'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口6'} key={'8'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口7'} key={'9'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口8'} key={'10'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口9'} key={'11'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口10'} key={'12'}>3</TabPane>
                <TabPane tab={'楼宇列表与窗口10'} key={'13'}>3</TabPane>
            </Tabs>
            </div>
        );
    }
}

export default MTabs;