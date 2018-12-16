import React, { Component } from 'react';
import './index.less';
import { Table, Icon, Button, Divider, Transfer, Pagination, message, Modal } from 'antd';
import { url_building_list, url_building_delete, url_building_un_lock, url_building_detail } from '../../../../../url/url.js';
import { mAxios } from '../../../../../util';
import { SUCCESS } from '../../../../../util/constant.js';
import Base from '../../base/base';
import MSlide from '../../../../../components/m-slide/m-slide';
import MCheck from '../../../../../components/m-check/m-check';
import MTable from '../../../../../components/m-table/m-table';
import MModal from '../../../../../components/m-modal/m-modal.jsx';
// import MoreHandle from '../../../../../components/';
import BuildingDetail from '../building-detail/building-detail';
import SMyBuilding from '../../../../../components/s-my-building/s-my-building';
import SMoreHandle from '../../../../../components/s-more-handle';
import TableCheckHandle from '../../../../../components/table-checked-handle';
import ListHeader from '../../../../../components-ui/list-header';
import ListFooter from '../../../../../components/list-footer/list-footer';

import { connect } from 'react-redux';
import { ACTION_CLOSE_DETAIL } from '../../../../../store/action';

class BuildingList extends Base {
    // 楼宇列表接口
    queryUrl = url_building_list
    // 作废接口
    deleteUrl = url_building_delete
    // 锁定解锁接口
    un_lockUrl = url_building_un_lock
    // 详情接口
    detailUrl = url_building_detail

