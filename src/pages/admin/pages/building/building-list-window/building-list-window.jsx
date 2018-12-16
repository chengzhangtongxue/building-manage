import React, { Component } from 'react';
import './index.less';
import Base from '../../base/base';
import SMyBuilding from '../../../../../components/s-my-building/s-my-building';
import SMoreHandle from '../../../../../components/s-more-handle';
import MTable from '../../../../../components/m-table/m-table';
import ListHeader from '../../../../../components-ui/list-header';
import ListFooter from '../../../../../components/list-footer/list-footer';
import { url_house_list } from '../../../../../url/url';
import { Divider, Icon, Row, Col, Button, Link, Modal, message, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class BuildingListWindow extends Base {
    queryUrl = url_house_list;

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
                title: '新增房源',
                handle: () => {
                    this.props.history.push('/admin/house-edit/add');
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
                            message.success('删除成功');
                            this.init();
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
        this.setState({
            // 表格和楼宇列表的切换
            table: true,
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
                        title: '楼座名称',
                        dataIndex: 'galleryName',
                        key: 'galleryName',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '预租价格',
                        dataIndex: 'roomPrice',
                        key: 'roomPrice',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '起租年限',
                        dataIndex: 'leaseAge',
                        key: 'leaseAge',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '得房率',
                        dataIndex: 'roomRate',
                        key: 'roomRate',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '付款方式',
                        dataIndex: 'paymentMethod',
                        key: 'paymentMethod',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '装修标准',
                        dataIndex: 'decorationStandard',
                        key: 'decorationStandard',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        title: '室内层高',
                        dataIndex: 'storeyHeight',
                        key: 'storeyHeight',
                        // fixed: 'left',
                        width: 150
                    },
                    {
                        align: 'left',
                        title: '房屋概况',
                        dataIndex: 'housingOutline',
                        key: 'housingOutline',
                        // fixed: 'left',
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

    init() {
        this.query().then(data => {
            console.log(data);
            if(data.resultData.length > 0) {

            } else {
                // let { pagination } = this.state;
                // pagination.total = total;
                // this.setState({
                //     pagination
                // });

                let { tableOption } = this.state;
                // data.resultData.floorList.forEach((item, key) => {
                //     item.key = key;
                // });
                // tableOption.data = data.resultData.floorList;
                tableOption.loading = false;
                this.setState({
                    tableOption
                });
            }
        })
    }
    /**
     * 楼栋选择回调
     */
    selectGalleryChangeHandle = (activeKey) => {
        console.log('activeKey:'+activeKey)
    }
    /**
     * table的单行点击
     */
    tableRowClickHandle = (item) => {
        this.setState({
            // mSlideVisible: true,
            id: item.floorId
        });

        // this.props.openBuildingDetail();

    }
    render() {
        return (
            <div className="building-list-window">
                <ListHeader defaultOption={ this.listHeaderOption } stateOption={ this.state.listHeaderPop }>
                    <Icon type="appstore" theme="filled" onClick={ () => {this.setState({table: false})}} style={{fontSize: 24}}/>
                    <Icon type="appstore" theme="filled" onClick={ () => {this.setState({table: true})}}/>
                    <Divider type="vertical" />
                    <SMyBuilding style={{ marginLeft:20,marginTop: 15 }}/>
                    <div className="select-gallery">
                        <Tabs type="card" 
                            onChange={this.selectGalleryChangeHandle}
                            >
                            <TabPane tab="A 幢" key="1"></TabPane>
                            <TabPane tab="B 幢" key="2"></TabPane>
                            <TabPane tab="C 幢" key="3"></TabPane>
                            <TabPane tab="A 幢" key="4"></TabPane>
                            <TabPane tab="B 幢" key="5"></TabPane>
                            <TabPane tab="C 幢" key="6"></TabPane>
                            <TabPane tab="A 幢" key="7"></TabPane>
                            <TabPane tab="B 幢" key="28"></TabPane>
                            <TabPane tab="C 幢" key="9"></TabPane>
                        </Tabs>
                    </div>
                </ListHeader>
                <div className="window-content">
                    {
                        this.state.table ? <MTable table={ this.state.tableOption } rowClickHandle={ this.tableRowClickHandle }></MTable> : <FloorList/>
                    }
                    
                </div>
                <ListFooter pagination={ this.state.pagination }></ListFooter>
            </div>
        );
    }
}

export default BuildingListWindow;

class FloorList extends Component {
    render() {
        return (
            <div className="floor-list">
                <div className="floor-head clearfix">
                    <div className="h3">A幢</div>
                    <div className="head-info">
                        <div className="i-block">
                            <span>房源（户）:</span>
                            <span className="value">100</span>
                        </div>
                        <div className="i-block">
                            <span>租赁面积（m2）:</span>
                            <span className="value">100,203</span>
                        </div>
                        <div className="i-block">
                            <span>空置面积（m2）:</span>
                            <span className="value">100,203</span>
                        </div>
                        <div className="i-block">
                            <span>锁定面积（m2）:</span>
                            <span className="value">100,203</span>
                        </div>
                        <div className="i-block">
                            <span>已租面积（m2）:</span>
                            <span className="value">100,203</span>
                        </div>
                    </div>
                </div>
                <div className="floor-con">
                    {
                        [13,12,11,10,9,8,7,6,5,4,3,2,1].map(item => {
                            return <div className="floor-con-item" key={item}>
                            <div className="floor-name">{item}层</div>
                            <div className="room-distribution">
                                <Row gutter={ 10 }>
                                    <Col span={12} className="h-60">
                                        <div className="col-con">
                                            <div className="name-area">
                                                <span>1301</span>
                                                <span>1234m²</span>
                                            </div>
                                            <div className="end-time">2020/10/1到期</div>
                                        </div>
                                    </Col>
                                    <Col span={12} className="h-60">
                                        <div className="col-con">
                                            <div className="name-area">
                                                <span>1301</span>
                                                <span>1234m²</span>
                                            </div>
                                            <div className="end-time">2020/10/1到期</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        })
                    }
                    
                </div>
                <div className="floor-footer">
                    脚部
                </div>
            </div>
        );
    }
}