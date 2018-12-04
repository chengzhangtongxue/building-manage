import React, { Component } from 'react';
import './index.less';
import { Row, Col, Button, Icon, Tabs, Collapse, Table, List, Avatar } from 'antd';
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

class BuildingDetail extends Component {
    columns = [
        {
            title: '承租方',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '证件',
            dataIndex: 'idCard',
            key: 'idCard',
        }, 
        {
            title: '编号',
            dataIndex: 'no',
            key: 'no',
        }, 
        {
            title: '联系人',
            key: 'contacts',
            dataIndex: 'contacts'
        },
        {
            title: '职务',
            key: 'job',
            dataIndex: 'job'
        },
        {
            title: '电话1',
            key: 'tel1',
            dataIndex: 'tel1'
        },
        {
            title: '电话2',
            key: 'tel2',
            dataIndex: 'tel2'
        },
    ];
    data = [
        {
            key: '1',
            name: '南京科睿生物科技有限公司',
            idCard: '营业执照',
            no: '323',
            contacts: '范围',
            job:'总经理',
            tel1:'188343492323',
            tel2:'188343492323'
        },
        {
            key: '1',
            name: '南京科睿生物科技有限公司',
            idCard: '营业执照',
            no: '323',
            contacts: '范围',
            job:'总经理',
            tel1:'188343492323',
            tel2:'188343492323'
        }
    ];
    render() {
        return (
            <div className="building-detail">
                <div className="detail-head">
                    <Row>
                        <Col span={16}>
                            <div className="img">
                                <Icon type="file-text" theme="twoTone" />
                            </div>
                            <h2>喜玛拉雅商业中心</h2>
                        </Col>
                        <Col span={8}>
                            <Row>
                                <Col className="t-center" span={6} offset={1}><Button icon="edit">编辑</Button></Col>
                                <Col className="t-center" span={6}><Button icon="lock">锁定</Button></Col>
                                <Col className="t-center" span={6}><Button>更多<Icon type="down"/></Button></Col>
                                <Col className="t-center" span={2} offset={1}><Icon type="sync"  style={{marginTop:7,fontSize: 20}}></Icon></Col>
                                <Col className="t-center" span={2}><Icon type="close" style={{marginTop:7,fontSize: 20}}/></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 10}}>
                        <Col className="t-center" span={4}>
                            <div className="item-name">租赁面积</div>
                            <div className="num">2018m²</div>
                        </Col>
                        <Col className="t-center" span={4}>
                            <div className="item-name">出租率</div>
                            <div className="num">90%</div>
                        </Col>
                        <Col className="t-center" span={4}>
                            <div className="item-name">成交均价</div>
                            <div className="num">3.3元/天/m²</div>
                        </Col>
                        <Col className="t-center" span={4}>
                            <div className="item-name">新增日期</div>
                            <div className="num">2018-02-23</div>
                        </Col>
                        <Col className="t-center" span={4}>
                            <div className="item-name">负责人</div>
                            <div className="num">张建</div>
                        </Col>
                    </Row>
                </div>
                <div className="detail-content">
                    <Row gutter={ 10 }>
                        <Col span={18} style={{height:'100%'}}>
                            <div className="detail-resize">
                                <Tabs type="card">
                                    <TabPane tab="详情" key="1">
                                        <Collapse bordered={false} defaultActiveKey={['1']}>
                                            <Panel header="基本信息" key="1">
                                                <Row gutter={20}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">楼宇名称</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">喜马拉雅</div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">楼宇图片</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={20}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">楼座</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">A座</div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">楼层</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">1-18层</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">楼座</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">A座</div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">楼层</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">1-18层</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Panel>
                                            <Panel header="附属信息" key="2">
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">开发公司</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">物业服务</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Panel>
                                            <Panel header="统计信息" key="3">
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">租赁面积</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">空置面积</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">1-18层</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">租赁面积</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">空置面积</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">1-18层</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">租赁面积</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">空置面积</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">1-18层</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">租赁面积</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value"></div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">空置面积</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">1-18层</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Panel>
                                            <Panel header="系统信息" key="4">
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">新增日期</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">2020年10月22日</div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">负责人</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">张健</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row gutter={40}>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">新增日期</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">2020年10月22日</div></Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={12}>
                                                        <Row>
                                                            <Col className="border-bottom-1" span={10}><div className="name">负责人</div></Col>
                                                            <Col className="border-bottom-1" span={14}><div className="value">张健</div></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Panel>
                                        </Collapse>
                                    </TabPane>
                                    <TabPane tab="相关" key="2">
                                        <Collapse bordered={false} defaultActiveKey={['1']} className="border-bottom-1">
                                            <Panel key="4" showArrow={false} header={
                                                <Row>
                                                    <Col span={12}>
                                                        <div><Icon type="file-word" theme="twoTone" style={{marginRight: 10}}/>合同列表(1)</div>
                                                    </Col>
                                                    <Col span={12} style={{textAlign: 'right'}}><Icon type="plus" style={{marginRight: 20}}/><Icon type="down"/></Col>
                                                </Row>
                                            }>
                                                <Table columns={ this.columns} dataSource={ this.data} pagination={false}/>
                                            </Panel>
                                        </Collapse>
                                        <Collapse bordered={false} defaultActiveKey={['1']} className="border-bottom-1">
                                            <Panel key="4" showArrow={false} header={
                                                <Row>
                                                    <Col span={12}>
                                                        <div><Icon type="file-word" theme="twoTone" style={{marginRight: 10}}/>合同租期(1)</div>
                                                    </Col>
                                                    <Col span={12} style={{textAlign: 'right'}}><Icon type="plus" style={{marginRight: 20}}/><Icon type="down"/></Col>
                                                </Row>
                                            }>
                                                <Table columns={ this.columns} dataSource={ this.data} pagination={false}/>
                                            </Panel>
                                        </Collapse>
                                        <Collapse bordered={false} defaultActiveKey={['1']} className="border-bottom-1">
                                            <Panel key="4" showArrow={false} header={
                                                <Row>
                                                    <Col span={12}>
                                                        <div><Icon type="file-word" theme="twoTone" style={{marginRight: 10}}/>收付款计划(6)</div>
                                                    </Col>
                                                    <Col span={12} style={{textAlign: 'right'}}><Icon type="plus" style={{marginRight: 20}}/><Icon type="down"/></Col>
                                                </Row>
                                            }>
                                                <Table columns={ this.columns} dataSource={ this.data} pagination={false}/>
                                            </Panel>
                                        </Collapse>
                                        <Collapse bordered={false} defaultActiveKey={['1']} className="border-bottom-1">
                                            <Panel key="4" showArrow={false} header={
                                                <Row>
                                                    <Col span={12}>
                                                        <div><Icon type="file-word" theme="twoTone" style={{marginRight: 10}}/>收付款记录(6)</div>
                                                    </Col>
                                                    <Col span={12} style={{textAlign: 'right'}}><Icon type="plus" style={{marginRight: 20}}/><Icon type="down"/></Col>
                                                </Row>
                                            }>
                                                <Table columns={ this.columns} dataSource={ this.data} pagination={false}/>
                                            </Panel>
                                        </Collapse>
                                        <Collapse bordered={false} defaultActiveKey={['1']} className="border-bottom-1">
                                            <Panel key="4" showArrow={false} header={
                                                <Row>
                                                    <Col span={12}>
                                                        <div><Icon type="file-word" theme="twoTone" style={{marginRight: 10}}/>文档(6)</div>
                                                    </Col>
                                                    <Col span={12} style={{textAlign: 'right'}}><Icon type="plus" style={{marginRight: 20}}/><Icon type="down"/></Col>
                                                </Row>
                                            }>
                                                <Table columns={ this.columns} dataSource={ this.data} pagination={false}/>
                                            </Panel>
                                        </Collapse>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Col>
                        <Col span={6}  style={{height:'100%'}}>
                            <div className="detail-resize">
                                <Tabs>
                                    <TabPane tab="动态" key="3">
                                        <List
                                            itemLayout="horizontal"
                                            dataSource={this.data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <Icon type="message" style={{marginRight:10,position:'relative',top:4}}/>{item.name}
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                    <TabPane tab="团队" key="4">
                                        <p>Content of Tab Pane 2</p>
                                        <p>Content of Tab Pane 2</p>
                                        <p>Content of Tab Pane 2</p>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default BuildingDetail;