import React from 'react';
import './index.less';
import { Icon, Button, Input } from 'antd';
import Base from '../../base/base';
import { url_lease_visiting_record } from '../../../../../url/url'
import SMyBuilding from '../../../../../components/s-my-building/s-my-building';
import SMoreHandle from '../../../../../components/s-more-handle';
import TableCheckHandle from '../../../../../components/table-checked-handle';
import ListHeader from '../../../../../components-ui/list-header';
import MTable from '../../../../../components/m-table/m-table';
import ListFooter from '../../../../../components/list-footer/list-footer';
import MSlide from '../../../../../components/m-slide/m-slide';
const Search = Input.Search;
/**
 * 来访客户信息
 */
class VisitingRecord extends Base {
    queryUrl = url_lease_visiting_record;
    
    /**
     * 列表头部右侧的按钮事件信息
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
                title: '新增记录',
                handle: () => {
                    this.props.history.push('/admin/visiting-record-edit/add');
                }
            },
            {
                type: 'more',
            }
        ],
        // 弹窗层的更多操作 按钮
        moreOperBtns: [
            {
                title: '作废',
                icon: 'delete',
                handle: () => {
                }
            },
            {
                title: '锁定',
                icon: 'lock',
                handle: () => {
                }
            },
            {
                title: '解锁',
                icon: 'unlock',
                handle: () => {
                }
            },
            {
                title: '转移',
                icon: 'swap',
                handle: () => {
                    console.log('转移', this);
                }
            },
            {
                title: '导出选中',
                icon: 'download',
                handle: () => {
                    console.log('导出选中', this);
                }
            },
        ],
        // 关闭list-header-pop
        close:() => {
            let { listHeaderPop } = this.state;
            listHeaderPop.flag = false;
            listHeaderPop.total = 0;
            this.setState({
                listHeaderPop
            });
        }
    }

    componentDidMount() {
        this.setState({
            /**
             * 表格
             */
            tableOption: {
                // 所有表头字段
                columns: [
                    {
                        title: '来访记录id',
                        dataIndex: 'visitingId',
                        key: 'visitingId',
                        width: 150
                    },
                    {
                        title: '客户id',
                        dataIndex: 'customerId',
                        key: 'customerId',
                        width: 150
                    },
                    {
                        title: '意向房源',
                        dataIndex: 'intentionalSource',
                        key: 'intentionalSource',
                        width: 150
                    },
                    {
                        title: '租赁阶段',
                        dataIndex: 'leasePhase',
                        key: 'leasePhase',
                        width: 150
                    },
                    {
                        title: '来访方式',
                        dataIndex: 'visitType',
                        key: 'visitType',
                        width: 150
                    },
                    {
                        title: '期望租金',
                        dataIndex: 'expectedRent',
                        key: 'expectedRent',
                        width: 150
                    },
                    {
                        title: '成交率',
                        dataIndex: 'turnoverRate',
                        key: 'turnoverRate',
                        width: 150
                    },
                    {
                        title: '备注',
                        dataIndex: 'remark',
                        key: 'remark',
                        width: 150
                    },
                    {
                        title: '负责人',
                        dataIndex: 'personInCharge',
                        key: 'personInCharge',
                        width: 150
                    },
                    {
                        title: '创建时间',
                        dataIndex: 'creationTime',
                        key: 'creationTime',
                        width: 150
                    }
                ],
                // 表数据字段你
                data: [],
                // 正在加载loading,
                loading: true,
                // 选择行的key值
                selectedRowKeys:[],
                // checked 选中的回调
                checkedHandle: (selectedRowKeys, selectedRows) => {
                    let { listHeaderPop } = this.state;
                    listHeaderPop.flag = true;
                    listHeaderPop.total = selectedRows.length;
                    this.selectedData = selectedRows;
                    this.setState({
                        listHeaderPop
                    });
                    let { tableOption } = this.state;
                    tableOption.selectedRowKeys = selectedRowKeys;
                    this.setState({
                        tableOption
                    });
                }
            },
            /** footer 分页 */
            pagination: {
                total: 0,
                defaultPageSize: 20,
                onChangeHandle: (page, pageSize) => {
                    console.log(page, pageSize);
                    this.queryUrlData = {
                        pageSize: (page-1) * pageSize + 1,
                        pageIndex: pageSize
                    }
                    
                    this.init();
                },
                onShowSizeChangeHandle:(current,size) => {
                    console.log(current, size)
                    this.queryUrlData = {
                        pageSize: (current-1) * size + 1,
                        pageIndex: size
                    }
                    this.init();
                }
            }
        });
        this.init();
    }

    init = () => {
        this.query().then(data => {
            if(data.resultData.length <= 0) {
                return;
            }
            const tableOption = { ...this.state.tableOption };
            data.resultData.forEach((item,index) => item.key = index);
            tableOption.data = data.resultData;
            tableOption.loading = false;
            this.setState({
                tableOption
            });
            
            let total = data.resultData.totalRecord || 1;
            let { pagination } = this.state;
            pagination.total = total;
            this.setState({
                pagination
            });
        });
    }

    /**
     * table的单行点击
     */
    tableRowClickHandle = (item) => {
        this.setState({
            // mSlideVisible: true,
            // id: item.floorId
        });

        // this.props.openBuildingDetail();

    }

    render() {
        return (
            <div className="visiting-record">

                <ListHeader defaultOption={ this.listHeaderOption } stateOption={ this.state.listHeaderPop }>
                    <SMyBuilding style={{ marginLeft:20,marginTop: 15 }}/>
                    <div className="quick-search" style={{position:'absolute',height:60,width:280,left:'50%',top:0,marginLeft:-180}}>
                        <Search
                            placeholder="搜索楼座房号如:G-1213或联系人"
                            onSearch={value => console.log(value)}
                            enterButton
                            />
                    </div>
                </ListHeader>

                <div className="record-list">
                    {
                        this.state.tableOption && <MTable table={ this.state.tableOption } rowClickHandle={ this.tableRowClickHandle }/>
                    }
                </div>

                <ListFooter pagination={ this.state.pagination }></ListFooter>

                <MSlide>
                    
                </MSlide>
            </div>
        );
    }
}

export default VisitingRecord;