import React, { Component } from 'react';
import './index.less';
import Base from '../../base';
import SMyBuilding from '../../../../../components/s-my-building';
import SMoreHandle from '../../../../../components/s-more-handle';
import MTable from '../../../../../components/m-table';
import { Divider, Icon, Row, Col, Button, Link } from 'antd';

class BuildingListWindow extends Base {
    state = {
        table: false
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
                        this.state.table ? <MTable></MTable> : <FloorList/>
                    }
                    
                </div>
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