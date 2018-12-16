import React, { Component } from 'react';
import './index.less';
import Base from '../../base/base';
import SMyBuilding from '../../../../../components/s-my-building/s-my-building';
import SMoreHandle from '../../../../../components/s-more-handle';
import MTable from '../../../../../components/m-table/m-table';
import ListFooter from '../../../../../components/list-footer/list-footer';
import { url_house_list } from '../../../../../url/url';
import { Divider, Icon, Row, Col, Button, Link } from 'antd';

class BuildingListWindow extends Base {
    queryUrl = url_house_list;

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
                <div className="window-head">
                    <div className="h-left">
                        <Icon type="appstore" theme="filled" onClick={ () => {this.setState({table: false})}} style={{fontSize: 24}}/>
                        <Icon type="appstore" theme="filled" onClick={ () => {this.setState({table: true})}}/>
                        <Divider type="vertical" />
                        <SMyBuilding style={{margin:'15px 0 0 20px'}}></SMyBuilding>
                    </div>
                    <div className="h-center"></div>
                    <div className="h-right">
                        <div className="oper"><Icon type="swap" className="icon-oper"/>操作</div>
                        <Button type="primary" onClick={ () => { this.props.history.push('/admin/house-edit') }}>
                            新增房源
                        </Button>
                        <SMoreHandle style={{margin:'15px 30px 0 20px'}}/>
                    </div>
                </div>
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