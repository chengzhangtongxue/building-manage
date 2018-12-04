import React from 'react';
import './index.less';
import Base from '../../base';
import SMyBuilding from '../../../../../components/s-my-building';
import { Divider, Icon, Row, Col, Button } from 'antd';

class BuildingListWindow extends Base {
    render() {
        return (
            <div className="building-list-window">
                <div className="window-head">
                    <Row>
                        <Col span={4}>
                            <Icon type="appstore" theme="filled" />
                            <Icon type="appstore" theme="filled" />
                            <Divider type="vertical" />
                            {/* <div className="my-building" onClick={ this.toggleFilter }>
                                <span>我的楼宇</span>
                                <Icon type="down" className="down-icon"></Icon>
                            </div> */}
                            <SMyBuilding></SMyBuilding>
                        </Col>
                        <Col span={16}></Col>
                        <Col span={4}>
                            <Button style={{border:0,boxShadow:'none'}} icon="plus">操作</Button>
                            <Button icon="plus">操作</Button>
                            <Button style={{border:0,boxShadow:'none'}} icon="plus">操作</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default BuildingListWindow;