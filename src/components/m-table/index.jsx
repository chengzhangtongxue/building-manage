import React, { Component } from 'react';
import './index.less';
import { Table, Icon, LocaleProvider } from 'antd';
import { mAxios } from '@/util';
import MTransfer from '../m-transfer';


class MTable extends Component {
    state = {}
    columns = {
        // 所有的列
        allColumns: [
            {
                align: 'left',
                title: '楼宇名称',
                dataIndex: '1',
                key: '1',
                // fixed: 'left',
                width: 150
            },
            {
                title: '门牌位置',
                dataIndex: '2',
                key: '2',
                width: 150
            },
            {
                align: 'left',
                title: '层数',
                dataIndex: '3',
                key: '3',
                width: 150
            },
            {
                align: 'left',
                title: '层高',
                dataIndex: '4',
                key: '4',
                width: 150
            },
            {
                align: 'left',
                title: '租赁面积',
                dataIndex: '5',
                key: '5',
                width: 150
            },
            {
                align: 'left',
                title: '投资商',
                dataIndex: '6',
                key: '6',
                width: 150
            },
            {
                align: 'left',
                title: '新增日期',
                dataIndex: '7',
                key: '7',
                width: 150
            },
            {
                align: 'left',
                title: ' 入驻企业',
                dataIndex: '8',
                key: '8',
                width: 150
            },
            {
                align: 'left',
                title: '企均面积',
                dataIndex: '9',
                key: '9',
                width: 150
            },
            {
                align: 'left',
                title: '新增人',
                dataIndex: '10',
                key: '10',
                width: 150
            },
            {
                align: 'left',
                title: '负责人',
                dataIndex: '11',
                key: '11',
                width: 150
            },
            {
                align: 'left',
                title: '负责人2',
                dataIndex: '12',
                key: '12',
                width: 150
            }
        ],
        // 显示的列
        showColumns: [
            {
                align: 'left',
                title: '楼宇名称',
                dataIndex: '1',
                key: '1',
                // fixed: 'left',
                width: 150
            },
            {
                title: '门牌位置',
                dataIndex: '2',
                key: '2',
                // width: 150
            },
            {
                align: 'left',
                title: '层数',
                dataIndex: '3',
                key: '3',
                // width: 150
            },
            {
                align: 'left',
                title: '层高',
                dataIndex: '4',
                key: '4',
                // width: 150
            },
            {
                align: 'left',
                title: '租赁面积',
                dataIndex: '5',
                key: '5',
                // width: 150
            },
            {
                align: 'left',
                title: '投资商',
                dataIndex: '6',
                key: '6',
                // width: 150
            },
            {
                align: 'left',
                title: '新增日期',
                dataIndex: '7',
                key: '7',
                // width: 150
            },
            {
                align: 'left',
                title: ' 入驻企业',
                dataIndex: '8',
                key: '8',
                // width: 150
            },
            {
                align: 'left',
                title: '企均面积',
                dataIndex: '9',
                key: '9',
                // width: 150
            },
            {
                align: 'left',
                title: '新增人',
                dataIndex: '10',
                key: '10',
                // width: 150
            }
        ],
        // 隐藏的列
        hideColumns: ['11','12'],
        //
    }
    componentDidMount() {
        mAxios.ajax({
            url: '/data/list.json',
        }).then(data => {
            // console.log(data);
            this.data = data.resultData;
            this.setState({
                data: data.resultData
            })
        });
    }

    /**
     * 筛选字段
     */
    filterField = () => {
        this.setState({
            mTransfer: !this.state.mTransfer
        });
    }
    /**
     * 筛选字段回调
     */
    filterFieldSubHandle = (showColumns, hideColumns) => {
        this.setState({
            showColumns: showColumns,
            hideColumns: hideColumns
        });
    }
    
    /**
     * 单行点击
     */
    tRClickHandle = (item) => {
        this.props.rowClickHandle(item);
    }
    
    componentWillMount() {
        this.setState({
            showColumns: this.columns.showColumns,
            hideColumns: this.columns.hideColumns
        })
    }
    render() {
        let rowSelection = {
            columnWidth: 40,
            // fixed: 'left',
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            // getCheckboxProps: record => {
                // console.log(record.name === 'Disabled User');
                // return {
                //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
                //     name: record.name + '44',
                // }
            // },
        }
        let { loading } = this.props;
        let { showColumns, hideColumns } = this.state;
        let _showColumns = JSON.parse(JSON.stringify(showColumns));
        _showColumns.push({
            title: (currentPageData) => {
                return (
                    <Icon className="right-setting" onClick={ () => { this.filterField() }} type="setting" theme="filled" style={{fontSize: 18, width:20, cursor: 'pointer'}}/>
                );
            },
            width: 52,
            key: 'item-select',
            // fixed: 'right'
        });
        let allColumns = JSON.parse(JSON.stringify(this.columns.allColumns));
        return (
            
            <div className="component-m-table">
                <Table
                    onRow={(record) => {
                        return {
                            onClick: () => { this.tRClickHandle(record) },       // 点击行
                            // onMouseEnter: () => {},  // 鼠标移入行
                            // onXxxx...
                        };
                    }}
                    loading = { loading }
                    rowSelection={ rowSelection }
                    scroll={{  y: 'calc(100vh - 280px)' }} 
                    columns={ _showColumns } 
                    dataSource={this.state.data}
                    pagination={{
                        showSizeChanger: true,
                        showQuickJumper: true,
                    }}
                    >
                </Table>
                { this.state.mTransfer && <MTransfer 
                                            dataSource={ allColumns } 
                                            targetKeys={ this.state.hideColumns } 
                                            cancel={ this.filterField } 
                                            sure={ this.filterFieldSubHandle }/> }
                
            </div>
        );
    }
}

export default MTable;