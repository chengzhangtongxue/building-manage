import React, { Component } from 'react';
import './index.less';
import { Table, Icon, Button, Divider, Transfer } from 'antd';
import { in_building_list } from '../../../../../url';
import { mAxios } from '../../../../../util';
import Base from '../../base';
import MSlide from '../../../../../components/m-slide/index.jsx';
import MCheck from '../../../../../components/m-check';
import MTable from '../../../../../components/m-table';
// import MoreHandle from '../../../../../components/';
import BuildingDetail from '../building-detail';
import SMyBuilding from '../../../../../components/s-my-building';
import SMoreHandle from '../../../../../components/s-more-handle';
import TableCheckHandle from '../../../../../components/table-checked-handle';

class BuildingList extends Base {
    constructor(props) {
        super(props);
        this.state = {
            // 过滤器标志
            filter: false,
            // 已选中的过滤条件
            checkedList: [],
            // 统计 和 表格（默认展示表格）
            table: true,
            // 更多-操作
            moreHandleFlag: false,
            // 详情弹窗出现
            mSlideVisible: false,
            // 表格选中回调标志
            checkedHandleFlag: false,
            // 已选择了几行数据
            checkedHandleTotal: 0,
            columns: [],
            data: [],
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
    /**
     * 查看统计和列表
     */
    toggleListStatistics = (e) => {
        this.setState({
            table: !this.state.table
        });
        e.preventDefault();
    }
    // 去新增
    addBuilding = () => {
        this.props.history.push('/admin/building-add');
    }
    // 点击更多
    moreHandle = () => {
        this.setState({
            moreHandleFlag: true
        });
        document.body.addEventListener('click',this.hideMoreHandle, false);
    }
    // 隐藏更多
    hideMoreHandle = () => {
        setTimeout(() => {
            this.setState({
                moreHandleFlag: false
            });
            document.body.removeEventListener('click', this.hideMoreHandle, false);
        }, 100);
    }
    /**
     * 导入
     */
    importData = () => {
        alert('导入');
    }
    /**
     * 导出
     */
    exportData = () => {
        alert('导出');
    }
    /**
     * table的单行点击
     */
    tableRowClickHandle = (item) => {
        console.log(item);
        this.setState({
            mSlideVisible: true
        });
    }
    /**
     * 表格选中回调
     */
    checkedHandle = (selectedRows) => {
        console.log(2);
        this.setState({
            checkedHandleTotal: selectedRows.length,
            checkedHandleFlag: true,
        });
    }
    render() {

        return (
            <div className="building-list">
                <div className="list-handle">
                    <SMyBuilding style={{ marginLeft:20,marginTop: 15 }}/>
                    <div className="right-handle">
                        <div className="handle" onClick={ this.toggleListStatistics }>
                            <Icon type="paper-clip" />
                            <span>查看统计</span>
                        </div>
                        <Button type="primary" onClick={this.addBuilding}>新增楼宇</Button>
                        <SMoreHandle style={{ margin: '15px 30px 0px 20px' }}/>
                    </div>

                    <TableCheckHandle 
                        total={ this.state.checkedHandleTotal }
                        className={ `${this.state.checkedHandleFlag ? 'active' : ''}` }
                        close={ () => { this.setState({ selectedHandleFlag: false }) } }
                        />
                </div>
                

                {
                    this.state.table ? <MTable checkedHandle={ this.checkedHandle } rowClickHandle={ this.tableRowClickHandle }></MTable> :<ul className="stat-data">
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
                
                {
                    !this.state.table && <div className="footer">
                        <div className="name">合计</div>
                        <div className="f-item">楼宇（个）:<span>8</span></div>
                        <div className="f-item">租赁面积（m2）:<span>100,206</span></div>
                        <div className="f-item">空置面积（m2）:<span>1206</span></div>
                        <div className="f-item">锁定面积（m2）:<span>10206</span></div>
                        <div className="f-item">已租面积（m2）:<span>10206</span></div>
                    </div>
                }
                
                
                <MSlide visible={ this.state.mSlideVisible }>
                    <BuildingDetail/>
                </MSlide>
                
            </div>
        );
    }
}

export default BuildingList;