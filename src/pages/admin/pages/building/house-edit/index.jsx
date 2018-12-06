import React, { Component } from 'react';
import './index.less';
import Base from '../../base';
// import { Card, Row, Col, Form, Input, Select, Upload, Icon} from 'antd';
import { Row, Col, Form, Input, Card, Select, Upload, Icon, Button } from 'antd';
import EditHeader from '../../../../../components-ui/edit-header';
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class HouseAddForm extends Base {
    state = {
        imageUrl: '',
        urlData:'',
        loading: false,
    }
    
    componentDidMount() {
        console.log(this.editHeaderOption);
    }
    
    
    editHeaderOption = [
        {
            title: '保存',
            type: 'primary',
            style: {},
            handle: () => {
                console.log('save', this);
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
                    <Row>
                        <Col offset={4} span={16}>
                            <h2>基本信息</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={ 7 } offset={4}>
                            <FormItem label="楼宇名称">
                                {
                                    getFieldDecorator('name',{
                                        rules: [
                                            {
                                                required: true, 
                                                message: 'Please confirm your password!',
                                            }
                                        ]
                                    })(<Input placeholder="请输入楼宇名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={ 7 } offset="2">
                            <FormItem label="楼座">
                                {
                                    getFieldDecorator('name', {

                                    })(<Select>
                                        <Option value="">请选择</Option>
                                    </Select>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="7" offset="4">
                            <Row>
                                <Col span="11">
                                    <FormItem label="楼层">
                                        {
                                            getFieldDecorator('name', {

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
                                            getFieldDecorator('name', {

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
                                        getFieldDecorator('name', {
                                            
                                        })(<Select>
                                            <Option value="">请选择</Option>
                                        </Select>)
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                    <Row>
                        <Col span="7" offset="4">
                            <FormItem label="编号（室）">
                                {
                                    getFieldDecorator('name', {

                                    })(<Input></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span="7" offset="2">
                             <FormItem label="面积（m2)">
                                    {
                                        getFieldDecorator('name', {
                                            
                                        })(<Input></Input>)
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={16}>
                            <h2>附属信息</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="7" offset="4">
                            <FormItem label="预租价格">
                                {
                                    getFieldDecorator('name', {

                                    })(<Input></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span="7" offset="2">
                             <FormItem label="付款方式">
                                    {
                                        getFieldDecorator('name', {
                                            
                                        })(
                                            <Select>
                                                <Option value="">请选择</Option>
                                            </Select>
                                        )
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                    <Row>
                        <Col span="7" offset="4">
                            <FormItem label="起租年限(年)">
                                {
                                    getFieldDecorator('name', {

                                    })(<Input></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span="7" offset="2">
                             <FormItem label="装修标准">
                                    {
                                        getFieldDecorator('name', {
                                            
                                        })(
                                            <Select>
                                                <Option value="">请选择</Option>
                                            </Select>
                                        )
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                    <Row>
                        <Col span="7" offset="4">
                            <FormItem label="得房率（%）">
                                {
                                    getFieldDecorator('name', {

                                    })(<Input></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span="7" offset="2">
                             <FormItem label="室内层高（米）">
                                    {
                                        getFieldDecorator('name', {
                                            
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
                                        getFieldDecorator('name', {
                                            
                                        })(<TextArea></TextArea>)
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={16}>
                            <h2>系统信息</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="7" offset="4">
                            <FormItem label="负责人">
                                {
                                    getFieldDecorator('name',{

                                    })(<Select>
                                        <Option value="">请选择</Option>
                                    </Select>) 
                                }
                            </FormItem>
                        </Col>
                        <Col span="7" offset="2">
                             <FormItem label="新增日期">
                                    {
                                        getFieldDecorator('name', {
                                            
                                        })(<TextArea></TextArea>)
                                    }
                             </FormItem>           
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const HouseAdd = Form.create()(HouseAddForm)
export default HouseAdd;
