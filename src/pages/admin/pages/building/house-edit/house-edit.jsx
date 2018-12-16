import React, { Component } from 'react';
import './index.less';
import Base from '../../base/base';
// import { Card, Row, Col, Form, Input, Select, Upload, Icon} from 'antd';
import { Row, Col, Form, Input, Card, Select, Upload, Icon, Button, message } from 'antd';
import EditHeader from '../../../../../components-ui/edit-header/edit-header';
import LayoutTitle from '../../../../../components-form/layout-title';
import LayoutCol from '../../../../../components-form/layout-col';
import LayoutGrid from '../../../../../components-form/layout-grid';
import SelectBuildingForm from '../../../../../components-form/select-building/select-building';
import MSelect from '../../../../../components-form/select/m-select';
import Gallery from '../../../../../components-form/select/gallery';
import { url_house_edit } from '../../../../../url/url';
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class HouseAddForm extends Base {
    // 新增房源
    addUrl = url_house_edit;
    // 修改房源
    updateUrl = url_house_edit;

    state = {
        imageUrl: '',
        loading: false,
        
    }

    // 选择楼宇名称回调
    selectBuildingChangeHandle = (floorId) => {
        this.setState({
            floorId
        });
    }

    // 添加房源
    toDoAddHouse = () => {
        let houseList = [...this.state.houseList]; 
        houseList.push({});
        this.setState({
            houseList
        });
    }
    // 删除房源
    deleteHouseList = (index) => {
        let houseList = [...this.state.houseList];
        houseList.splice(index, 1);
        this.setState({
            houseList
        });
    }
    
    componentDidMount() {
        this.setState({
            floorId: '',
            // 添加房源列表
            houseList:[{}]
        });
    }
    
    
    editHeaderOption = [
        {
            title: '保存',
            type: 'primary',
            style: {},
            handle: () => {
                console.log('save', this);

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

                let data = JSON.parse(JSON.stringify(this.props.form.getFieldsValue()));
                let roomJson = this.state.houseList.map((item, index) => {
                    let floorNumber = data.floorNumber;
                    let roomNumber = data[`roomNumber_${index}`];
                    let roomArea = data[`roomArea_${index}`];
                    return {
                        floorNumber,
                        roomNumber,
                        roomArea
                    }
                });
                data.roomJson = JSON.stringify(roomJson);
                this.addUrlData = data;
                this.add().then(data => {
                    message.success('新增房源成功',2,() => {
                        this.hideLoading();
                        window.history.go(-1);
                    });
                });
            }
        },
        {
            title: '取消',
            handle: () => {
                console.log('cancle', this);
                this.props.history.go(-1);
            },
        }
    ]

    render() {
        const { getFieldDecorator } = this.props.form;
        const { imageUrl } = this.state;
        return (
            <div className="page-house-edit">
                <EditHeader title="新增房源" option={ this.editHeaderOption }/>
                <div className="house-edit-con">
                    <LayoutTitle title="基本信息"></LayoutTitle>
                    <LayoutCol>
                        <LayoutGrid required={true} label="楼宇名称">
                            <FormItem>
                                {
                                    getFieldDecorator('floorId',{
                                        rules: [
                                            {
                                                required: true, 
                                                message: '请选择楼宇名称',
                                            }
                                        ]
                                    })(<SelectBuildingForm onChangeHandle={ this.selectBuildingChangeHandle }></SelectBuildingForm>)
                                }
                            </FormItem>
                        </LayoutGrid>
                        <LayoutGrid label="楼座">
                            <FormItem >
                                {
                                    getFieldDecorator('galleryId', {
                                        rules: [
                                            {
                                                required: true, 
                                                message: '请选择楼宇名称',
                                            }
                                        ]
                                    })(<Gallery floorId={this.state.floorId}/>)
                                }
                            </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    
                    <Row>
                        <Col span="7" offset="4">
                            <Row>
                                <Col span="11">
                                    <FormItem label="楼层">
                                        {
                                            getFieldDecorator('floorNumber', {

                                            })(<Select style={{width: '100%'}}>
                                                <Option value="1">1</Option>
                                                <Option value="2">1</Option>
                                            </Select>)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span="2">
                                    <div style={{height: 90,lineHeight: '8', textAlign: 'center'}}>至</div>
                                </Col>
                                <Col span="11">
                                    <FormItem label="楼层">
                                        {
                                            getFieldDecorator('floorNumber', {

                                            })(<Select style={{width: '100%'}}>
                                                <Option value="1">1</Option>
                                                <Option value="2">1</Option>
                                            </Select>)
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                        <Col span="7" offset="2">
                             <FormItem label="自定义楼层">
                                    {
                                        getFieldDecorator('floorNumber', {
                                            
                                        })(<Select>
                                            <Option value="">请选择</Option>
                                            <Option value="1">1</Option>
                                            <Option value="2">1</Option>
                                        </Select>)
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                    
                    {
                        this.state.houseList && this.state.houseList.map((item, index) => {
                            return <Row key={index}>
                                        <Col span={7} offset={4}>
                                            <LayoutGrid label="编号（室）">
                                                <FormItem >
                                                    {
                                                        getFieldDecorator('roomNumber_'+index, {
                    
                                                        })(<Input></Input>)
                                                    }
                                                </FormItem>
                                            </LayoutGrid>
                                        </Col>
                                        <Col span={7} offset={2}>
                                            <LayoutGrid label="面积（m2)">
                                                <FormItem >
                                                        {
                                                            getFieldDecorator('roomArea_'+index, {
                                                                
                                                            })(<Input></Input>)
                                                        }
                                                </FormItem>    
                                                
                                            </LayoutGrid>
                                            {
                                                index > 0 ? <div style={{cursor: 'pointer',position: 'absolute',right: 0,top: 6,fontSize: 12,color: '#199ed8'}} onClick={ () => { this.deleteHouseList(index) } }>删除</div> : ''
                                            }
                                        </Col>
                                   </Row>
                        })
                    }
                    <Row>
                        <Col offset={4}>
                            <div style={{cursor: 'pointer',width: 100,color: '#199ed8'}} onClick={ this.toDoAddHouse }>+添加房源</div>
                        </Col>
                    </Row>
                    <LayoutTitle title="附属信息"></LayoutTitle>
                    <LayoutCol>
                        <LayoutGrid label="预租价格">
                            <FormItem>
                                {
                                    getFieldDecorator('roomPrice', {

                                    })(<Input></Input>)
                                }
                            </FormItem>
                            
                        </LayoutGrid>
                        <LayoutGrid label="付款方式">
                            <FormItem>
                                    {
                                        getFieldDecorator('paymentMethod', {
                                            
                                        })(<MSelect code="dic.paymentMethod"/>)
                                    }
                             </FormItem> 
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid label="起租年限(年)">
                            <FormItem>
                                {
                                    getFieldDecorator('leaseAge', {

                                    })(<Input></Input>)
                                }
                            </FormItem>
                        </LayoutGrid>
                        <LayoutGrid label="装修标准">
                            <FormItem>
                                {
                                    getFieldDecorator('decorationStandard', {
                                        
                                    })(<MSelect code="dic.decorationStandard"/>)
                                }
                            </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <Row>
                        <Col span="7" offset="4">
                            <FormItem label="得房率（%）">
                                {
                                    getFieldDecorator('roomRate', {

                                    })(<Input></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span="7" offset="2">
                             <FormItem label="室内层高（米）">
                                    {
                                        getFieldDecorator('storeyHeight', {
                                            
                                        })(<Input></Input>)
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                    <Row>
                        <Col span="7" offset="4">
                            <FormItem label="室内图片">
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
                        </Col>
                        <Col span="7" offset="2">
                             <FormItem label="房屋概况">
                                    {
                                        getFieldDecorator('housingOutline', {
                                            
                                        })(<TextArea></TextArea>)
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                    <LayoutTitle label="系统信息"></LayoutTitle>
                    <LayoutCol>
                        <FormItem label="负责人">
                            {
                                getFieldDecorator('personInCharge',{

                                })(<Select>
                                    <Option value="">请选择</Option>
                                    <Option value="1">负责人1</Option>
                                </Select>) 
                            }
                        </FormItem>
                    </LayoutCol>
                </div>
            </div>
        );
    }
}

const HouseAdd = Form.create()(HouseAddForm)
export default HouseAdd;
