import React, {Component} from 'react';
import './index.less';
import { url_lease_customer_edit } from '../../../../../url/url';
import Base from '../../base/base';
import UILoading from '../../../../../components-ui/loading/loading';
import EditHeader from '../../../../../components-ui/edit-header/edit-header';
import LayoutTitle from '../../../../../components-form/layout-title';
import LayoutCol from '../../../../../components-form/layout-col';
import LayoutGrid from '../../../../../components-form/layout-grid';
import MSelect from '../../../../../components-form/select/m-select';
import { Form, Input } from 'antd';
const TextArea = Input.TextArea;
const FormItem = Form.Item;

class CustomerEdit extends Base {
    addUrl = url_lease_customer_edit;
    // 编辑 页面的 头部更多操作
    editHeaderOption = [
        {
            title: '保存并新增记录',
            type: 'primary',
            handle: (e) => {
                console.log('保存并新增房源', this)
                console.log(this.props.form.getFieldsValue())

                this.add().then(data => {

                });
            }
        },
        {
            title: '取消',
            handle: () => {
                this.cancle();
            },
        }
    ]

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="visiting-customer-edit">
                {
                    this.state.loading && <UILoading></UILoading>
                }

                <EditHeader title="新增来访客户" option={ this.editHeaderOption }/>
                <div className="customer-edit-con">
                    <LayoutTitle title="基本信息"></LayoutTitle>
                    <LayoutCol>
                        <LayoutGrid required={true} label="客户名称">
                                <FormItem>
                                    {
                                        getFieldDecorator('customerName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid label="经纪公司">
                                <FormItem>
                                    {
                                        getFieldDecorator('economicCompany',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid required={true} label="联系人">
                                <FormItem>
                                    {
                                        getFieldDecorator('contacts',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid required={true} label="联系电话">
                                <FormItem>
                                    {
                                        getFieldDecorator('contactsPhone',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid required={true} label="意向房源">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid required={true} label="期望租金">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid required={true} label="沟通阶段">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<MSelect code="dic.communicationPhase"/>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid required={true} label="沟通方式">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<MSelect code="dic.communicationMode"/>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid label="备注">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<TextArea></TextArea>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                                    
                    <LayoutTitle title="附属信息"></LayoutTitle>
                    <LayoutCol>
                        <LayoutGrid required={true} label="客户来源">
                                <FormItem>
                                    {
                                        getFieldDecorator('customerSource',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid label="客户级别">
                                <FormItem>
                                    {
                                        getFieldDecorator('customerLevel',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid required={true} label="一级行业">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid required={true} label="二级行业">
                                <FormItem>
                                    {
                                        getFieldDecorator('floorName',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid required={true} label="当前地址">
                                <FormItem>
                                    {
                                        getFieldDecorator('currentAddress',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid required={true} label="当前面积(m²)">
                                <FormItem>
                                    {
                                        getFieldDecorator('currentArea',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid required={true} label="当前租金">
                                <FormItem>
                                    {
                                        getFieldDecorator('currentRent',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid required={true} label="当前到期">
                                <FormItem>
                                    {
                                        getFieldDecorator('expireDate',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutCol>
                        <LayoutGrid required={true} label="找房原因">
                                <FormItem>
                                    {
                                        getFieldDecorator('seekReason',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                        <LayoutGrid required={true} label="计划入住">
                                <FormItem>
                                    {
                                        getFieldDecorator('checkTime',{
                                            rules: [
                                                {
                                                    required: true, 
                                                    message: '请输入个人姓名或公司名称',
                                                }
                                            ]
                                        })(<Input placeholder="请输入楼宇名称"></Input>)
                                    }
                                </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                    <LayoutTitle title="系统信息"></LayoutTitle>
                    <LayoutCol>
                        <LayoutGrid label="负责人">
                            <FormItem>
                                {
                                    getFieldDecorator('floorName',{
                                        rules: [
                                            {
                                                required: true, 
                                                message: '请输入个人姓名或公司名称',
                                            }
                                        ]
                                    })(<Input placeholder="请输入楼宇名称"></Input>)
                                }
                            </FormItem>
                        </LayoutGrid>
                    </LayoutCol>
                </div>
            </div>
        )
    }
}

export default Form.create()(CustomerEdit);