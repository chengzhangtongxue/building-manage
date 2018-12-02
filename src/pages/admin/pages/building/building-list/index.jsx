import React, { Component } from 'react';
import './index.less';
import { Table, Icon, Button, Divider, Transfer} from 'antd';
import { in_building_list } from '@/url';
import { mAxios } from '@/util';
import Base from '../../base';
import MSlide from '@/components/m-slide';
import MCheck from '@/components/m-check';
import MTable from '@/components/m-table';

class BuildingList extends Base {
    constructor(props) {
        super(props);
        this.state = {
            // 过滤器标志
            filter: false,
            // 已选中的过滤条件
            checkedList: [],
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
        // this.query().then(data => {
        //     console.log(data);
        //     console.log(_this.initData);
        // });
    }
    // 显示过滤条件
    toggleFilter = () => {
        this.setState({
            filter: !this.state.filter
        });
    }
    // 确定过滤器
    submitFilter = (filterData) => {
        console.log(filterData);
        this.setState({
            checkedList: filterData
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
                { this.state.filter && <MCheck 
                                            checkedList={ this.state.checkedList }
                                            submit={ this.submitFilter }
                                            close={ this.toggleFilter } 
                                            style={{left: 20, top: 50}}/> }
                <div className="list-handle">
                    <div className="my-building" onClick={ this.toggleFilter }>
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

                <MTable></MTable>
                <MSlide className={{ active: this.state.active}}>
                    这个是详情页面
                </MSlide>
            </div>
        );
    }
}

export default BuildingList;