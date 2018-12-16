import React from 'react';
import './index.less';
import { Icon, Button, Input } from 'antd';
import Base from '../../base/base';
import { url_lease_customer_info } from '../../../../../url/url'
import SMyBuilding from '../../../../../components/s-my-building/s-my-building';
import SMoreHandle from '../../../../../components/s-more-handle';
import TableCheckHandle from '../../../../../components/table-checked-handle';
import ListHeader from '../../../../../components-ui/list-header';
import MTable from '../../../../../components/m-table/m-table';
import ListFooter from '../../../../../components/list-footer/list-footer';

const Search = Input.Search;

/**
 * 来访客户信息
 */
class VisitingCustomerInfo extends Base {
    queryUrl = url_lease_customer_info;
    
    click = () => {
        this.setState({
            checkedHandle: {
                total: Math.floor(Math.random() * 100),
                flag: true
            }
        })
    }
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
                title: '新增客户',
                handle: () => {
                    this.props.history.push('/admin/customer-edit/add');
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
                        align: 'left',
                        title: '楼宇名称',
                        dataIndex: 'floorName',
                        key: 'floorName',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '空调类型',
                        dataIndex: 'airConditionerType',
                        key: 'airConditionerType',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '空调费',
                        dataIndex: 'airConditioningFee',
                        key: 'airConditioningFee',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '电梯数量',
                        dataIndex: 'elevatorsNumber',
                        key: 'elevatorsNumber',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '层高',
                        dataIndex: 'floorHeight',
                        key: 'floorHeight',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '投资商',
                        dataIndex: 'floorInvestor',
                        key: 'floorInvestor',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '层数',
                        dataIndex: 'floorNumber',
                        key: 'floorNumber',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        title: '备注',
                        dataIndex: 'floorRemark',
                        key: 'floorRemark',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '空调是否开放',
                        dataIndex: 'isAirConditioner',
                        key: 'isAirConditioner',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '车位租金',
                        dataIndex: 'parkingFee',
                        key: 'parkingFee',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '车位数量',
                        dataIndex: 'parkingNumber',
                        key: 'parkingNumber',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '物业公司',
                        dataIndex: 'propertyCompany',
                        key: 'propertyCompany',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '物业费',
                        dataIndex: 'propertyFee',
                        key: 'propertyFee',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        title: '公摊费',
                        dataIndex: 'publicFee',
                        key: 'publicFee',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        title: '详细地址',
                        dataIndex: 'address',
                        key: 'address',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        title: '水电费',
                        dataIndex: 'WaterElectricFee',
                        key: 'WaterElectricFee',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        title: '电梯品牌',
                        dataIndex: 'elevatorBrand',
                        key: 'elevatorBrand',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        title: '项目介绍',
                        dataIndex: 'projectIntroduction',
                        key: 'projectIntroduction',
                        width: 150
                    },
                    {
                        title: '交通概况',
                        dataIndex: 'trafficSurvey',
                        key: 'trafficSurvey',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        title: '状态',
                        dataIndex: 'floorStatus',
                        key: 'floorStatus',
                        width: 150
                    },
                    {
                        title: '修改人',
                        dataIndex: 'updateBy',
                        key: 'updateBy',
                        width: 150
                    },
                    {
                        title: '修改时间',
                        dataIndex: 'updateTime',
                        key: 'updateTime',
                        width: 150
                    },
                    {
                        title: '新建人',
                        dataIndex: 'createdBy',
                        key: 'createdBy',
                        width: 150
                    },
                    {
                        title: '新建时间',
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
            <div className="visiting-customer-info">

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

                <div className="customer-info-list">
                    {/* <MTable table={ this.state.tableOption } rowClickHandle={ this.tableRowClickHandle }/> */}
                </div>

                <ListFooter pagination={ this.state.pagination }></ListFooter>
            </div>
        );
    }
}

export default VisitingCustomerInfo;