import React, { Component } from 'react';
import './index.less';
import Base from '../../base/base';
import ListHeader from '../../../../../components-ui/list-header';
import SMyBuilding from '../../../../../components/s-my-building/s-my-building';
import ListFooter from '../../../../../components/list-footer/list-footer';

import MTable from '../../../../../components/m-table/m-table';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class ContractListMoney extends Base {
    /**
     * 列表头部操作
     */
    listHeaderOption = {
        btns: [
            {
                title: '筛选',
                handle: () => {
                    console.log('筛选', this)
                }
            },
            {
                type: 'btn-add',
                btnType: 'primary',
                title: '新增合同',
                handle: () => {
                    console.log('btn-add', this);
                }
            },
            {
                type: 'more',
            }
        ],
        checkHandle: {
            handle: () => {
                let { checkedHandle } = this.state;
                checkedHandle.flag = false;
                this.setState({
                    checkedHandle
                });
            }
        }
    }
    render() {
        return (
            <div className="contract-list-money">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="托管合同" key="1"></TabPane>
                    <TabPane tab="出租合同" key="2"></TabPane>
                    <TabPane tab="退租合同" key="3"></TabPane>
                </Tabs>
                <ListHeader option={ this.listHeaderOption } checkedHandle={ this.state.checkedHandle }>
                    <SMyBuilding style={{ marginLeft:20,marginTop: 15 }}/>
                </ListHeader>
                <div className="contract-list-con">
                    <MTable></MTable>
                </div>

                {/* 脚 */}
                <ListFooter></ListFooter>
            </div>
        )
    }
}

export default ContractListMoney;