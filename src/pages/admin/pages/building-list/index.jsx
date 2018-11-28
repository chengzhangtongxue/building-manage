import React, { Component } from 'react';
import './index.less';
import { Table } from 'antd';

class BuildingList extends Component {
    constructor(props) {
        super(props);
        const data = [];
        for (let i = 0; i < 60; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
        this.state = {
            columns: [{
                title: 'Name',
                dataIndex: 'name',
                width: 150,
              }, {
                title: 'Age',
                dataIndex: 'age',
                width: 150,
              }, {
                title: 'Address',
                dataIndex: 'address',
              }],
            data,
            rowSelection : {
                onChange: (selectedRowKeys, selectedRows) => {
                  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                },
                getCheckboxProps: record => ({
                  disabled: record.name === 'Disabled User', // Column configuration not to be checked
                  name: record.name,
                }),
              }
        }
    }
    componentDidMount() {
        
    }
    render() {

        return (
            <div className="building-list">
                <div className="list-handle">

                </div>
                <Table rowSelection={this.state.rowSelection} columns={this.state.columns} dataSource={this.state.data} pagination={{ pageSize: 50, showTotal:total => `Total 50 items` }} scroll={{ y: 'calc(100vh - 280px)' }} />
            </div>
        );
    }
}

export default BuildingList;