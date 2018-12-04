import React, { Component } from 'react';
import Base from '../../base';
import './index.less';
import { Row, Col, Form, Input, Card, Select, Upload, Icon, Button, Anchor } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const FormItem = Form.Item;
const Option = Select.Option;
const { Link } = Anchor;

class BuildingAddForm extends Base {
    state = {
        imageUrl: '',
        urlData:''
    }

    
    test = () => {
        let arr = [1,2,3,4,5,6,7,8,9,0];
        const formItemLayout = {
            labelCol:{ span: 5 },
            wrapperCol:{ span: 12 }
        }
        
        let _arr =  arr.map((item) => {
            console.log('...');
            return (
                <FormItem
                    label="楼宇名称"
                    {...formItemLayout}
                    >
                    <Input placeholder="请输入楼宇名称"></Input>
                </FormItem>
            );
        });

        console.log(_arr);
        return _arr;
    }
    componentWillMount() {
        this.setState({
            urlData: this.urlData 
        })
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
                <Card style={{border:0,borderBottom:'1px solid #e8e8e8'}}>
                    <Row>
                        <Col span={12}>
                            <h2>新增楼宇</h2>
                        </Col>
                        <Col span={12} className="btns">
                            <Button type="primary" onClick={() => { this.add() }}>保存</Button>
                            <Button style={{margin: '0 10px'}} type="primary" onClick={() => { this.add() }}>保存并新增房源</Button>
                            <Button onClick={() => { this.cancle() }}>取消</Button>
                        </Col>
                    </Row>
                </Card>
                
                <Card className="row-no-border form-item" style={{ height: 'calc( 100% - 81px)', overflow: 'auto'}}>
                    {/* <Col span={ 4 }> */}
                        {/* <ul className="page-nav">
                            <li><a>基本信息</a></li>
                            <li>附属信息</li>
                            <li>系统信息</li>
                        </ul> */}
                    {/* </Col> */}
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
                        <Col span={ 7 } offset={ 2 }>
                            <FormItem label="楼宇图片">
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
                    </Row>
                    <Row>
                        <Col span={ 7 } offset={4}>
                            <Row gutter={10}>
                                <Col span="12">
                                    <FormItem label="楼座">
                                        {
                                            getFieldDecorator('name',{
                                                rules: [
                                                    {
                                                        required: true, 
                                                    }
                                                ]
                                            })((<Input placeholder="请输入楼座名称"></Input>))
                                        }
                                    </FormItem>
                                </Col>
                                <Col span="12">
                                    <FormItem label="楼座">
                                        {
                                            getFieldDecorator('name', {
                                                rules: [
                                                    { required: true }
                                                ]
                                            })(<Select style={{width:'100%'}}>
                                                <Option value="1">1栋</Option>
                                                <Option value="2">2栋</Option>
                                                <Option value="3">3栋</Option>
                                            </Select>)
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={ 7 } offset={2}>
                            <Row gutter={10}>
                                <Col span="12">
                                    <FormItem label="楼座">
                                        {
                                            getFieldDecorator('name',{
                                                required: true
                                            })((<Input placeholder="请输入楼座名称"></Input>))
                                        }
                                    </FormItem>
                                </Col>
                                <Col span="12">
                                    <FormItem label="楼座">
                                        {
                                            getFieldDecorator('name', {
                                                
                                            })(<Select style={{width:'100%'}}>
                                                <Option value="1">1栋</Option>
                                                <Option value="2">2栋</Option>
                                                <Option value="3">3栋</Option>
                                            </Select>)
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={4} span={16}><h2>附属信息</h2></Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="开发公司">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="物业服务">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="楼宇区位">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="详细地址">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="物业管理费（元/月/m2）">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="公摊水电费（元/月/m2）">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="室内水电费">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="空调类型">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="空调开放时间">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="空调费用（元/月/m2）">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="车位数量（个）">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="车位租金(元/月)">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="电梯品牌">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="电梯数量（台）">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="项目介绍">
                                {
                                    getFieldDecorator('company',{

                                    })(<TextArea placeholder="请输入公司名称"></TextArea>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="交通配套">
                                {
                                    getFieldDecorator('company',{

                                    })(<TextArea placeholder="请输入公司名称"></TextArea>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7} offset={4}>
                            <FormItem label="备注">
                                {
                                    getFieldDecorator('company',{

                                    })(<TextArea placeholder="请输入公司名称"></TextArea>)
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
                        <Col span={7} offset={4}>
                            <FormItem label="负责人">
                                {
                                    getFieldDecorator('company',{
                                        rules: [
                                            {
                                                required: true
                                            }
                                        ]
                                    })(<Select style={{width: '100%'}}>
                                        <Option value="">请选择</Option>
                                    </Select>)
                                }
                            </FormItem>
                        </Col>
                        <Col span={7} offset={2}>
                            <FormItem label="新增日期">
                                {
                                    getFieldDecorator('company',{

                                    })(<Input placeholder="请输入公司名称"></Input>)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    
                </Card>
            </div>
        );
    }
}

const BuildingAdd = Form.create()(BuildingAddForm);

export default BuildingAdd;