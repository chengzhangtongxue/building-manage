import React, { Component } from 'react';
import './index.less';
import { Table, Icon, Button, Divider } from 'antd';
import { in_building_list } from '@/url';
import { mAxios } from '@/util';
import Base from '../../base';
import MSlide from '@/components/m-slide';

class BuildingList extends Base {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            data: [],
            rowSelection : {
                // columnWidth: 100,
                // fixed: 'left'
                // onChange: (selectedRowKeys, selectedRows) => {
                    // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                // },
                // getCheckboxProps: record => {
                    // console.log(record.name === 'Disabled User');
                    // return {
                    //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
                    //     name: record.name + '44',
                    // }
                // },
              }
        }
    }
    componentDidMount() {
        const _this = this;
        this.url.query = in_building_list;
        this.urlData.query = {
            pageSize: 1,
            pageIndex: 10
        }
        this.query().then(data => {
            console.log(data);
            console.log(_this.initData);
            // _this.initData(data);
        });
    }
    initData(data) {
        let columns = [
            {
                title: '楼宇名称',
                dataIndex: 'floorName',
                width: 200
            },
            {
                title: '门牌位置',
                dataIndex: 'doorPosition',
                width: 200
            },
            {
                title: '层数',
                dataIndex: 'floorNumber',
                width: 200
            },
            {
                title: '层高',
                dataIndex: 'floorHeight',
                width: 200
            },
            {
                title: '操作',
                key: 'oper',
                render: (text, record) => {
                    return (
                        <span>
                            <a href="javascript:;">修改</a>
                            <Divider type="vertical"/>
                            <a href="javascript:;">详情</a>
                            <Divider type="vertical"/>
                            <a href="javascript:;">删除</a>
                        </span>
                    );
                }
            }
            // {
            //     title: '租赁面积',
                // dataIndex: 'floorHeight'
            // },
            // {
            //     title: '投资商',
            //     dataIndex: 'floorInvestor'
            // },
            // {
            //     title: '新增日期',

            // },
            // {
            //     title: '入驻企业'
            // },
            // {
            //     title: '企均面积',
            // },
            // {
            //     title: '新增人'
            // }
        ]
        this.setState({
            columns,
            data: data.resultData
        });
    }
    // 去新增
    addBuilding = () => {
        
        this.props.history.push('/admin/building-add');
    }
    // 
    buildingDetail = (item) => {
        console.log(item);
        this.setState({
            active: true
        });

        document.body.addEventListener('click', () => {
            this.setState({
                active: false
            });
        }, false)
    }
    render() {

        return (
            <div className="building-list">
                <div className="list-handle">
                    <div className="my-building">
                        <span>我的楼宇</span>
                        <Icon type="down" className="down-icon"></Icon>
                    </div>
                    <div className="right-handle">
                        <div className="handle">
                            <Icon type="paper-clip" />
                            <span>筛选</span>
                        </div>
                        <Button type="primary" onClick={this.addBuilding}>新增楼宇</Button>
                        
                        <div className="handle">
                            <span>更多</span>
                            <Icon type="down" className="down-icon"></Icon>
                        </div>
                    </div>
                </div>
                <Table 
                    bordered
                    loading = { false }
                    rowKey = { 'accountId' }
                    rowSelection={this.state.rowSelection} 
                    columns={this.state.columns} 
                    dataSource={this.state.data} 
                    pagination={{ pageSize: 50, showTotal:total => `共 50 条` }} 
                    scroll={{ y: 'calc(100vh - 280px)' }}
                    onRow = {
                        record => {
                            return {
                                onClick: () => {
                                    this.buildingDetail(record);
                                }
                            }
                        }
                    }
                     />
                <MSlide className={{ active: this.state.active}}>
                    这个是详情页面
                </MSlide>
            </div>
        );
    }
}

export default BuildingList;