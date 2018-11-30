import React, { Component } from 'react';
import './index.less';
import { Table } from 'antd';

class MTable extends Component {
    constructor(props) {
        this.state = {
            loading: false,
        }
    }
    render() {
        return (
            <Table
                bordered
                loading = {}
                rowSelection={this.state.rowSelection}
                scroll={{ y: 'calc(100vh - 280px)' }} 
                columns={this.state.columns} 
                dataSource={this.state.data}
                >

            </Table>
        );
    }
}