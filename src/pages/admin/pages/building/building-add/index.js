import React, { Component } from 'react';
import Base from '../../base';
import './index.less';
import { Row, Col, Form, Input, Card, Select, Upload, Icon, Button, Anchor } from 'antd';
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
                <Card className="row-no-border">
                    {/* <Col span={ 4 }> */}
                        {/* <ul className="page-nav">
                            <li><a>基本信息</a></li>
                            <li>附属信息</li>
                            <li>系统信息</li>
                        </ul> */}
                    {/* </Col> */}
                    <Col span={ 16 } offset={ 4 }>
                        {/* <Card style={{border:0, height: 'calc( 100vh - 200px)', overflow: 'auto'}}> */}
                            <Row className="row-no-border">
                                <h2>基本信息</h2>
                            </Row>
                            <Row>
                                <Col span={11} >
                                    <FormItem
                                        label="楼宇名称"
                                        >
                                        
                                        <Input placeholder="请输入楼宇名称"></Input>            
                                    </FormItem>
                                </Col>
                                <Col span={11} offset={2}>
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
                                <Col>
                                    
                                    
                                    
                                    
                                    <FormItem
                                        label="楼座"
                                        >
                                        <Select
                                            placeholder="请选择楼座"
                                            defaultValue="1"
                                            >
                                            <Option value="1">1栋</Option>
                                            <Option value="2">2栋</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="开发公司">
                                        {
                                            getFieldDecorator('companyName',{
                                                rules: [
                                                    {
                                                        required: true, message: 'Please confirm your password!',
                                                    }
                                                ]
                                            })(
                                                <Input placeholder={'请输入公司名称'}></Input>
                                            )
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        {/* </Card> */}
                    </Col>
                </Card>
            </div>
        );
    }
}

const BuildingAdd = Form.create()(BuildingAddForm);

export default BuildingAdd;