    /**
     * 列表头部右侧的按钮事件信息
     */
    listHeaderOption = {
        btns: [
            {
                title: '查看统计',
                handle: () => {
                    console.log('查看统计', this);
                    this.setState({
                        table: !this.state.table
                    });
                }
            },
            {
                type: 'btn-add',
                btnType: 'primary',
                title: '新增楼宇',
                handle: () => {
                    this.props.history.push('/admin/building-edit/add');
                }
            },
            {
                type: 'more',
                exportData: () => {
                    console.log('导出', this)
                },
                importData: () => {
                    console.log('导入', this)

                }
            }
        ],
        // 弹窗层的更多操作 按钮
        moreOperBtns: [
            {
                title: '作废',
                icon: 'delete',
                handle: () => {
                    let { modal } = this.state;
                    modal.show = true;
                    modal.title = '作废';
                    modal.content = <p>作废后将放入回收站，确认要作废选中楼宇吗?</p>;
                    modal.handle = () => {
                        console.log('作废', this);
                        this.deleteUrlData = {
                            floorId: this.selectedData[0].floorId
                        }
                        this.delete().then(data => {
                            console.log(data);
                            if(data.resultCode === SUCCESS) {
                                message.success('删除成功');
                                this.init();
                            }
                        });
                    }
                    this.setState({
                        modal
                    });
                }
            },
            {
                title: '锁定',
                icon: 'lock',
                handle: () => {
                    console.log('锁定', this);
                    const modal = Modal.confirm();
                    modal.update({
                        title: '锁定',
                        content: '锁定后将无法进行编辑作废等操作，确定要锁定选中楼宇吗?',
                        onCancel: () => {
                            modal.destroy();
                        },
                        onOk: () => {
                            let floorId = this.selectedData.reduce((a, b) => {
                                return  `${a.floorId},${b.floorId}`;
                            });
                            console.log('floorId'+floorId);
    
                            this.un_lockUrlData = {
                                floorId: this.selectedData[0].floorId,
                                status: '0'
                            }
                            this.un_lock().then(data => {
                                message.success('锁定成功');
                                this.init();
                            });
                            modal.destroy();
                        }
                    });
                }
            },
            {
                title: '解锁',
                icon: 'unlock',
                handle: () => {
                    console.log('解锁', this);
                    const modal = Modal.confirm();
                    modal.update({
                        title: '解锁',
                        content: '作废后将放入回收站，确认要解锁所选楼宇吗？',
                        onCancel: () => {
                            modal.destroy();
                        },
                        onOk: () => {
                            let floorId = this.selectedData.reduce((a, b) => {
                                return  `${a.floorId},${b.floorId}`;
                            });
    
                            this.un_lockUrlData = {
                                floorId: this.selectedData[0].floorId,
                                status: '1',
                                loginToken: ''
                            }
                            this.un_lock().then(data => {
                                message.success('解锁成功');
                                this.init();
                            });

                            modal.destroy();
                        }
                    });

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
        // this.url.query = url_building_list;
        this.queryUrlData = {
            pageSize: 1,
            pageIndex: 20
        }
        this.setState({
            // 过滤器标志
            filter: false,
            // 已选中的过滤条件
            checkedList: [],
            // 统计 和 表格（默认展示表格）
            table: true,
            // 更多-操作
            moreHandleFlag: false,
            
            
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
        },() => {
            this.init();
        });
    }
    /**
     *初始化页面数据
     */
    init() {
        // 清空表格选中的行，初始化 loading 架子啊
        let { tableOption, listHeaderPop } = this.state;
        tableOption.selectedRowKeys = [];
        tableOption.loading = true;
        // 收起list -header 弹出层
        listHeaderPop.flag = false;
        listHeaderPop.total = 0;
        
        this.setState({
            tableOption,
            listHeaderPop
        });

        this.query().then(data => {
            let total = data.resultData.totalRecord;
            let { pagination } = this.state;
            pagination.total = total;
            this.setState({
                pagination
            });

            let { tableOption } = this.state;
            data.resultData.floorList.forEach((item, key) => {
                item.key = key;
            });
            tableOption.data = data.resultData.floorList;
            tableOption.loading = false;
            this.setState({
                tableOption
            });
        });
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
    /**
     * table的单行点击
     */
    tableRowClickHandle = (item) => {
        this.setState({
            // mSlideVisible: true,
            id: item.floorId
        });

        this.props.openBuildingDetail();

    }
    /**
     * 表格选中回调
     */
    render() {

        return (
            <div className="building-list">
                <ListHeader defaultOption={ this.listHeaderOption } stateOption={ this.state.listHeaderPop }>
                    <SMyBuilding style={{ marginLeft:20,marginTop: 15 }}/>
                </ListHeader>
                <div className="list-content">
                    {
                        this.state.table ? <MTable 
                                                table={ this.state.tableOption } 
                                                rowClickHandle={ this.tableRowClickHandle }/> :<ul className="stat-data">
                            {
                                [0,1,2,3,4,5,6,7,8].map(item => {
                                    return <li className="clearfix" key={item}>
                                    <div className="name">
                                        <span>喜马拉雅</span>
                                    </div>
                                    <div className="other-info">
                                        <div className="item">
                                            <div className="info-name">楼座数量</div>
                                            <div className="info-value">10栋</div>
                                        </div>
                                        <div className="item">
                                            <div className="info-name">租赁面积</div>
                                            <div className="info-value">10000m²</div>
                                        </div>
                                        <div className="item">
                                            <div className="info-name">空置面积</div>
                                            <div className="info-value">10000m²</div>
                                        </div>
                                        <div className="item">
                                            <div className="info-name">锁定面积</div>
                                            <div className="info-value">10000m²</div>
                                        </div>
                                        <div className="item">
                                            <div className="info-name">已租面积</div>
                                            <div className="info-value">10000m²</div>
                                        </div>
                                        <div className="item">
                                            <div className="info-name">出租率</div>
                                            <div className="info-value">75%</div>
                                        </div>
                                        <div className="item more">
                                            <div className="info-name">成交均价</div>
                                            <div className="info-value">3.3元/m2/天%</div>
                                        </div>
                                        <div className="item less">
                                            <div className="info-name">企业数</div>
                                            <div className="info-value">10</div>
                                        </div>
                                    </div>
                                    
                                </li>
                            
                                })
                            }
                        </ul>
                        
                    }
                </div>
                

                <ListFooter pagination={ this.state.pagination }></ListFooter>
                {/* <div className="list-footer">
                    <Pagination size="small" 
                        total={20} 
                        showSizeChanger 
                        showQuickJumper 
                        style={{marginTop:12,textAlign: 'right'}}
                        />
                </div>
                {
                    !this.state.table && <div className="footer">
                        <div className="name">合计</div>
                        <div className="f-item">楼宇（个）:<span>8</span></div>
                        <div className="f-item">租赁面积（m2）:<span>100,206</span></div>
                        <div className="f-item">空置面积（m2）:<span>1206</span></div>
                        <div className="f-item">锁定面积（m2）:<span>10206</span></div>
                        <div className="f-item">已租面积（m2）:<span>10206</span></div>
                    </div>
                } */}
                
                
                <MSlide> <BuildingDetail id={ this.state.id }/></MSlide>
                {
                    this.state.modal.show && <MModal modal={ this.state.modal }>{ this.state.modal.content }</MModal>
                }
                
            </div>
        );
    }
}

// export default BuildingList;
const mapStateToProps = (state) => {
    return {
        mSlideVisible: state.buildingReducer.mSlideVisible
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openBuildingDetail() {
            const action = {
                // type: 'update-detail-show',
                type: 'update-animation-drawer',
                visible: true
            }

            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuildingList);