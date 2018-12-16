import React, { Component } from 'react';
import Base from '../../base/base';
import './index.less';
import moment from 'moment';
import { url_building_add } from '../../../../../url/url';
import LayoutGrid from '../../../../../components-form/layout-grid';
import LayoutTitle from '../../../../../components-form/layout-title';
import LayoutGridCenter from '../../../../../components-form/layout-grid-center';
import UILoading from '../../../../../components-ui/loading/loading';
import EditHeader from '../../../../../components-ui/edit-header/edit-header';
import { Row, Col, Form, Input, Card, Select, Upload, Icon, Button, TimePicker, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { SUCCESS } from '../../../../../util/constant';
import LayoutCol from '../../../../../components-form/layout-col';
import GalleryUnit from '../../../../../components-form/gallery-unit/gallery-unit';
import AirConditioningType from '../../../../../components-form/select/airConditioning-type';
import ProvinceCityCounty from '../../../../../components-form/select/province-city-county';
const FormItem = Form.Item;
const Option = Select.Option;

class BuildingEditForm extends Base {
    addUrl = url_building_add
    // 编辑 页面的 头部更多操作
    editHeaderOption = [
        {
            title: '保存',
            type: 'primary',
            style: {},
            handle: (e) => {
                this.ajaxAddBuilding(e);
            }
        },
        {
            title: '保存并新增房源',
            type: 'primary',
            handle: (e) => {
                console.log('保存并新增房源', this)
                this.ajaxAddBuilding(e);
            }
        },
        {
            title: '取消',
            handle: () => {
                this.cancle();
            },
        }
    ]
    
    componentDidMount() {
        this.setState({
            floors: [{
                name: 'name'
            }]
        });
    }

    /**
     * 楼宇新增
     */
    ajaxAddBuilding = (e) => {
        console.log(this.props.form.getFieldsValue());
        let errs = 0;
        this.props.form.validateFields((err, values) => {
            if (err) {
                errs++;
            }
        });
        if(errs) {
            return;
        }
        
        const { floorName, floorInvestor, propertyCompany } = this.props.form.getFieldsValue();

        let data = JSON.parse(JSON.stringify(this.props.form.getFieldsValue()));
        data.company = moment(data.isAirConditioner).format('HH:mm:ss')
        
        let floorJson = this.state.floors.map((item, index) => {
            let gallery = data[`gallery${index}`];
            let meteringUnit = data[`meteringUnit${index}`];
            let maxFloorNumber = data[`maxFloorNumber${index}`];
            let minFloorNumber = data[`minFloorNumber${index}`];
            return {
                gallery,
                meteringUnit,
                maxFloorNumber,
                minFloorNumber
            }
        });
        data.floorJson = floorJson;
        this.addUrlData = data;
        this.add().then(data => {
            if(data.resultCode === SUCCESS) {
                message.success('新增楼宇成功',2,() => {
                    this.hideLoading();
                    window.history.go(-1);
                });
            }
        });
    }
    /**
     * 添加楼宇
     */
    toDoAddBuilding = () => {
        this.setState({
            floors: [...this.state.floors, {}]
        });
    }
    /**
     * 删除页面添加的楼宇
     */
    deleteFloors = (index) => {
        let _tempFloors = [...this.state.floors];
        _tempFloors.splice(index, 1);
        this.setState({
            floors: _tempFloors
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{ span: 5 },
            wrapperCol:{ span: 12 }
        }
        const { imageUrl } = this.state;
        return (
            <div className="building-add">
                {
                    this.state.loading && <UILoading></UILoading>
                }

                <EditHeader title="新增楼宇" option={ this.editHeaderOption }/>

                <Card className="row-no-border form-item" style={{ height: 'calc( 100% - 81px)', overflow: 'auto'}}>
                    <LayoutTitle title="基本信息"></LayoutTitle>
                    <LayoutCol>
                        <LayoutGrid required={true} label="楼宇名称">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入楼宇名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid label="楼宇图片">
                                <FormItem>
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={true}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        // beforeUpload={beforeUpload}
                                        // onChange={this.handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" /> : (
                                            <div>
                                                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                                                <div className="ant-upload-text">外立面</div>
                                            </div>
                                        )}
                                    </Upload>
                                </FormItem>
                            </LayoutGrid>
                    </LayoutCol>
                    
                    
                    {
                        this.state.floors && this.state.floors.map((item, index) => {
                            return <Row key={index}>
                                <Col span={ 7 } offset={4}>
                                    <LayoutGrid label="楼座">
                                        <FormItem>
                                            {
                                                getFieldDecorator('gallery'+index,{
                                                    rules: [
                                                        {
                                                            required: true, 
                                                        }
                                                    ]
                                                })((<Input placeholder="请输入楼座名称"></Input>))
                                            }
                                        </FormItem>
                                        <FormItem>
                                            {
                                                getFieldDecorator(`meteringUnit${index}`, {
                                                    rules: [
                                                        { required: true }
                                                    ]
                                                })(<GalleryUnit/>)
                                            }
                                        </FormItem>
                                    </LayoutGrid>
                                </Col>
                                <Col span={ 7 } offset={2}>
                                    <LayoutGridCenter label="楼层" center="至">
                                        <FormItem>
                                            {
                                                getFieldDecorator(`minFloorNumber${index}`,{
                                                    rules: [
                                                        {
                                                            required: true, 
                                                        }
                                                    ]
                                                })(<Input placeholder=""></Input>)
                                            }
                                        </FormItem>
                                        <FormItem>
                                            {
                                                getFieldDecorator(`maxFloorNumber${index}`, {
                                                    rules: [
                                                        { required: true }
                                                    ]
                                                })(<Input placeholder=""></Input>)
                                            }
                                        </FormItem>
                                    </LayoutGridCenter>
                                    {
                                        index > 0 ? <div className="delete-one-floor" onClick={ () => { this.deleteFloors(index) } }>删除</div> : ''
                                    }
                                </Col>
                            </Row>
                        })
                    }
                    <Row>
                        <Col offset={4}>
                            <div className="to-do-add-building" onClick={ this.toDoAddBuilding }>+添加楼宇</div>
                        </Col>
                    </Row>
                    <LayoutTitle title="附属信息"></LayoutTitle>
                    <Row>
                        <Col span={7} offset={4}>
                            <LayoutGrid label="开发公司">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorInvestor',{

                                        })(<Input placeholder="请输入公司名称"></Input>)
                                    }
                                </FormItem>
                            </LayoutGrid>
                        </Col>
                        <Col span={7} offset={2}>
                            <LayoutGrid label="物业服务">
                                <FormItem>
                                {
                                    getFieldDecorator('propertyCompany',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                                </FormItem>
                            </LayoutGrid>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <LayoutGrid label="楼宇区位">

                                
                                <FormItem>
                                    {
                                        getFieldDecorator('province',{

                                        })(<ProvinceCityCounty/>)
                                    }
                                </FormItem>
                                {/* <FormItem>
                                    {
                                        getFieldDecorator('city',{

                                        })(<Select>
                                            <Option value="">请选择</Option>
                                        </Select>)
                                    }
                                </FormItem>
                                <FormItem>
                                    {
                                        getFieldDecorator('county',{

                                        })(<Select>
                                            <Option value="">请选择</Option>
                                        </Select>)
                                    }
                                </FormItem> */}
                            </LayoutGrid>
                        </Col>
                        <Col span={7} offset={2}>
                            <LayoutGrid label="详细地址">
                                <FormItem>
                                    {
                                        getFieldDecorator('address',{

                                        })(<Input placeholder="请输入公司名称"></Input>)
                                    }
                                </FormItem>
                            </LayoutGrid>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="物业管理费（元/月/m2）">
                                {
                                    getFieldDecorator('propertyFee',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="公摊水电费（元/月/m2）">
                                {
                                    getFieldDecorator('publicFee',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="室内水电费">
                                {
                                    getFieldDecorator('WaterElectricFee',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="空调类型">
                                {
                                    getFieldDecorator('airConditionerType',{

                                    })(<AirConditioningType/>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="空调开放时间">
                                {
                                    getFieldDecorator('isAirConditioner',{

                                    })(<TimePicker style={{width:'100%'}}/>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="空调费用（元/月/m2）">
                                {
                                    getFieldDecorator('airConditioningFee',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="车位数量（个）">
                                {
                                    getFieldDecorator('parkingNumber',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="车位租金(元/月)">
                                {
                                    getFieldDecorator('parkingFee',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="电梯品牌">
                                {
                                    getFieldDecorator('elevatorBrand',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="电梯数量（台）">
                                {
                                    getFieldDecorator('elevatorsNumber',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="项目介绍">
                                {
                                    getFieldDecorator('projectIntroduction',{

                                    })(<TextArea placeholder="请输入公司名称"></TextArea>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="交通配套">
                                {
                                    getFieldDecorator('trafficSurvey',{

                                    })(<TextArea placeholder="请输入公司名称"></TextArea>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="备注">
                                {
                                    getFieldDecorator('floorRemark',{

                                    })(<TextArea placeholder="请输入公司名称"></TextArea>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <LayoutTitle title="系统信息"/>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="负责人">
                                {
                                    getFieldDecorator('personInCharge',{
                                        rules: [
                                            {
                                                required: true
                                            }
                                        ]
                                    })(<Select style={{width: '100%'}}>
                                        <Option value="">请选择</Option>
                                        <Option value="1">1号负责人</Option>
                                        <Option value="2">2号负责人</Option>
                                    </Select>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

const BuildingEdit = Form.create()(BuildingEditForm);

export default BuildingEdit;